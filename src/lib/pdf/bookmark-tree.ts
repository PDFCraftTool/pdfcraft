/** Move selected subtrees in document order, without duplicating selected descendants. */
export function moveBookmarkNodes<T extends { id: string; children: T[]; isExpanded?: boolean }>(
  nodes: T[], selectedIds: ReadonlySet<string>, targetId: string | null,
  position: 'before' | 'after' | 'inside' = 'after',
): T[] {
  const moving: T[] = [];
  const remove = (items: T[]): T[] => items.flatMap(node => {
    if (selectedIds.has(node.id)) {
      moving.push(node);
      return [];
    }
    return [{ ...node, children: remove(node.children) }];
  });
  const remaining = remove(nodes);
  if (moving.length === 0) return nodes;
  if (targetId === null) return [...remaining, ...moving];
  const contains = (items: T[]): boolean => items.some(node => node.id === targetId || contains(node.children));
  // A selected target/descendant vanishes with its subtree: reject the entire move.
  if (!contains(remaining)) return nodes;
  const insert = (items: T[]): T[] => items.flatMap(node => {
    if (node.id === targetId) {
      if (position === 'before') return [...moving, node];
      if (position === 'after') return [node, ...moving];
      return [{ ...node, children: [...node.children, ...moving], isExpanded: true }];
    }
    return [{ ...node, children: insert(node.children) }];
  });
  return insert(remaining);
}
