import React from "react";

interface CricketBallProps {
  size?: number;
  variant?: "logo" | "hero";
  className?: string;
}

export default function CricketBall({
  size = 36,
  variant = "hero",
  className = "",
}: CricketBallProps) {
  if (variant === "logo") {
    // Exact path & inner shadow filter extracted from Figma node 5768:729 (Horizontal seam orientation)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ flexShrink: 0 }}
      >
        <g filter="url(#filter0_i_logo)">
          <path
            d="M-7.86805e-07 18C-9.62142e-07 13.9888 1.31286 10.2846 3.53125 7.29199C7.91845 10.9821 14.0555 12.75 20 12.75C24.7869 12.75 29.6984 11.6029 33.7207 9.22949C35.1717 11.8247 36 14.8154 36 18C36 21.1849 35.1719 24.1761 33.7207 26.7715C29.6983 24.3979 24.7871 23.25 20 23.25C14.0553 23.25 7.91849 25.0186 3.53125 28.709C1.31258 25.7163 2.2052e-07 22.0115 -7.86805e-07 18ZM5.51953 30.9707C9.21978 27.8765 14.5131 26.25 20 26.25C24.371 26.25 28.6196 27.2823 32.0381 29.2656C28.739 33.3713 23.6768 36 18 36C13.1541 36 8.75549 34.0851 5.51953 30.9707ZM5.51953 5.03027C8.75553 1.9156 13.1539 -5.74974e-07 18 -7.86805e-07C23.6771 -1.03496e-06 28.739 2.62929 32.0381 6.73535C28.6197 8.71854 24.3708 9.75 20 9.75C14.5133 9.75 9.21976 8.12425 5.51953 5.03027Z"
            fill="#D6211E"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_logo"
            x="0"
            y="-1"
            width="36"
            height="37"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    );
  }

  // Exact path & inner shadow filter extracted from Figma node 5768:759 (Vertical seam orientation)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <g filter="url(#filter0_i_hero)">
        <path
          d="M18 36C13.9888 36 10.2846 34.6871 7.29199 32.4688C10.9821 28.0815 12.75 21.9445 12.75 16C12.75 11.2131 11.6029 6.30165 9.22949 2.2793C11.8247 0.828329 14.8154 1.85202e-06 18 1.57361e-06C21.1849 1.29518e-06 24.1761 0.828073 26.7715 2.2793C24.3979 6.30173 23.25 11.2129 23.25 16C23.25 21.9447 25.0186 28.0815 28.709 32.4688C25.7163 34.6874 22.0115 36 18 36ZM30.9707 30.4805C27.8765 26.7802 26.25 21.4869 26.25 16C26.25 11.629 27.2823 7.38038 29.2656 3.96191C33.3713 7.261 36 12.3232 36 18C36 22.8459 34.0851 27.2445 30.9707 30.4805ZM5.03027 30.4805C1.9156 27.2445 -1.14995e-06 22.8461 -1.57361e-06 18C-2.06992e-06 12.3229 2.62929 7.26099 6.73535 3.96192C8.71853 7.38031 9.75 11.6292 9.75 16C9.75 21.4867 8.12425 26.7802 5.03027 30.4805Z"
          fill="#D6211E"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_hero"
          x="0"
          y="-1"
          width="36"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}
