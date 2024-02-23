import React from 'react';

const LogoFull = ({ width }) => {
    return (
        <a href={'/'}>
            <img
                src="/assets/images/logo-full.svg"
                style={{
                    backgroundColor: "transparent",
                    WebkitFilter: "brightness(0%)",
                    filter: "url(#colorFilter)",
                    width: width || "100%", // Use the provided width or default to 100%
                    height: "auto", // Maintain aspect ratio
                }}
                className="img-fluid"
                alt=""
            />

            <svg style={{ display: "none" }}>
                <defs>
                    <filter id="colorFilter" colorInterpolationFilters="sRGB">
                        <feColorMatrix
                            type="matrix"
                            values="
                                1   0   0   0   1
                                0   1   0   0   1
                                0   0   1   0   1
                                0   0   0   1   0"
                        />
                    </filter>
                </defs>
            </svg>
        </a>
    );
};

export default LogoFull;
