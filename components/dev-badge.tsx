export default function DevBadge({ name }: { name: string }) {
    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="absolute bottom-2 right-2 z-50 px-2 py-1 bg-black/70 text-white text-xs rounded-full font-mono">
            {name}
        </div>
    );
}
