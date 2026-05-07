'use client';

import React, { memo, useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { ToolNodeData } from '@/types/workflow';
import * as LucideIcons from 'lucide-react';
import { X } from 'lucide-react';

interface ToolNodeProps {
    id: string;
    data: ToolNodeData;
    selected?: boolean;
    isConnectable?: boolean;
}

/**
 * Custom Tool Node for ReactFlow
 * Displays a PDF tool as a draggable node in the workflow
 */
const ToolNode = memo(({ id, data, selected = false, isConnectable = true }: ToolNodeProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { deleteElements } = useReactFlow();

    // Get the icon component dynamically
    const iconName = toPascalCase(data.icon);
    const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName]
        || LucideIcons.FileText;

    // Handle delete node
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent node click from triggering
        deleteElements({ nodes: [{ id }] });
    };

    // Status colours matching the Figma workflow nodes
    const nodeBorderColor = {
        idle: 'border-[hsl(var(--color-border))]',
        processing: 'border-[hsl(var(--color-primary))]',
        complete: 'border-green-400 dark:border-green-600',
        error: 'border-red-400 dark:border-red-600',
    };

    const statusBadgeStyle = {
        idle: 'text-[hsl(var(--color-muted-foreground))]',
        processing: 'text-[hsl(var(--color-primary))] font-semibold',
        complete: 'text-green-600 dark:text-green-400 font-semibold',
        error: 'text-red-600 dark:text-red-400 font-semibold',
    };

    return (
        <div
            className={`
        relative px-3 py-2.5 rounded-xl shadow-sm border-2 transition-all duration-200
        bg-[hsl(var(--color-card))]
        ${nodeBorderColor[data.status]}
        ${selected ? 'ring-2 ring-[hsl(var(--color-primary))] ring-offset-2' : ''}
        ${isHovered ? 'shadow-md' : ''}
        min-w-[160px] max-w-[220px]
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <button
                    onClick={handleDelete}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-sm transition-colors z-10"
                    title="Delete node"
                >
                    <X className="w-3 h-3 text-white" />
                </button>
            )}

            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
                className="!w-3 !h-3 !bg-[hsl(var(--color-primary))] !border-2 !border-[hsl(var(--color-card))]"
            />

            {/* Content */}
            <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[hsl(var(--color-primary)/0.1)] shrink-0">
                    <IconComponent className="w-4 h-4 text-[hsl(var(--color-primary))]" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[hsl(var(--color-foreground))] truncate">
                        {data.label}
                    </p>
                    <p className={`text-[10px] uppercase tracking-wider mt-0.5 ${statusBadgeStyle[data.status]}`}>
                        {data.status === 'processing' && data.progress != null
                            ? `RUNNING · ${data.progress}%`
                            : data.status.toUpperCase()}
                    </p>
                </div>
            </div>

            {data.status === 'processing' && (
                <div className="mt-2 w-full h-1 bg-[hsl(var(--color-muted))] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[hsl(var(--color-primary))] rounded-full transition-all duration-300"
                        style={{ width: `${data.progress ?? 0}%` }}
                    />
                </div>
            )}

            {data.status === 'error' && data.error && (
                <p className="mt-1.5 text-[10px] text-red-500 truncate">{data.error}</p>
            )}

            {data.status === 'complete' && data.outputFiles && data.outputFiles.length > 0 && (
                <div className="mt-1.5 flex items-center gap-1">
                    <LucideIcons.Download className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">
                        {data.outputFiles.length} file{data.outputFiles.length > 1 ? 's' : ''}
                    </span>
                </div>
            )}

            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
                className="!w-3 !h-3 !bg-[hsl(var(--color-primary))] !border-2 !border-[hsl(var(--color-card))]"
            />
        </div>
    );
});

ToolNode.displayName = 'ToolNode';

/**
 * Convert kebab-case to PascalCase for icon lookup
 */
function toPascalCase(str: string): string {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

export default ToolNode;

