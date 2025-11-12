interface SvgPlaceholderProps {
  className?: string
  width?: number
  height?: number
}

export function SvgPlaceholder({ className = '', width = 1207, height = 929 }: SvgPlaceholderProps) {
  const aspectRatio = width / height
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4d4d8" />
          <stop offset="100%" stopColor="#e4e4e7" />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
      </defs>

      {/* Light mode background */}
      <g className="dark:hidden">
        <rect width={width} height={height} fill="url(#lightGradient)" />
        <circle cx={width / 2} cy={height / 2} r={Math.min(width, height) / 8} fill="#e4e4e7" opacity="0.5" />
      </g>

      {/* Dark mode background */}
      <g className="hidden dark:block">
        <rect width={width} height={height} fill="url(#darkGradient)" />
        <circle cx={width / 2} cy={height / 2} r={Math.min(width, height) / 8} fill="#3f3f46" opacity="0.5" />
      </g>
    </svg>
  )
}
