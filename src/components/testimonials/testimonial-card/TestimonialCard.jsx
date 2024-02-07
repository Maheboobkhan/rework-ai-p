import React from "react";

function TestimonialCard({ content, author, role, imageSrc }) {
    return (
        <div className="flex flex-col grow p-5 w-full bg-violet-100 max-md:mt-10 max-sm:w-screen">
            <div className="text-lg md:text-sm leading-7 text-black">{content}</div>
            <div className="mt-8 text-2xl md:text-xl leading-8 text-violet-800">{author}</div>
            <div className="text-base font-medium capitalize text-neutral-500">{role}</div>
            <img loading="lazy" src={imageSrc} className="mt-4 max-w-full aspect-[3.33] w-[102px]" />
        </div>
    );
}

export default TestimonialCard;
