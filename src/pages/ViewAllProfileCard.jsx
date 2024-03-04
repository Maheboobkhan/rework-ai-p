// import {React, useState, useEffect} from 'react';
// import Header from "../components/Header"
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import cardsData from "../components/data/ViewAllProfileCard.json";

// const ViewAllProfileCard = () => {
//     const [cards, setCards] = useState(cardsData);
//     const [search, setSearch] = useState('');

//     const handleSearch = () => {
//         if (search.trim() === '') {
//             setCards(cardsData);
//         } else {
//             let filteredCards = cardsData.filter((card) => {
//                 return card.role.toLowerCase().includes(search.toLowerCase());
//             });
//             setCards(filteredCards);
//         }
//     };

//     // Use useEffect to watch for changes in the search state
//     useEffect(() => {
//         handleSearch();
//     }, [search]);

//     return (
//         <div className="overflow-x-hidden">
//             <Header />
//             <div className="flex flex-col items-center py-12 bg-slate-50">
//                 <div className="font-Archivo-400 justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
//                     Who will Guide you
//                 </div>
//                 <div className="mt-5 text-5xl font-semibold font-Archivo-600 text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
//                     Elevate Your Journey with Expert Guidance
//                 </div>
//                 <MentorShipParagraph />

//                 {/* filterstart */}
//                 <div className="flex gap-5 px-5 mr-auto ml-32 mt-10 leading-6 max-md:flex-wrap">
//                     <div className="flex gap-5 w-[30vw] justify-between px-6 py-2.5 bg-white rounded-md shadow-sm text-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                         <input className="border-none outline-none" placeholder="Search your Domain" onChange={(e) => setSearch(e.target.value)} value={search} />

//                         <img
//                             loading="lazy"
//                             src="/images/search.svg"
//                             className="w-6 aspect-square cursor-pointer hover:color-red"
//                             onClick={handleSearch}
//                         />

//                     </div>
//                     <img
//                         loading="lazy"
//                         src="/images/filter.svg"
//                         className="my-auto aspect-[1.18] w-[26px]"
//                     />
//                     <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
//                         {/* <div>Industries</div>
//                         <img
//                             loading="lazy"
//                             src="/images/dropdownarrow.svg"
//                             className="w-4 aspect-square"
//                         /> */}
//                         <select className="w-full cursor-pointer">
//                             <option>Industries</option>
//                             <option>Amazon</option>
//                             <option>Apple</option>
//                         </select>
//                     </div>
//                 </div>
//                 {/* filterend */}

//                 <div className="px-5 mt-10 w-full">
//                     <div className="flex justify-center flex-wrap gap-5">

//                         {/* card-1 */}

//                         {cards.map((ele) => {
//                             return (
//                                 <div className="flex w-[25vw] flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
//                                     <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
//                                         <img
//                                             loading="lazy"
//                                             src={ele.profileImage}
//                                             className={`bg-${ele.imageBG} rounded-tl-xl`}
//                                         />
//                                         <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
//                                             <div className="text-xl font-bold font-Lato">{ele.name}</div>

//                                             <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
//                                                 <img
//                                                     loading="lazy"
//                                                     src={ele.ratingImage}
//                                                     className="my-auto aspect-[1.06] w-[18px]"
//                                                 />
//                                                 <div>{ele.rating}</div>
//                                             </div>
//                                         </div>
//                                         <div className="mt-1.5 text-sm font-Roboto leading-5 capitalize text-black text-opacity-60">
//                                             {ele.role}
//                                         </div>
//                                         <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
//                                             {ele.description}
//                                         </div>
//                                         <div className="flex mt-7 justify-start">
//                                             <img
//                                                 loading="lazy"
//                                                 src={ele.companyLogo}
//                                                 className=" max-w-full fill-neutral-500 w-[200px]"
//                                             />
//                                         </div>
//                                         <div className="flex gap-2 justify-between mt-5">
//                                             <div className="flex justify-center items-center aspect-[0.94]">
//                                                 <img
//                                                     loading="lazy"
//                                                     src={ele.convocationImage}
//                                                     className="rounded-full aspect-[0.94] w-[34px]"
//                                                 />
//                                             </div>
//                                             <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
//                                                 {ele.studentsTrained}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ViewAllProfileCard;









// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import cardsData from "../components/data/ViewAllProfileCard.json";

// const ViewAllProfileCard = () => {
//     const [cards, setCards] = useState(cardsData);
//     const [search, setSearch] = useState('');
//     const [selectedCompany, setSelectedCompany] = useState('');

//     const handleSearch = () => {
//         let filteredCards = cardsData.filter((card) => {
//             return card.role.toLowerCase().includes(search.toLowerCase());
//         });

