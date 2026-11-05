import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import { StudioToolDrawer } from '@/components/studio/StudioToolDrawer';

const files = () => ['first.pdf', 'second.pdf', 'third.pdf'].map(
  (name) => new File([name], name, { type: 'application/pdf' })
);

function setup(extra = {}) {
  const onApply = vi.fn().mockResolvedValue(undefined);
  const view = render(
    <StudioToolDrawer toolId="merge-pdf" onClose={vi.fn()} onApply={onApply}
      isApplying={false} locale="en" {...extra} />
  );
  const choose = (selected: File[]) => fireEvent.change(
    view.container.querySelector('input[type="file"]')!,
    { target: { files: selected } }
  );
  return { ...view, onApply, choose };
}

describe('Studio append file selection', () => {
  it('shows the selected files in the order sent to Append', async () => {
    const { choose, onApply } = setup();
    const selected = files();
    choose(selected);
    const list = screen.getByRole('list', { name: 'Selected files' });
    expect(within(list).getAllByRole('listitem').map((row) => row.textContent))
      .toEqual(selected.map((file) => expect.stringContaining(file.name)));
    expect(screen.getByRole('button', { name: 'Move first.pdf up' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Move third.pdf down' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Append' }));
    await waitFor(() => expect(onApply).toHaveBeenCalledWith('merge-pdf', {
      additionalFiles: selected,
    }));
  });

  it('adds files dropped on the dropzone without letting the drop bubble up', async () => {
    const parentDrop = vi.fn();
    const onApply = vi.fn().mockResolvedValue(undefined);
    render(
      <div onDrop={parentDrop}>
        <StudioToolDrawer toolId="merge-pdf" onClose={vi.fn()} onApply={onApply}
          isApplying={false} locale="en" />
      </div>
    );
    const dropped = files();
    fireEvent.drop(screen.getByTestId('studio-append-dropzone'), {
      dataTransfer: { files: dropped, types: ['Files'] },
    });
    expect(parentDrop).not.toHaveBeenCalled();
    expect(screen.getByText('Selected files: 3')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Append' }));
    await waitFor(() => expect(onApply).toHaveBeenCalledWith('merge-pdf', {
      additionalFiles: dropped,
    }));
  });

  it('moves files in both directions and submits the displayed order', async () => {
    const { choose, onApply } = setup();
    const [first, second, third] = files();
    choose([first, second, third]);
    fireEvent.click(screen.getByRole('button', { name: 'Move third.pdf up' }));
    fireEvent.click(screen.getByRole('button', { name: 'Move first.pdf down' }));
    const rows = within(screen.getByRole('list', { name: 'Selected files' })).getAllByRole('listitem');
    expect(rows.map((row) => row.textContent)).toEqual([
      expect.stringContaining(third.name), expect.stringContaining(first.name),
      expect.stringContaining(second.name),
    ]);
    expect(onApply).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Append' }));
    await waitFor(() => expect(onApply).toHaveBeenCalledWith('merge-pdf', {
      additionalFiles: [third, first, second],
    }));
  });

  it('removes only the selected entry even when filenames match', async () => {
    const { choose, onApply } = setup();
    const first = new File(['one'], 'same.pdf', { type: 'application/pdf' });
    const second = new File(['two'], 'same.pdf', { type: 'application/pdf' });
    choose([first, second]);
    const rows = within(screen.getByRole('list', { name: 'Selected files' })).getAllByRole('listitem');
    fireEvent.click(within(rows[0]).getByRole('button', { name: 'Remove same.pdf' }));
    expect(screen.getAllByText('same.pdf')).toHaveLength(1);
    expect(onApply).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Append' }));
    await waitFor(() => expect(onApply).toHaveBeenCalledWith('merge-pdf', {
      additionalFiles: [second],
    }));
  });

  it('keeps earlier selections when more files are picked and allows reselection after removal', () => {
    const { choose } = setup();
    const [first, second] = files();
    choose([first]);
    choose([second]);
    expect(screen.getByText(first.name)).toBeInTheDocument();
    expect(screen.getByText(second.name)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Remove first.pdf' }));
    fireEvent.click(screen.getByRole('button', { name: 'Remove second.pdf' }));
    expect(screen.queryByRole('list', { name: 'Selected files' })).not.toBeInTheDocument();
    choose([first]);
    expect(screen.getByText(first.name)).toBeInTheDocument();
  });

  it('lets quick-added Studio documents use the same list controls', async () => {
    const [file] = files();
    const currentBlob = new Blob(['current document'], { type: 'application/pdf' });
    const { onApply } = setup({
      availableDocuments: [{ id: 'doc', name: file.name, file, currentBlob }],
    });
    fireEvent.click(screen.getByRole('button', { name: /first.pdf/ }));
    const list = screen.getByRole('list', { name: 'Selected files' });
    fireEvent.click(within(list).getByRole('button', { name: 'Remove first.pdf' }));
    expect(screen.queryByRole('list', { name: 'Selected files' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /first.pdf/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Append' }));
    await waitFor(() => expect(onApply).toHaveBeenCalled());
    expect(onApply.mock.calls[0][1].additionalFiles[0].size).toBe(currentBlob.size);
  });
});
