type InstagramIconProps = {
  className?: string;
};

export function InstagramIcon({ className }: InstagramIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="17"
        height="17"
        x="3.5"
        y="3.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
    </svg>
  );
}
