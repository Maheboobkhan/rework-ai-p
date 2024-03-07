// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import cardsData from "../components/data/ViewAllProfileCard.json";
// import Footer from '../components/footer/Footer';
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import "../App.css"

// const ViewAllProfileCard = () => {
//     // const [cards, setCards] = useState(cardsData);
//     const [search, setSearch] = useState('');
//     const [selectedCompany, setSelectedCompany] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(2); // Adjust the number of cards per page as needed



//     // const filteredData = cardsData.filter(
//     //     (item) =>
//     //         item.role.toLowerCase().includes(search.toLowerCase())
//     // );


//     const filteredData = cardsData.filter((item) => {
//         const role = item.role ? item.role.toLowerCase() : ''; // Handle undefined 'role' property
//         const company = item.company ? item.company.toLowerCase() : ''; // Handle undefined 'company' property

//         const matchesSearch = role.includes(search.toLowerCase());
//         const matchesCompany = selectedCompany === '' || company === selectedCompany.toLowerCase();

//         return matchesSearch && matchesCompany;
//     });

//     const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//         setCurrentPage(1);

//     };

//     const resetFilter = () => {
//         setCurrentPage(1);
//     };

//     useEffect(() => {
//         // Automatically reset filter when the search term becomes empty
//         if (search.trim() === '') {
//             resetFilter();
//         }
//     }, [search]);

//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
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
//                             onChange={handleSearch}
//                             value={search}
//                         />
//                         <img
//                             loading="lazy"
//                             src="/images/search.svg"
//                             className="w-6 aspect-square cursor-pointer hover:color-red"
//                         // onClick={handleSearch}
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
//                 <Stack spacing={2}>
//                 <div className="px-5 mt-10 w-full">
//                     <div className="flex justify-center flex-wrap gap-5">
//                         {/* card-1 */}
//                         {currentItems.map((ele) => (
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
//                 </Stack>

//                 {/* Pagination */}
//                 <Pagination
//                     count={Math.ceil(totalPages)}
//                     page={currentPage}
//                     onChange={handlePageChange}
//                     shape="rounded"
//                 />

//             </div>
//             <div className="bg-[#5C27C0] max-w-screen">
//                 <Footer />
//             </div>
//         </div>
//     );
// }

// export default ViewAllProfileCard;












import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import MentorShipParagraph from '../components/MentorShipParagraph';
import cardsData from "../components/data/ViewAllProfileCard.json";
import Footer from '../components/footer/Footer';
import Pagination from "@mui/material/Pagination";

const ViewAllProfileCard = () => {
    const [cards, setCards] = useState(cardsData);
    const [search, setSearch] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9); // Adjust the number of cards per page as needed

    const handleSearch = () => {
        let filteredCards = cardsData.filter((card) => {
            return card.role.toLowerCase().includes(search.toLowerCase());
        });

        console.log('selectedCompany :'+selectedCompany);

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
        if(search === '' && selectedCompany === '') {
            setCards(cardsData);
        }
    }, [search, selectedCompany]);

    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    // const handlePageClick = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
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
                <Pagination
                className='mt-10'
                    count={Math.ceil(cards.length / cardsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    shape="rounded"
                />

            </div>
            <div className="bg-[#5C27C0] max-w-screen">
                <Footer />
            </div>
        </div>
    );
}

export default ViewAllProfileCard;




















// const ViewAllProfileCard = () => {
//     const [cards, setCards] = useState(cardsData);
//     const [search, setSearch] = useState('');
//     const [selectedCompany, setSelectedCompany] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [cardsPerPage] = useState(2); // Adjust the number of cards per page as needed
//     const [currentCards, setCurrentCards] = useState([]);

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
//         setCurrentPage(1); // Reset to the first page after filtering
//     };

//     useEffect(() => {
//         handleSearch();
//         if (search === '' && selectedCompany === '') {
//             setCards(cardsData);
//         }
//     }, [search, selectedCompany]);

//     // Pagination logic
//     const indexOfLastCard = currentPage * cardsPerPage;
//     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//     const cardsToDisplay = cards.slice(indexOfFirstCard, indexOfLastCard);

//     useEffect(() => {
//         setCurrentCards(cardsToDisplay);
//     }, [cardsToDisplay]);

//     // ...

//     return (
//         // ...
//     );
// };

// export default ViewAllProfileCard;