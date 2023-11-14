import "../styles/Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M15.0999 3.15288C16.9891 -0.347503 22.0109 -0.347513 23.9001 3.15287L34.1394 22.1253C35.9373 25.4566 33.5248 29.5 29.7394 29.5H9.26065C5.47516 29.5 3.06268 25.4566 4.86057 22.1253L15.0999 3.15288Z"
              fill="#FFF3E0"
            />
          </g>
          <g filter="url(#filter1_d_0_1)">
            <ellipse cx="14" cy="15.5" rx="9" ry="8.5" fill="#358211" />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="0.253662"
              y="0.527588"
              width="38.4927"
              height="36.9724"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_1"
              x="1"
              y="7"
              width="26"
              height="25"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <h1 className="title">
          <span className="span">GREEN</span> POINT
        </h1>
      </div>
      <div className="banner">
        <h2 className="green">ET VOUS ÇA GREEN ?</h2>
      </div>
    </>
  );
}

export default Header;
