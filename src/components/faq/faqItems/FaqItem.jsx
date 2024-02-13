import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
                        <h3 className={`font-Poppins font-[18rem] text-sm text-white max-sm:text-black max-sm:font-[40rem]`}>
                            {question}
                        </h3>
                        <p className={`font-Poppins font-[16rem] ${isOpen ? 'block' : 'hidden'} mt-3 text-sm text-white text-opacity-65 max-sm:text-black max-sm:text-opacity-65`}>
                            {answer}
                        </p>
                    </div>
                    <div>
                        <span
                            className={`flex items-center justify-center text-8xl text-white md:group-hover:text-white transition duration-200 max-sm:text-black`}
                        >
                            {isOpen ? <RemoveIcon /> : <AddIcon />}
                        </span>
                    </div>
                </button>
            </div>
            <hr />
        </div>
    );
};

export default FaqItem;