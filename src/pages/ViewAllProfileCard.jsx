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
//     const [itemsPerPage] = useState(9); // Adjust the number of cards per page as needed



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












// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import Footer from '../components/footer/Footer';
// import Pagination from "@mui/material/Pagination";

// const ViewAllProfileCard = () => {
//   const initialData = [
//     {
//         id: 1,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "Ui/Ux Designer",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile1.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "[#CE08FF]",
//         industry: "Amazon"
//       },
//       {
//         id: 2,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "Data Science",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile2.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "amber-300",
//         industry: "Apple"
//       },
//       {
//         id: 3,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "Software Developer",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile3.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "[#E3E3E3]"
//       },
//       {
//         id: 4,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "JavaScript",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile1.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "[#CE08FF]"
//       },
//       {
//         id: 5,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "Data Analyst",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile2.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "amber-300"
//       },
//       {
//         id: 6,
//         name: "Maria Lee",
//         rating: 4.8,
//         role: "Digital Marketing",
//         description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//         companyLogo: "/images/microsoft.svg",
//         studentsTrained: "200+ students Trained",
//         profileImage: "/images/profile3.svg",
//         ratingImage: "/images/rating.svg",
//         convocationImage: "/images/convocation.svg",
//         imageBG: "[#E3E3E3]"
//       },      
//   ];

//   const pageSize = 2; // Number of items per page
//   const [data, setData] = useState(initialData);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedIndustry, setSelectedIndustry] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     // Apply search and industry filters together
//     const filteredData = data.filter(
//       (item) =>
//         item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
//         (selectedIndustry ? item.industry === selectedIndustry : true)
//     );

//     setFilteredData(filteredData);
//   }, [data, searchQuery, selectedIndustry]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const paginatedData = () => {
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     return filteredData.slice(startIndex, endIndex);
//   };

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
// <Pagination
// className='mt-10'
//     count={Math.ceil(cards.length / cardsPerPage)}
//     page={currentPage}
//     onChange={handlePageChange}
//     shape="rounded"
// />


// {filteredData.length > pageSize && (
// <div className="mt-4">
//   <span className="mr-2">Page:</span>
//   {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map(
//     (_, index) => (
//       <button
//         key={index}
//         onClick={() => handlePageChange(index + 1)}
//         className={`px-3 py-2 mx-1 ${
//           currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
//         } rounded`}
//       >
//         {index + 1}
//       </button>
//     )
//   )}
// </div>
//   )}

// </div>
// <div className="bg-[#5C27C0] max-w-screen">
//     <Footer />
// </div>
//         </div>
//     );
// }

// export default ViewAllProfileCard;




















import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import MentorShipParagraph from '../components/MentorShipParagraph';
import Footer from '../components/footer/Footer';
import Pagination from "@mui/material/Pagination";

