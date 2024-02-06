import React from "react";

function TopRibbon() {
    return (
        <>
            <div className="hidden md:flex gap-10 justify-between items-center px-20 py-3.5 text-lg leading-7 text-center text-white bg-zinc-800 max-md:flex-wrap max-md:px-5">
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
                        src="images/right-arrow.svg"
                        className="my-auto aspect-[1.54] fill-white w-[17px]"
                    />
                </div>
                <div className="flex gap-x-4">
                    <div className="flex items-center grow whitespace-nowrap">Join us in the WhatsApp </div>
                    <img
                        loading="lazy"
                        src="images/right-arrow.svg"
                        className="my-auto aspect-[1.64] fill-white w-[18px]"
                    />
                </div>
                <div className="flex gap-x-4">
                    <div className="flex items-center grow whitespace-nowrap">Join us in the WhatsApp </div>
                    <img
                        loading="lazy"
                        src="images/right-arrow.svg"
                        className="my-auto aspect-[1.64] fill-white w-[18px]"
                    />
                </div>
                <div className="flex gap-x-4">
                    <div className="flex items-center grow whitespace-nowrap">Join us in the WhatsApp </div>
                    <img
                        loading="lazy"
                        src="images/right-arrow.svg"
                        className="my-auto aspect-[1.54] fill-white w-[17px]"
                    />
                </div>
            </div>


            <div className="flex gap-1 justify-between items-center px-2 py-3.5 text-[14px] leading-7 text-white bg-zinc-800 md:hidden">
                <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                <img
                    loading="lazy"
                    src="images/inclined-arrow.svg"
                    className="aspect-[1.06] fill-white w-[18px]"
                />
                <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                <img
                    loading="lazy"
                    src="images/right-arrow.svg"
                    className="my-auto aspect-[1.54] fill-white w-[17px]"
                />
                <div className="whitespace-nowrap">Join us in the WhatsApp </div>
                <img
                    loading="lazy"
                    src="images/right-arrow.svg"
                    className="my-auto aspect-[1.64] fill-white w-[18px]"
                />
            </div>
        </>

    );
}

export default TopRibbon;