//         if (selectedCompany !== '') {
//             filteredCards = filteredCards.filter((card) => {
//                 return card.company === selectedCompany;
//             });
//         }

//         setCards(filteredCards);
//     };

//     useEffect(() => {
//         handleSearch();
//     }, [search, selectedCompany]);

//     return (
//         <div className="overflow-x-hidden">
//             <Header />
//             <div className="flex flex-col items-center py-12 bg-slate-50">
//                 <div className="font-Archivo-400 justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
//                     Who will Guide you
//                 </div>
//                 <div className="mt-5 text-5xl font-semibold font-Archivo-600 text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
//                     Elevate Your Journey with Expert Guidance
//                 </div>
//                 <MentorShipParagraph />

//                 {/* filterstart */}
//                 <div className="flex gap-5 px-5 mr-auto md:ml-[10vw] mt-10 leading-4 max-md:flex-wrap">
//                     <div className="flex gap-5 w-[90vw] md:w-[30vw] justify-between px-6 py-2.5 bg-white rounded-md shadow-sm text-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                         <input
//                             className="border-none outline-none"
//                             placeholder="Search your Domain"
//                             onChange={(e) => setSearch(e.target.value)}
//                             value={search}
//                         />
//                         <img
//                             loading="lazy"
//                             src="/images/search.svg"
//                             className="w-6 aspect-square cursor-pointer hover:color-red"
//                             onClick={handleSearch}
//                         />
//                     </div>
//                     <img
//                         loading="lazy"
//                         src="/images/filter.svg"
//                         className="my-auto aspect-[1.18] w-[26px]"
//                     />
//                     <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
//                         <select
//                             className="w-full cursor-pointer"
//                             onChange={(e) => setSelectedCompany(e.target.value)}
//                             value={selectedCompany}
//                         >
//                             <option value="">Industries</option>
//                             <option value="Amazon">Amazon</option>
//                             <option value="Apple">Apple</option>
//                         </select>
//                     </div>
//                 </div>
//                 {/* filterend */}

//                 <div className="px-5 mt-10 w-full">
//                     <div className="flex justify-center flex-wrap gap-5">

//                         {/* card-1 */}
//                         {cards.map((ele) => {
//                             return (
//                                 <div key={ele.id} className="flex md:w-[25vw] flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
//                                     <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
//                                         <img
//                                             loading="lazy"
//                                             src={ele.profileImage}
//                                             className={`bg-${ele.imageBG} rounded-tl-xl`}
//                                         />
//                                         <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
//                                             <div className="text-xl font-bold font-Lato">{ele.name}</div>
//                                             <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
//                                                 <img
//                                                     loading="lazy"
//                                                     src={ele.ratingImage}
//                                                     className="my-auto aspect-[1.06] w-[18px]"
//                                                 />
//                                                 <div>{ele.rating}</div>
//                                             </div>
//                                         </div>
//                                         <div className="mt-1.5 text-sm font-Roboto leading-5 capitalize text-black text-opacity-60">
//                                             {ele.role}
//                                         </div>
//                                         <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
//                                             {ele.description}
//                                         </div>
//                                         <div className="flex mt-7 justify-start">
//                                             <img
//                                                 loading="lazy"
//                                                 src={ele.companyLogo}
//                                                 className=" max-w-full fill-neutral-500 w-[200px]"
//                                             />
//                                         </div>
//                                         <div className="flex gap-2 justify-between mt-5">
//                                             <div className="flex justify-center items-center aspect-[0.94]">
//                                                 <img
//                                                     loading="lazy"
//                                                     src={ele.convocationImage}
//                                                     className="rounded-full aspect-[0.94] w-[34px]"
//                                                 />
//                                             </div>
//                                             <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
//                                                 {ele.studentsTrained}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ViewAllProfileCard;
















import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import MentorShipParagraph from '../components/MentorShipParagraph';
import cardsData from "../components/data/ViewAllProfileCard.json";
import Footer from '../components/footer/Footer';

