import React from 'react';
import FaqItem from './faqItems/FaqItem';

const FaqQuestions = [
    {
        qid: 1,
        question: "What is an AI Interview? How Does it Work?",
        answer: 'Absolutely! Our platform allows assessment for any role. Specifically for technical roles, CredoHire comes with Integrated Development Environments (IDEs) and coding round option you can select at the time of job creation. The coding round comprises two Data Structure and Algorithm (DSA) questions. Candidates can choose their coding language — be it C++, Java, Python, or any preferred language, to answer or code the questions.'
    },
    {
        qid: 2,
        question: "Can I Evaluate the Candidates for Technical roles also?",
        answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
    },
    {
        qid: 3,
        question: "How can the AI interview help us in our Talent assessment Process?",
        answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
    },
    {
        qid: 4,
        question: "How do I get paid?",
        answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
    },
    {
        qid: 5,
        question: "How can the AI interview help us in our Talent assessment Process?",
        answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
    },
    {
        qid: 6,
        question: "How can I Get started with Rework AI?",
        answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
    },
    {
        qid: 7,
        question: "Why is Rework.ai the best platform for AI Interviews?",
        answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
    },
    {
        qid: 8,
        question: "How does the pricing work? When do you charge?",
        answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
    },
    {
        qid: 9,
        question: "How does the pricing work? When do you charge?",
        answer: "AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality."
    },
    {
        qid: 10,
        question: "How does the pricing work? When do you charge?",
        answer: "AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality."
    }
]

const FAQSection = () => {
    const handleOnsubmit = (e) => {
        e.preventDefault();
        // handle button click event
    }
    return (
        <div className="flex flex-col items-center px-20 py-12 max-md:px-5">
            <div className="font-Archivo justify-center p-2.5 ml-6 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50 max-sm:text-black">
                Our Happy Customers
            </div>
            <div className="font-Archivo mt-5 ml-6 text-5xl font-bold text-white capitalize max-md:text-4xl max-sm:text-black">
                FAQ
            </div>
            <div className="font-Archivo mt-2 ml-6 text-lg text-center text-white capitalize w-[496px] max-md:max-w-full max-sm:text-black">
                checkout the reviews from our mentees about how there experience was
                with us. and what not
            </div>

            {/* FAQ question answers */}
            <div className="w-screen grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                {FaqQuestions.map((faq) => (
                    <div key={faq.qid}>
                        <FaqItem question={faq.question} answer={faq.answer} />
                    </div>
                ))}
            </div>

            {/* Know More button */}
            <button onClick={handleOnsubmit} className="font-Poppins justify-center px-8 py-4 mt-24 text-lg text-center text-violet-800 whitespace-nowrap rounded-xl border-2 border-violet-800 border-solid shadow-2xl bg-neutral-100 max-md:px-5 max-md:mt-10 hover:bg-purple-950 hover:text-white">
                Know More
            </button>
        </div>
    );
};

export default FAQSection;