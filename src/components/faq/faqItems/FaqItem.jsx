import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className="w-full px-2 mb-6">
            <div className="px-8 py-2 bg-transparent">
                <button
                    className="flex group w-full items-start justify-between text-left"
                    onClick={handleToggle}
                >
                    <div className="max-w-xl pr-5">
                        <h3 className={`font-Poppins font-[18px] text-sm ${isOpen ? 'text-white shadow-md' : 'text-white'} max-sm:text-black`}>
                            {question}
                        </h3>
                        <p className={`font-Poppins font-[16px] ${isOpen ? 'block' : 'hidden'} mt-3 text-sm text-white max-sm:text-black`}>
                            {answer}
                        </p>
                    </div>
                    <div>
                        <span
                            className={`flex items-center justify-center rounded-full text-lg ${isOpen ? 'shadow-md text-white' : 'bg-transparent text-white'} group-hover:shadow-md md:group-hover:text-white transition duration-200 max-sm:text-black`}
                        >
                            {isOpen ? '-' : '+'}
                        </span>
                    </div>
                </button>
            </div>
            <hr />
        </div>
    );
};

export default FaqItem;