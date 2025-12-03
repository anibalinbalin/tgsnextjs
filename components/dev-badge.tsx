'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function DevBadge({ name }: { name: string }) {
    const [copied, setCopied] = useState(false);

    if (process.env.NODE_ENV !== 'development') return null;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(name);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="absolute top-2 right-2 z-50 px-2 py-1 bg-black/70 text-white text-xs rounded-full font-mono flex items-center gap-1.5">
            <span>{name}</span>
            <button
                onClick={handleCopy}
                className="hover:text-gray-300 transition-colors"
                aria-label="Copy component name"
            >
                {copied ? (
                    <Check className="w-3 h-3" />
                ) : (
                    <Copy className="w-3 h-3" />
                )}
            </button>
        </div>
    );
}