const ViewAllProfileCard = () => {
    const [cards, setCards] = useState(cardsData);
    const [search, setSearch] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6); // Adjust the number of cards per page as needed

    const handleSearch = () => {
        let filteredCards = cardsData.filter((card) => {
            return card.role.toLowerCase().includes(search.toLowerCase());
        });

        if (selectedCompany !== '') {
            filteredCards = filteredCards.filter((card) => {
                return card.company === selectedCompany;
            });
        }

        setCards(filteredCards);
        setCurrentPage(1); // Reset to the first page after filtering
    };

    useEffect(() => {
        handleSearch();
    }, [search, selectedCompany]);

    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-hidden">
            <Header />
            <div className="flex flex-col items-center py-12 bg-slate-50">
                <div className="font-Archivo-400 justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
                    Who will Guide you
                </div>
                <div className="mt-5 text-5xl font-semibold font-Archivo-600 text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                    Elevate Your Journey with Expert Guidance
                </div>
                <MentorShipParagraph />

                {/* filterstart */}
                <div className="flex gap-5 px-5 mr-auto md:ml-[10vw] mt-10 leading-4 max-md:flex-wrap">
                    <div className="flex gap-5 w-[90vw] md:w-[30vw] justify-between px-6 py-2.5 bg-white rounded-md shadow-sm text-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <input
                            className="border-none outline-none"
                            placeholder="Search your Domain"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <img
                            loading="lazy"
                            src="/images/search.svg"
                            className="w-6 aspect-square cursor-pointer hover:color-red"
                            onClick={handleSearch}
                        />
                    </div>
                    <img
                        loading="lazy"
                        src="/images/filter.svg"
                        className="my-auto aspect-[1.18] w-[26px]"
                    />
                    <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
                        <select
                            className="w-full cursor-pointer"
                            onChange={(e) => setSelectedCompany(e.target.value)}
                            value={selectedCompany}
                        >
                            <option value="">Industries</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </div>
                </div>
                {/* filterend */}

                <div className="px-5 mt-10 w-full">
                    <div className="flex justify-center flex-wrap gap-5">
                        {/* card-1 */}
                        {currentCards.map((ele) => (
                            <div key={ele.id} className="flex md:w-[25vw] flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
                                <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
                                    <img
                                        loading="lazy"
                                        src={ele.profileImage}
                                        className={`bg-${ele.imageBG} rounded-tl-xl`}
                                    />
                                    <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
                                        <div className="text-xl font-bold font-Lato">{ele.name}</div>
                                        <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
                                            <img
                                                loading="lazy"
                                                src={ele.ratingImage}
                                                className="my-auto aspect-[1.06] w-[18px]"
                                            />
                                            <div>{ele.rating}</div>
                                        </div>
                                    </div>
                                    <div className="mt-1.5 text-sm font-Roboto leading-5 capitalize text-black text-opacity-60">
                                        {ele.role}
                                    </div>
                                    <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
                                        {ele.description}
                                    </div>
                                    <div className="flex mt-7 justify-start">
                                        <img
                                            loading="lazy"
                                            src={ele.companyLogo}
                                            className=" max-w-full fill-neutral-500 w-[200px]"
                                        />
                                    </div>
                                    <div className="flex gap-2 justify-between mt-5">
                                        <div className="flex justify-center items-center aspect-[0.94]">
                                            <img
                                                loading="lazy"
                                                src={ele.convocationImage}
                                                className="rounded-full aspect-[0.94] w-[34px]"
                                            />
                                        </div>
                                        <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
                                            {ele.studentsTrained}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-5">
                    <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        // className="mr-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer"
                        className={`mr-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    {pageNumbers.map((number) => (
                        <div
                            key={number}
                            className={`mx-1 px-3 py-1 border border-gray-500 rounded-md cursor-pointer ${currentPage === number ? 'bg-gray-500 text-white' : ''}`}
                            onClick={() => handlePageClick(number)}
                        >
                            {number}
                        </div>
                    ))}
                    <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === pageNumbers.length}
                        // className="ml-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer"
                        className={`ml-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer ${currentPage === pageNumbers.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>

            </div>
            <div className="bg-[#5C27C0] max-w-screen">
                <Footer />
            </div>
        </div>
    );
}

export default ViewAllProfileCard;



















// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import cardsData from "../components/data/ViewAllProfileCard.json";

// const ViewAllProfileCard = () => {
//     const [cards, setCards] = useState(cardsData);
//     const [search, setSearch] = useState('');
//     const [selectedCompany, setSelectedCompany] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [cardsPerPage] = useState(6);

//     const handleSearch = () => {
//         let filteredCards = cardsData;

//         if (search.trim() !== '') {
//             filteredCards = filteredCards.filter((card) => {
//                 return card.role.toLowerCase().includes(search.toLowerCase());
//             });
//         }

//         if (selectedCompany !== '') {
//             filteredCards = filteredCards.filter((card) => {
//                 return card.company === selectedCompany;
//             });
//         }

//         setCards(filteredCards);
//         setCurrentPage(1);
//     };

//     useEffect(() => {
//         handleSearch();
//     }, [search, selectedCompany]);

//     const indexOfLastCard = currentPage * cardsPerPage;
//     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//     const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     const handlePageClick = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className="overflow-x-hidden">
//             <Header />
//             <div className="flex flex-col items-center py-12 bg-slate-50">
//                 <div className="font-Archivo-400 justify-center p-2.5 mt-7 text-lg leading-7 text-center whitespace-nowrap bg-purple-100 rounded-xl text-[#3222F0] text-opacity-50">
//                     Who will Guide you
//                 </div>
//                 <div className="mt-5 text-5xl font-semibold font-Archivo-600 text-center leading-[62px] text-neutral-800 w-[747px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
//                     Elevate Your Journey with Expert Guidance
//                 </div>
//                 <MentorShipParagraph />

//                 {/* filterstart */}
//                 <div className="flex gap-5 px-5 mr-auto md:ml-[10vw] mt-10 leading-4 max-md:flex-wrap">
//                     <div className="flex gap-5 w-[90vw] md:w-[30vw] justify-between px-6 py-2.5 bg-white rounded-md shadow-sm text-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                         <input
//                             className="border-none outline-none"
//                             placeholder="Search your Domain"
//                             onChange={(e) => setSearch(e.target.value)}
//                             value={search}
//                         />
//                         <img
//                             loading="lazy"
//                             src="/images/search.svg"
//                             className="w-6 aspect-square cursor-pointer hover:color-red"
//                             onClick={handleSearch}
//                         />
//                     </div>
//                     <img
//                         loading="lazy"
//                         src="/images/filter.svg"
//                         className="my-auto aspect-[1.18] w-[26px]"
//                     />
//                     <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
//                         <select
//                             className="w-full cursor-pointer"
//                             onChange={(e) => setSelectedCompany(e.target.value)}
//                             value={selectedCompany}
//                         >
//                             <option value="">Industries</option>
//                             <option value="Amazon">Amazon</option>
//                             <option value="Apple">Apple</option>
//                         </select>
//                     </div>
//                 </div>
//                 {/* filterend */}

//                 <div className="px-5 mt-10 w-full">
//                     <div className="flex justify-center flex-wrap gap-5">
//                         {currentCards.map((ele) => (
//                             <div key={ele.id} className="flex md:w-[25vw] flex-col hover:scale-[0.95] hover:cursor-pointer hover:transition-all transition-duration: 500ms transition-all transition-duration">
//                                 <div className="flex flex-col grow p-2.5 pr-2.5 mx-auto w-full rounded-xl shadow-sm bg-zinc-100">
//                                     <img
//                                         loading="lazy"
//                                         src={ele.profileImage}
//                                         className={`bg-${ele.imageBG} rounded-tl-xl`}
//                                     />
//                                     <div className="flex gap-5 justify-between px-0.5 mt-2 w-full text-black capitalize leading-[150%]">
//                                         <div className="text-xl font-bold font-Lato">{ele.name}</div>
//                                         <div className="flex gap-1.5 justify-end my-auto text-lg font-Roboto-900 font-medium whitespace-nowrap">
//                                             <img
//                                                 loading="lazy"
//                                                 src={ele.ratingImage}
//                                                 className="my-auto aspect-[1.06] w-[18px]"
//                                             />
//                                             <div>{ele.rating}</div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-1.5 text-sm font-Roboto leading-5 capitalize text-black text-opacity-60">
//                                         {ele.role}
//                                     </div>
//                                     <div className="font-Roboto mt-3 text-base leading-6 text-neutral-900 text-opacity-90">
//                                         {ele.description}
//                                     </div>
//                                     <div className="flex mt-7 justify-start">
//                                         <img
//                                             loading="lazy"
//                                             src={ele.companyLogo}
//                                             className=" max-w-full fill-neutral-500 w-[200px]"
//                                         />
//                                     </div>
//                                     <div className="flex gap-2 justify-between mt-5">
//                                         <div className="flex justify-center items-center aspect-[0.94]">
//                                             <img
//                                                 loading="lazy"
//                                                 src={ele.convocationImage}
//                                                 className="rounded-full aspect-[0.94] w-[34px]"
//                                             />
//                                         </div>
//                                         <div className="font-Roboto flex-auto my-auto text-sm font-medium leading-5 capitalize text-black text-opacity-60">
//                                             {ele.studentsTrained}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Pagination */}
//                 <div className="flex justify-center mt-5">
//                     <button
//                         onClick={() => handlePageClick(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="mr-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer"
//                     >
//                         Previous
//                     </button>
//                     {pageNumbers.map((number) => (
//                         <div
//                             key={number}
//                             className={`mx-1 px-3 py-1 border border-gray-500 rounded-md cursor-pointer ${currentPage === number ? 'bg-gray-500 text-white' : ''}`}
//                             onClick={() => handlePageClick(number)}
//                         >
//                             {number}
//                         </div>
//                     ))}
//                     <button
//                         onClick={() => handlePageClick(currentPage + 1)}
//                         disabled={currentPage === pageNumbers.length}
//                         className="ml-2 px-3 py-1 border border-gray-500 rounded-md cursor-pointer"
//                     >
//                         Next
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ViewAllProfileCard;
