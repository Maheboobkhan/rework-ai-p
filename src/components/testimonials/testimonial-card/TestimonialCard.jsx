import React from "react";

function TestimonialCard({ content, author, role, imageSrc }) {
    return (
        <div className="flex flex-col grow p-5 w-full bg-violet-100 max-md:mt-10 max-sm:w-screen">
            <div className="font-Poppins text-lg md:text-sm leading-7 text-black max-sm:text-xs">{content}</div>
            <div className="font-Archivo mt-8 text-2xl md:text-xl leading-8 text-violet-800 max-sm:text-sm">{author}</div>
            <div className="font-Poppins text-base font-medium capitalize text-neutral-500 max-sm:text-xs">{role}</div>
            <img loading="lazy" src={imageSrc} className="mt-4 max-w-full aspect-[3.33] w-[102px]" />
        </div>
    );
}

export default TestimonialCard;
