interface ArrowIconProps {
    rotated?: boolean
}

export function ArrowIcon(props:ArrowIconProps) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: props.rotated ? 'rotate(0deg)' : 'rotate(-90deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <path
          d="M8 10L12 14L16 10"
          stroke="#737380"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="white"
        />
      </svg>
    );
  }


