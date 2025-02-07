import * as React from "react"
import AOS from "aos";
import gsap from "gsap";
import { SVGProps, useEffect, useRef, useState } from "react"

const InnovativeIdeas = (props: SVGProps<SVGSVGElement>) => {

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
                "#codeIcon",
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
                "+=0.15"
            )
            .fromTo(
                "#lightBulb",
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
                "+=0.15"
            )
            .fromTo(
                "#bulbLights",
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.15"
            );

        const handleAOS = (event: any) => {

            if (event.detail === svgRef.current && !isVisible) {
                console.log("here")
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
            viewBox="0 0 122.83 122.83"
        >
            <defs>
                <style>
                    {
                        ".fil0,.fil1,.fil2{fill:#faf4f0}.fil0,.fil1{fill-rule:nonzero}.fil1{fill:#fefefe}"
                    }
                </style>
            </defs>
            <g id="Layer_x0020_1">
                <g id="_1662090407424">
                    <path id="browserFrame"
                        d="M113.72 3.96H9.11c-1.42 0-2.71.58-3.64 1.51a5.14 5.14 0 0 0-1.51 3.64v104.61c0 1.42.58 2.71 1.51 3.64a5.14 5.14 0 0 0 3.64 1.51h104.61c1.42 0 2.71-.58 3.64-1.51a5.14 5.14 0 0 0 1.51-3.64V9.11c0-1.42-.58-2.71-1.51-3.64a5.14 5.14 0 0 0-3.64-1.51zM9.11 0h104.61c2.51 0 4.79 1.02 6.44 2.67a9.085 9.085 0 0 1 2.67 6.44v104.61c0 2.51-1.02 4.79-2.67 6.44a9.085 9.085 0 0 1-6.44 2.67H9.11c-2.51 0-4.79-1.02-6.44-2.67A9.085 9.085 0 0 1 0 113.72V9.11C0 6.6 1.02 4.32 2.67 2.67A9.085 9.085 0 0 1 9.11 0z"
                        className="fil0"
                    />
                    <path id="browserFrame"
                        d="M2.03 27.22c37.98.96 118.57 0 118.8 0l.05 3.95c-.23 0-80.92.97-118.94 0l.09-3.95zM13.87 17.43h2.38a2.38 2.38 0 1 0 0-4.76h-2.38a2.38 2.38 0 1 0 0 4.76zM25.75 17.43h2.38a2.38 2.38 0 1 0 0-4.76h-2.38a2.38 2.38 0 1 0 0 4.76zM37.64 17.43h2.38a2.38 2.38 0 1 0 0-4.76h-2.38a2.38 2.38 0 1 0 0 4.76zM80.44 17.43h28.53a2.38 2.38 0 1 0 0-4.76H80.44a2.38 2.38 0 1 0 0 4.76z"
                        className="fil1"
                    />
                    <path id="lightBulb"
                        d="M92.5 62.57a14.137 14.137 0 0 0-22.36-.37c-4.21 5.2-4.39 12.65-.43 18.05l5.19 7.08c.26.36.68.57 1.12.58l5.84.03 5.22.03c.47 0 .9-.23 1.17-.62l5.31-7.82c3.32-4.88 3.16-11.39-.41-16.09l-.65-.86zm-24.54-2.21c7-8.64 20.05-8.42 26.77.44l.66.86c4.32 5.69 4.52 13.58.5 19.5l-5.31 7.82a4.222 4.222 0 0 1-3.51 1.86l-5.22-.03-5.84-.03a4.216 4.216 0 0 1-3.37-1.73l-5.19-7.08c-4.74-6.46-4.52-15.39.51-21.61zM75.07 99.22c0-.82.62-1.48 1.38-1.48h10.36c.76 0 1.38.66 1.38 1.48s-.61 1.48-1.38 1.48H76.45c-.76 0-1.38-.66-1.38-1.48z"
                        className="fil2"
                    />
                    <path id="bulbLights"
                        d="M73.86 88.25c.76 0 1.38.66 1.38 1.48v1.48c0 .82.61 1.48 1.38 1.48h9.63c.76 0 1.38-.66 1.38-1.48v-1.48c0-.82.62-1.48 1.38-1.48.76 0 1.38.66 1.38 1.48v1.48c0 2.46-1.85 4.45-4.13 4.45h-9.63c-2.28 0-4.13-1.99-4.13-4.45v-1.48c0-.82.62-1.48 1.38-1.48zM100.86 71.81c0-.82.61-1.48 1.38-1.48h5.5c.76 0 1.38.66 1.38 1.48s-.61 1.48-1.38 1.48h-5.5c-.76 0-1.38-.66-1.38-1.48zM98.29 88.42c.39-.7 1.24-.95 1.9-.55l4.77 2.89c.66.4.89 1.3.5 2s-1.24.95-1.9.55l-4.76-2.89c-.66-.4-.89-1.3-.5-2zM54.09 71.81c0-.82.62-1.48 1.38-1.48h5.5c.76 0 1.38.66 1.38 1.48s-.62 1.48-1.38 1.48h-5.5c-.76 0-1.38-.66-1.38-1.48zM58.99 50.02c.53-.58 1.41-.6 1.97-.05l3.97 4c.56.56.58 1.48.04 2.07-.53.58-1.41.6-1.97.05l-3.98-4c-.55-.56-.57-1.48-.04-2.07zM104.47 50.58c-.53-.58-1.41-.6-1.97-.05l-3.97 3.99c-.55.56-.57 1.49-.04 2.07.53.58 1.41.6 1.97.05l3.97-4c.56-.56.57-1.49.04-2.07zM58.39 92.77c-.39-.7-.17-1.6.5-2l4.77-2.89c.66-.4 1.51-.15 1.9.55.39.7.16 1.6-.5 2l-4.77 2.89c-.66.4-1.51.16-1.9-.55zM81.6 42.89c.76 0 1.38.66 1.38 1.48v5.78c0 .82-.62 1.48-1.38 1.48-.76 0-1.38-.66-1.38-1.48v-5.78c0-.82.61-1.48 1.38-1.48zM82.63 60.42c.24-.77 1.02-1.2 1.74-.94.7.25 1.42.61 2.13 1.06.66.42.87 1.32.49 2.03-.39.7-1.23.94-1.89.52-.55-.35-1.1-.62-1.6-.8-.72-.26-1.11-1.1-.87-1.88zm5.86 3.84a1.3 1.3 0 0 1 1.94.06c1.41 1.61 2.36 3.41 2.66 5.66.29 2.21-.06 4.7-.98 7.69-.24.78-1.02 1.2-1.74.94s-1.11-1.1-.87-1.87c.86-2.77 1.08-4.76.87-6.33-.2-1.52-.83-2.78-1.94-4.04-.52-.6-.5-1.54.05-2.1zM76.69 103.64c0-.82.61-1.48 1.38-1.48h7.11c.76 0 1.38.66 1.38 1.48s-.62 1.48-1.38 1.48h-7.11c-.76 0-1.38-.66-1.38-1.48z"
                        className="fil2"
                    />
                    <path id="codeIcon"
                        d="M37.43 101.62H9.29c-1.11 0-2.01.64-2.01 1.43 0 .79.9 1.43 2.01 1.43h28.14c1.11 0 2.01-.64 2.01-1.43 0-.79-.9-1.43-2.01-1.43zM9.29 98.76h28.14c1.11 0 2.01-.64 2.01-1.43 0-.79-.9-1.43-2.01-1.43H9.29c-1.11 0-2.01.64-2.01 1.43 0 .79.9 1.43 2.01 1.43zM9.29 93.05h28.14c1.11 0 2.01-.64 2.01-1.43 0-.79-.9-1.43-2.01-1.43H9.29c-1.11 0-2.01.64-2.01 1.43 0 .79.9 1.43 2.01 1.43zM9.29 87.32h28.14c1.11 0 2.01-.64 2.01-1.43 0-.79-.9-1.43-2.01-1.43H9.29c-1.11 0-2.01.64-2.01 1.43 0 .79.9 1.43 2.01 1.43zM34.51 69.32c.53.53 1.41.53 1.94-.01l5.74-5.8c.53-.53.53-1.4 0-1.93l-5.74-5.8c-.53-.54-1.41-.54-1.94-.01-.54.53-.54 1.41-.01 1.94l4.78 4.83-4.78 4.83c-.53.54-.53 1.41.01 1.94zM17.55 55.77c-.54-.53-1.41-.53-1.94.01l-5.74 5.8c-.53.54-.53 1.4 0 1.93l5.74 5.8c.53.54 1.4.54 1.94.01s.54-1.41.01-1.94l-4.78-4.83 4.78-4.83c.53-.54.53-1.41-.01-1.94zM28.24 51.88l-8.07 20.3c-.28.7.06 1.5.77 1.78.7.28 1.5-.06 1.78-.77l8.07-20.3c.28-.7-.06-1.51-.77-1.78a1.36 1.36 0 0 0-1.78.77z"
                        className="fil0"
                    />
                </g>
            </g>
        </svg>
    )
};
export default InnovativeIdeas
