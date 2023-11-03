import React from "react";

export const UpArrowIcon = ({
  fill = 'currentColor',
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L19.39 9.39L22 12L20.61 13.39L12 4.79L3.39 13.39L2 12L4.61 9.39L12 2Z"
        fill={fill}
      />
    </svg>
  );
};
