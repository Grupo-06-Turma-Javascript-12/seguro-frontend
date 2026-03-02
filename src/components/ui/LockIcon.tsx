interface LockIconProps {
  unlocked: boolean;
  size?: number;
}

export function LockIcon({ unlocked, size = 72 }: LockIconProps) {
  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Corpo do cadeado */}
        <rect x="3" y="11" width="18" height="11" rx="2" />

        {/* Haste animada */}
        <path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          className={`
            origin-left
            transition-all duration-700 ease-out
            ${unlocked ? "-translate-x-2 -rotate-45" : ""}
          `}
        />
      </svg>
    </div>
  );
}