const ViewAllProfileCard = () => {
    const initialData = [
        {
            id: 1,
            name: "Maria Lee",
            rating: 4.8,
            role: "Ui/Ux Designer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]",
            industry: "Amazon"
        },
        {
            id: 2,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Science",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300",
            industry: "Apple"
        },
        {
            id: 3,
            name: "Maria Lee",
            rating: 4.8,
            role: "Software Developer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },
        {
            id: 4,
            name: "Maria Lee",
            rating: 4.8,
            role: "JavaScript",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]"
        },
        {
            id: 5,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Analyst",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300"
        },
        {
            id: 6,
            name: "Maria Lee",
            rating: 4.8,
            role: "Digital Marketing",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },

        {
            id: 1,
            name: "Maria Lee",
            rating: 4.8,
            role: "Ui/Ux Designer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]",
            industry: "Amazon"
        },
        {
            id: 2,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Science",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300",
            industry: "Apple"
        },
        {
            id: 3,
            name: "Maria Lee",
            rating: 4.8,
            role: "Software Developer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },
        {
            id: 4,
            name: "Maria Lee",
            rating: 4.8,
            role: "JavaScript",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]"
        },
        {
            id: 5,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Analyst",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300"
        },
        {
            id: 6,
            name: "Maria Lee",
            rating: 4.8,
            role: "Digital Marketing",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },

        {
            id: 1,
            name: "Maria Lee",
            rating: 4.8,
            role: "Ui/Ux Designer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]",
            industry: "Amazon"
        },
        {
            id: 2,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Science",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300",
            industry: "Apple"
        },
        {
            id: 3,
            name: "Maria Lee",
            rating: 4.8,
            role: "Software Developer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },
        {
            id: 4,
            name: "Maria Lee",
            rating: 4.8,
            role: "JavaScript",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]"
        },
        {
            id: 5,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Analyst",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300"
        },
        {
            id: 6,
            name: "Maria Lee",
            rating: 4.8,
            role: "Digital Marketing",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },

        {
            id: 1,
            name: "Maria Lee",
            rating: 4.8,
            role: "Ui/Ux Designer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]",
            industry: "Amazon"
        },
        {
            id: 2,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Science",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300",
            industry: "Apple"
        },
        {
            id: 3,
            name: "Maria Lee",
            rating: 4.8,
            role: "Software Developer",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },
        {
            id: 4,
            name: "Maria Lee",
            rating: 4.8,
            role: "JavaScript",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile1.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#CE08FF]"
        },
        {
            id: 5,
            name: "Maria Lee",
            rating: 4.8,
            role: "Data Analyst",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile2.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "amber-300"
        },
        {
            id: 6,
            name: "Maria Lee",
            rating: 4.8,
            role: "Digital Marketing",
            description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile3.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#E3E3E3]"
        },
    ];

    const pageSize = 9; // Number of items per page
    const [data, setData] = useState(initialData);
    // const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        const scrolYValue = 270;
        window.scrollTo(0, scrolYValue);
    }, []);


    // useEffect(() => {
    //     // Apply search and industry filters together
    //     const filteredData = data.filter(
    //         (item) =>
    //             item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
    //             (selectedIndustry ? item.industry === selectedIndustry : true)
    //     );

    //     setFilteredData(filteredData);
    // }, [data, searchQuery, selectedIndustry]);


    // const handlePageChange = (event, value) => {
    //   setCurrentPage(value);
    // };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 270);
    };

    let filteredData
    const paginatedData = () => {
        // Apply search and industry filters together and calculate pagination
        filteredData = data.filter(
            (item) =>
                item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (selectedIndustry ? item.industry === selectedIndustry : true)
        );

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredData.slice(startIndex, endIndex);
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
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                        />
                        <img
                            loading="lazy"
                            src="/images/search.svg"
                            className="w-6 aspect-square cursor-pointer hover:color-red"
                        />
                    </div>
                    <img
                        loading="lazy"
                        src="/images/filter.svg"
                        className="my-auto aspect-[1.18] w-[26px]"
                    />
                    <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
                        <select
                            value={selectedIndustry}
                            className="w-full cursor-pointer"
                            onChange={(e) => setSelectedIndustry(e.target.value)}
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
                        {paginatedData().map((ele) => (
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


                {/* pagination */}
                {filteredData.length > pageSize && (
                    <Pagination
                        className='mt-10'
                        count={Math.ceil(filteredData.length / pageSize)}
                        page={currentPage}
                        onChange={handlePageChange}
                        shape="rounded"
                    />
                )}
            </div>
            <div className="bg-[#5C27C0] max-w-screen">
                <Footer />
            </div>
        </div>
    );
};

export default ViewAllProfileCard;





// import React, { useState, useEffect } from 'react';
// import Pagination from "@mui/material/Pagination";

// const SampleComponent = () => {
//     const initialData = [
//         { id: 1, role: 'Developer', industry: 'Amazon' },
//         { id: 2, role: 'Designer', industry: 'Apple' },
//         { id: 3, role: 'Project Manager', industry: 'Amazon' },
//         { id: 4, role: 'Data Scientist' },
//         { id: 5, role: 'Marketing Specialist', industry: 'Apple' },
//     ];

//     const pageSize = 2; // Number of items per page
//     const [data, setData] = useState(initialData);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedIndustry, setSelectedIndustry] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
// let filteredData
//     const paginatedData = () => {
//         // Apply search and industry filters together and calculate pagination
//         filteredData = data.filter(
//             (item) =>
//                 item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
//                 (selectedIndustry ? item.industry === selectedIndustry : true)
//         );

//         const startIndex = (currentPage - 1) * pageSize;
//         const endIndex = startIndex + pageSize;
//         return filteredData.slice(startIndex, endIndex);
//     };

//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//     };

//     return (
//         <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
//             <div>
//                 <label className="block text-gray-700">Search by Role:</label>
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full p-2 border rounded"
//                 />
//             </div>
//             <div className="mt-4">
//                 <label className="block text-gray-700">Industry:</label>
//                 <select
//                     value={selectedIndustry}
//                     onChange={(e) => setSelectedIndustry(e.target.value)}
//                     className="w-full p-2 border rounded"
//                 >
//                     <option value="">All Industries</option>
//                     <option value="Amazon">Amazon</option>
//                     <option value="Apple">Apple</option>
//                 </select>
//             </div>
//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Filtered Data:</h3>
//                 <ul>
//                     {paginatedData().map((item) => (
//                         <li key={item.id} className="mb-2 p-2 border rounded">
//                             {item.role} {item.industry && `- ${item.industry}`}
//                         </li>
//                     ))}
//                 </ul>
//                 {filteredData.length > pageSize && (
//                     <Pagination
//                         className='mt-10'
//                         count={Math.ceil(filteredData.length / pageSize)}
//                         page={currentPage}
//                         onChange={handlePageChange}
//                         shape="rounded"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SampleComponent;
