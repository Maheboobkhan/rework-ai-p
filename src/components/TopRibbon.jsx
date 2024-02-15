import {React, useState} from "react";

function TopRibbon() {
    const [stopAnimate, setStopAnimate] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center pl-5 pr-0 py-2 text-lg leading-7 text-center text-white bg-zinc-800">
                <div className="flex gap-10 justify-between items-center pl-5 pr-10 text-lg leading-7 text-center text-white [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-top">
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                </div>


                <div className="flex gap-10 justify-between items-center pl-0 pr-20 text-lg leading-7 text-center text-white [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-top">
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
                        <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                        <img
                            loading="lazy"
                            src="images/inclined-arrow.svg"
                            className="aspect-[1.06] fill-white w-[18px]"
                        />
                    </div>
                    <div className="flex gap-x-4">
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

