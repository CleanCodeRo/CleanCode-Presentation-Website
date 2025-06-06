import * as React from "react"
import AOS from "aos";
import gsap from "gsap";
import { SVGProps, useEffect, useRef, useState } from "react"

const TailoredSolutions = (props: SVGProps<SVGSVGElement>) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const timeline = gsap.timeline({ paused: false });

        timeline
            .fromTo(
                "#browserFrame",
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            )
            .fromTo(
                "#browserControls",
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
                "+=0.15"
            )

            .fromTo(
                "#browserTabs",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.15"
            )
            .fromTo(
                "#codeIcon",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.15"
            )
            .fromTo(
                "#browserLines",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.15"
            )
            .fromTo(
                "#crayon",
                { opacity: 0, x: 50, rotate: -45 },
                { opacity: 1, x: 0, rotate: 0, duration: 0.6, ease: "back.out(1.7)" },
                "+=0.15"
            );

        const handleAOS = (event: any) => {
            if (event.detail === svgRef.current && !isVisible) {
                setIsVisible(true);
                timeline.play();
            }
        };

        window.addEventListener("aos:in", handleAOS);
        return () => window.removeEventListener("aos:in", handleAOS);
    }, [isVisible]);

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={52}
            height={52}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
            viewBox="0 0 36.47 34.43"
        >
            <defs>
                <style>
                    {`.fil0 {fill:#FEFEFE;fill-rule:nonzero}
                      .fil1 {fill:#EBECEC;fill-rule:nonzero}`}
                </style>
            </defs>
            <g id="Layer_x0020_1">
                <g id="_1987801229184">
                    <path id="browserFrame"
                        d="M31.87 1.11l-29.32 0c-0.4,0 -0.76,0.16 -1.02,0.42 -0.26,0.26 -0.42,0.62 -0.42,1.02l0 29.32c0,0.4 0.16,0.76 0.42,1.02 0.26,0.26 0.62,0.42 1.02,0.42l29.32 0c0.4,0 0.76,-0.16 1.02,-0.42 0.26,-0.26 0.42,-0.62 0.42,-1.02l0 -29.32c0,-0.4 -0.16,-0.76 -0.42,-1.02 -0.26,-0.26 -0.62,-0.42 -1.02,-0.42zm-29.32 -1.11l29.32 0c0.71,0 1.34,0.29 1.81,0.75 0.46,0.46 0.75,1.1 0.75,1.81l0 29.32c0,0.7 -0.29,1.34 -0.75,1.81 -0.46,0.46 -1.1,0.75 -1.81,0.75l-29.32 0c-0.7,0 -1.34,-0.29 -1.81,-0.75 -0.46,-0.46 -0.75,-1.1 -0.75,-1.81l0 -29.32c0,-0.7 0.29,-1.34 0.75,-1.81 0.46,-0.46 1.1,-0.75 1.81,-0.75z"
                        className="fil0"
                    />
                    <path id="browserTabs"
                        d="M0.57 7.63c10.64,0.27 33.23,0 33.3,0l0.01 1.11c-0.07,0 -22.68,0.27 -33.34,0l0.03 -1.11z"
                        className="fil0"
                    />
                    <path id="browserControls"
                        d="M3.74 4.89l0.67 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l-0.67 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l0 0zM7.07 4.89l0.67 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l-0.67 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l0 0zM10.4 4.89l0.67 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l-0.67 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l0 0zM22.4 4.89l8 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l-8 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l0 0z"
                        className="fil0"
                    />
                    <g id="browserLines">
                        <path
                            d="M28.74 19.77l-7.33 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l7.33 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67z"
                            className="fil0"
                        />
                        <path
                            d="M28.74 23.77l-14.24 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l14.24 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67z"
                            className="fil0"
                        />
                        <path
                            d="M4.41 25.1l7.33 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l-7.33 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l0 0z"
                            className="fil0"
                        />
                        <path
                            d="M28.74 27.76l-7.33 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l7.33 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l0 0z"
                            className="fil0"
                        />
                        <path
                            d="M19.73 27.76l-15.33 0c-0.37,0 -0.67,0.3 -0.67,0.67 0,0.37 0.3,0.67 0.67,0.67l15.33 0c0.37,0 0.67,-0.3 0.67,-0.67 0,-0.37 -0.3,-0.67 -0.67,-0.67l0 0z"
                            className="fil0"
                        />
                    </g>
                    <g id="codeIcon">
                        <path
                            d="M12.88 18.32c0.19,0.19 0.51,0.19 0.71,-0l2.1 -2.12c0.19,-0.2 0.19,-0.51 0,-0.71l-2.1 -2.12c-0.19,-0.2 -0.51,-0.2 -0.71,-0 -0.2,0.19 -0.2,0.51 -0,0.71l1.75 1.76 -1.75 1.76c-0.19,0.2 -0.19,0.51 0,0.71l0 0z"
                            className="fil0"
                        />
                        <path
                            d="M6.69 13.37c-0.2,-0.2 -0.52,-0.19 -0.71,0l-2.1 2.12c-0.19,0.2 -0.19,0.51 0,0.71l2.1 2.12c0.19,0.2 0.51,0.2 0.71,0 0.2,-0.19 0.2,-0.51 0,-0.71l-1.75 -1.76 1.75 -1.76c0.19,-0.2 0.19,-0.51 -0,-0.71l0 0z"
                            className="fil0"
                        />
                        <path
                            d="M10.59 11.95l-2.94 7.41c-0.1,0.26 0.02,0.55 0.28,0.65 0.26,0.1 0.55,-0.02 0.65,-0.28l2.94 -7.41c0.1,-0.26 -0.02,-0.55 -0.28,-0.65 -0.26,-0.1 -0.55,0.02 -0.65,0.28z"
                            className="fil0"
                        />
                    </g>
                    <g id="crayon">
                        <path
                            d="M31.45 7.46l0 14.15 2.4 6.5 2.4 -6.5 0 -14.15c0,-0.97 -0.61,-1.76 -1.35,-1.76l-2.09 0c-0.75,0 -1.35,0.79 -1.35,1.76z"
                            className="fil0"
                        />
                        <path
                            d="M31.84 21.98l2.01 5.44 2.01 -5.44 -0.81 -0.77 -0.93 0.89 -0.02 0.02c-0.08,0.07 -0.17,0.1 -0.26,0.1 -0.1,-0 -0.19,-0.04 -0.27,-0.12l-0.92 -0.88 -0.81 0.77z"
                            className="fil1"
                        />
                        <path
                            d="M33.78 22.36c0.03,-4.42 0,-13.79 0,-13.81l0.1 -0.01c0,0.03 0.02,9.41 0,13.83l-0.1 -0.01z"
                            className="fil1"
                        />
                        <path
                            d="M34.98 22.36c0.02,-4.42 0,-13.79 0,-13.81l0.1 -0.01c0,0.03 0.03,9.41 0,13.83l-0.1 -0.01z"
                            className="fil1"
                        />
                        <path
                            d="M32.6 22.36c0.03,-4.42 0,-13.79 0,-13.81l0.1 -0.01c0,0.03 0.03,9.41 0,13.83l-0.1 -0.01z"
                            className="fil1"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
};

export default TailoredSolutions 