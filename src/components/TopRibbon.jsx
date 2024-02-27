import { React, useState, useRef } from "react";
import "../index.css"

function TopRibbon() {
    const ribbonRef = useRef(null);
    const ribbonRef1 = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        pauseAnimation();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        resumeAnimation();
    };

    const pauseAnimation = () => {
        if (ribbonRef.current) {
            ribbonRef.current.style.animationPlayState = "paused";
        }
        if (ribbonRef1.current) {
            ribbonRef1.current.style.animationPlayState = "paused";
        }
    };

    const resumeAnimation = () => {
        if (ribbonRef.current) {
            ribbonRef.current.style.animationPlayState = "running";
        }

        if (ribbonRef1.current) {
            ribbonRef1.current.style.animationPlayState = "running";
        }
    };
    return (
        <>
            <div className="flex justify-between items-center pl-5 pr-0 py-2 text-lg leading-7 text-center text-white bg-zinc-800" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                <div ref={ribbonRef} className="flex gap-10 justify-between items-center pl-5 pr-10 text-lg leading-7 text-center text-white [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-top">
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                </div>


                <div ref={ribbonRef1} className="flex gap-10 justify-between items-center pl-0 pr-20 text-lg leading-7 text-center text-white [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-top">
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                </div>
            </div>



        </>

    );
}

export default TopRibbon;

