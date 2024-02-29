// import React from 'react';
// import FaqItem from './faqItems/FaqItem';

// const FaqQuestions = [
//     {
//         qid: 1,
//         question: "What is an AI Interview? How Does it Work?",
//         answer: 'Absolutely! Our platform allows assessment for any role. Specifically for technical roles, CredoHire comes with Integrated Development Environments (IDEs) and coding round option you can select at the time of job creation. The coding round comprises two Data Structure and Algorithm (DSA) questions. Candidates can choose their coding language — be it C++, Java, Python, or any preferred language, to answer or code the questions.'
//     },
//     {
//         qid: 2,
//         question: "Can I Evaluate the Candidates for Technical roles also?",
//         answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
//     },
//     {
//         qid: 3,
//         question: "How can the AI interview help us in our Talent assessment Process?",
//         answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
//     },
//     {
//         qid: 4,
//         question: "How do I get paid?",
//         answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
//     },
//     {
//         qid: 5,
//         question: "How can the AI interview help us in our Talent assessment Process?",
//         answer: 'Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus.' // Garbage text
//     },
//     {
//         qid: 6,
//         question: "How can I Get started with Rework AI?",
//         answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
//     },
//     {
//         qid: 7,
//         question: "Why is Rework.ai the best platform for AI Interviews?",
//         answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
//     },
//     {
//         qid: 8,
//         question: "How does the pricing work? When do you charge?",
//         answer: 'AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality.' // Garbage text
//     },
//     {
//         qid: 9,
//         question: "How does the pricing work? When do you charge?",
//         answer: "AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality."
//     },
//     {
//         qid: 10,
//         question: "How does the pricing work? When do you charge?",
//         answer: "AI interviews ensure fair, consistent evaluations by analysing diverse candidate data like verbal responses and facial expressions, offering deeper insights into suitability. They expedite screening, saving time for recruiters and candidates, ultimately enhancing objectivity and assessment quality."
//     }
// ]

// const FAQSection = () => {
//     const handleOnsubmit = (e) => {
//         e.preventDefault();
//         // handle button click event
//     }
//     return (
//         <div className="flex flex-col items-center px-20 py-12 max-md:px-5">
//             <div className="font-Archivo justify-center p-2.5 ml-6 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50 max-sm:text-sm">
//                 Our Happy Customers
//             </div>
//             <div className="font-Archivo mt-5 ml-6 text-5xl font-bold text-white capitalize max-md:text-4xl max-sm:text-black max-sm:font-Poppins max-sm:text-3xl">
//                 FAQ
//             </div>
//             <div className="font-Archivo mt-2 ml-6 text-lg text-center text-white capitalize w-[496px] max-md:max-w-full max-sm:text-black max-sm:text-sm">
//                 checkout the reviews from our mentees about how there experience was
//                 with us. and what not
//             </div>

//             {/* FAQ question answers */}
//             <div className="w-screen lg:px-20 md:px-8 grid md:grid-cols-2 grid-cols-1 gap-5 mt-20">
//                 {FaqQuestions.map((faq) => (
//                     <div key={faq.qid}>
//                         {faq.qid === 1 && <hr className="mx-auto border-white max-sm:border-black max-sm:w-[90%] md:mb-5 mb-3" />}
//                         {faq.qid === 2 && <hr className=" border-white mb-5 max-sm:hidden" />}
//                         <FaqItem question={faq.question} answer={faq.answer} />
//                     </div>
//                 ))}
//             </div>

//             {/* Know More button */}
//             <button onClick={handleOnsubmit} className="font-Poppins justify-center px-8 py-4 mt-24 text-lg text-center text-violet-800 whitespace-nowrap border-2 border-violet-800 border-solid shadow-2xl bg-neutral-100 max-md:px-5 max-md:mt-10 hover:bg-purple-950 hover:text-white max-sm:text-sm">
//                 Know More
//             </button>
//         </div>
//     );
// };

// export default FAQSection;






// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
    {
      title: 'How can I Get started with Rework AI?',
      content: 'Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="max-w-4xl mx-auto pt-14">
        <div className="font-Archivo justify-center w-fit p-2.5 mx-auto text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-indigo-700 text-opacity-50 max-sm:text-base">
          Our Happy Customers
        </div>

        <h1 className='sm:hidden mt-2 font-Poppins-600 font-semibold text-[36px] text-center text-[#000]'>
          FAQ
        </h1>
        <p className='sm:hidden text-[14px] font-Poppins-400 text-center mt-4 mb-12'>
          checkout the reviews from our mentees about how there experience was with us. and what not
        </p>

        <h1 className='hidden sm:block mt-2 font-Garnett-semibold font-semibold text-[36px] text-center text-[#5C27C0] tracking-tighter italic'>
          Frequently asked <span className='text-[#5C27C0] font-Garnett-semibold font-normal text-opacity-80'>Questions</span>
        </h1>
        <p className='hidden sm:block text-[14px] font-Poppins-400 text-center mt-4 mb-12'>
          We have Compiled the most commonly asked question about our Platform for your information and to enhance your overall experience.
        </p>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-2 border-[#5C27C0] rounded-xl">
            <div
              className="flex items-center justify-between rounded-xl p-4 bg-[#FFFFFF] cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <div className="font-semibold">{faq.title}</div>
              <div className="text-gray-600">
                {openIndex === index ? (
                  // <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   fill="none"
                  //   viewBox="0 0 24 24"
                  //   stroke="currentColor"
                  //   className="h-5 w-5 transform rotate-180 transition-transform duration-300 ease-in-out"
                  // >
                  //   <path
                  //     strokeLinecap="round"
                  //     strokeLinejoin="round"
                  //     strokeWidth="2"
                  //     d="M19 9l-7 7-7-7"
                  //   />
                  // </svg>

                  <img src='/images/minus.svg' />
                ) : (
                  // <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   fill="none"
                  //   viewBox="0 0 24 24"
                  //   stroke="currentColor"
                  //   className="h-5 w-5 transition-transform duration-300 ease-in-out"
                  // >
                  //   <path
                  //     strokeLinecap="round"
                  //     strokeLinejoin="round"
                  //     strokeWidth="2"
                  //     d="M12 4v16m8-8H4"
                  //   />
                  // </svg>

                  <img src='/images/plus.svg' />
                )}
              </div>
            </div>
            {openIndex === index && (
              <div
                className={`px-4 pt-1 pb-2.5 bg-white rounded-xl transform transition-all duration-300 ease-in-out opacity-100 translate-y-0`}
              >
                {faq.content}
              </div>
            )}
          </div>
        ))}

      </div>
      {/* <div className="w-fit font-Poppins-500 justify-center mx-auto px-5 py-2.5 mt-11 text-lg font-medium text-center text-violet-800 hover:text-neutral-100 hover:bg-violet-800 whitespace-nowrap border-2 border-solid shadow-2xl bg-neutral-100 border-[color:var(--Primary-100,#5C27C0)] max-md:px-5 max-md:mt-10 cursor-pointer transition-all transition-duration: 400ms;">
        Know More
      </div> */}
    </>
  );
};

export default FAQ;
