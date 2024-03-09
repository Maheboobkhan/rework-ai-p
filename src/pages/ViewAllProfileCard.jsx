// import React, { useState, useEffect } from 'react';
// import Header from "../components/Header";
// import MentorShipParagraph from '../components/MentorShipParagraph';
// import Footer from '../components/footer/Footer';
// import Pagination from "@mui/material/Pagination";

// const ViewAllProfileCard = () => {
//     const initialData = [
//         {
//             id: 1,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "Ui/Ux Designer",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile1.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#CE08FF]",
//             industry: "Amazon"
//         },
//         {
//             id: 2,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "Data Science",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile2.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "amber-300",
//             industry: "Apple"
//         },
//         {
//             id: 3,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "Software Developer",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile3.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#E3E3E3]"
//         },
//         {
//             id: 4,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "JavaScript",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile1.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#CE08FF]"
//         },
//         {
//             id: 5,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "Data Analyst",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile2.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "amber-300"
//         },
//         {
//             id: 6,
//             name: "Maria Lee",
//             rating: 4.8,
//             role: "Digital Marketing",
//             description: "Specialised in designing and maintaining advanced web applicationsSpecialised in designing and maintaining advanced .Specialised in designing and maintaining advanced web applicationsSpecialised .",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile3.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#E3E3E3]"
//         },

//         {
//             id: 7,
//             name: "John Smith",
//             rating: 4.5,
//             role: "Mobile App Developer",
//             description: "Experienced in developing innovative and user-friendly mobile applications for various platforms.",
//             companyLogo: "/images/google.svg",
//             studentsTrained: "150+ students Trained",
//             profileImage: "/images/profile4.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#4CAF50]",
//             industry: "Google"
//         },
//         {
//             id: 8,
//             name: "Emily Brown",
//             rating: 4.7,
//             role: "Cybersecurity Analyst",
//             description: "Specialized in ensuring the security of digital systems and networks, proficient in identifying and mitigating cyber threats.",
//             companyLogo: "/images/cisco.svg",
//             studentsTrained: "180+ students Trained",
//             profileImage: "/images/profile5.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#2196F3]",
//             industry: "Cisco"
//         },
//         {
//             id: 9,
//             name: "Michael Turner",
//             rating: 4.6,
//             role: "AI/Machine Learning Engineer",
//             description: "Expert in developing and implementing machine learning algorithms for solving complex problems.",
//             companyLogo: "/images/ibm.svg",
//             studentsTrained: "160+ students Trained",
//             profileImage: "/images/profile6.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#FFC107]",
//             industry: "IBM"
//         },
//         {
//             id: 10,
//             name: "Sophia Miller",
//             rating: 4.9,
//             role: "Product Manager",
//             description: "Experienced in overseeing the development and launch of successful software products.",
//             companyLogo: "/images/facebook.svg",
//             studentsTrained: "220+ students Trained",
//             profileImage: "/images/profile7.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#FF5722]",
//             industry: "Facebook"
//         },
//         {
//             id: 11,
//             name: "David Clark",
//             rating: 4.8,
//             role: "Network Engineer",
//             description: "Skilled in designing, implementing, and managing computer networks for optimal performance.",
//             companyLogo: "/images/cisco.svg",
//             studentsTrained: "190+ students Trained",
//             profileImage: "/images/profile8.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#FF4081]",
//             industry: "Cisco"
//         },
//         {
//             id: 12,
//             name: "Olivia White",
//             rating: 4.7,
//             role: "UI Developer",
//             description: "Passionate about creating visually appealing and responsive user interfaces for web applications.",
//             companyLogo: "/images/google.svg",
//             studentsTrained: "170+ students Trained",
//             profileImage: "/images/profile9.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#009688]",
//             industry: "Google"
//         },
//         {
//             id: 13,
//             name: "Daniel Harris",
//             rating: 4.6,
//             role: "Cloud Solutions Architect",
//             description: "Expertise in designing and implementing scalable and secure cloud infrastructure solutions.",
//             companyLogo: "/images/aws.svg",
//             studentsTrained: "180+ students Trained",
//             profileImage: "/images/profile10.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#673AB7]",
//             industry: "Amazon Web Services"
//         },
//         {
//             id: 14,
//             name: "Isabella Taylor",
//             rating: 4.9,
//             role: "Full Stack Developer",
//             description: "Skilled in both front-end and back-end development, capable of creating complete and functional web applications.",
//             companyLogo: "/images/microsoft.svg",
//             studentsTrained: "200+ students Trained",
//             profileImage: "/images/profile11.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#795548]",
//             industry: "Microsoft"
//         },
//         {
//             id: 15,
//             name: "Matthew Johnson",
//             rating: 4.7,
//             role: "Business Analyst",
//             description: "Analytical thinker with expertise in gathering and analyzing business requirements to drive strategic decision-making.",
//             companyLogo: "/images/oracle.svg",
//             studentsTrained: "190+ students Trained",
//             profileImage: "/images/profile12.svg",
//             ratingImage: "/images/rating.svg",
//             convocationImage: "/images/convocation.svg",
//             imageBG: "[#FF9800]",
//             industry: "Oracle"
//         }
        
//     ];

//     const pageSize = 9; // Number of items per page
//     const [data, setData] = useState(initialData);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedIndustry, setSelectedIndustry] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         // Scroll to the top of the page when the component mounts
//         const scrolYValue = 270;
//         window.scrollTo(0, scrolYValue);
//     }, []);

//     const handlePageChange = (event, value) => {
//         setCurrentPage(value);
//         window.scrollTo(0, 270);
//     };

//     // let filteredData
//     // const paginatedData = () => {
//     //     // Apply search and industry filters together and calculate pagination
//     //     filteredData = data.filter(
//     //         (item) =>
//     //             item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
//     //             (selectedIndustry ? item.industry === selectedIndustry : true)
//     //     );

//     //     const startIndex = (currentPage - 1) * pageSize;
//     //     const endIndex = startIndex + pageSize;
//     //     return filteredData.slice(startIndex, endIndex);
//     // };


//     let filteredData
//     const paginatedData = () => {
//         // Apply search and industry filters first, then calculate pagination
//         filteredData = data.filter(
//             (item) =>
//                 item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
//                 (selectedIndustry ? item.industry === selectedIndustry : true)
//         );
    
//         const startIndex = (currentPage - 1) * pageSize;
//         const endIndex = startIndex + pageSize;
//         return filteredData.slice(startIndex, endIndex);
//     };

    
//     useEffect(() => {
//         setCurrentPage(1); // Reset page to 1 when filters change
//     }, [searchQuery, selectedIndustry]);


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
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             value={searchQuery}
//                         />
//                         <img
//                             loading="lazy"
//                             src="/images/search.svg"
//                             className="w-6 aspect-square cursor-pointer hover:color-red"
//                         />
//                     </div>
//                     <img
//                         loading="lazy"
//                         src="/images/filter.svg"
//                         className="my-auto aspect-[1.18] w-[26px]"
//                     />
//                     <div className="flex gap-3.5 justify-between px-6 py-2.5 whitespace-nowrap rounded-md border-solid border-[0.5px] border-neutral-300 text-neutral-950 max-md:px-5">
//                         <select
//                             value={selectedIndustry}
//                             className="w-full cursor-pointer"
//                             onChange={(e) => setSelectedIndustry(e.target.value)}
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
//                         {paginatedData().map((ele) => (
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


//                 {/* pagination */}
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
//             <div className="bg-[#5C27C0] max-w-screen">
//                 <Footer />
//             </div>
//         </div>
//     );
// };

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
            industry: "Microsoft"
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
            id: 7,
            name: "John Smith",
            rating: 4.5,
            role: "Mobile App Developer",
            description: "Experienced in developing innovative and user-friendly mobile applications for various platforms.",
            companyLogo: "/images/google.svg",
            studentsTrained: "150+ students Trained",
            profileImage: "/images/profile4.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#4CAF50]",
            industry: "Google"
        },
        {
            id: 8,
            name: "Emily Brown",
            rating: 4.7,
            role: "Cybersecurity Analyst",
            description: "Specialized in ensuring the security of digital systems and networks, proficient in identifying and mitigating cyber threats.",
            companyLogo: "/images/cisco.svg",
            studentsTrained: "180+ students Trained",
            profileImage: "/images/profile5.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#2196F3]",
            industry: "Cisco"
        },
        {
            id: 9,
            name: "Michael Turner",
            rating: 4.6,
            role: "AI/Machine Learning Engineer",
            description: "Expert in developing and implementing machine learning algorithms for solving complex problems.",
            companyLogo: "/images/ibm.svg",
            studentsTrained: "160+ students Trained",
            profileImage: "/images/profile6.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#FFC107]",
            industry: "IBM"
        },
        {
            id: 10,
            name: "Sophia Miller",
            rating: 4.9,
            role: "Product Manager",
            description: "Experienced in overseeing the development and launch of successful software products.",
            companyLogo: "/images/facebook.svg",
            studentsTrained: "220+ students Trained",
            profileImage: "/images/profile7.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#FF5722]",
            industry: "Facebook"
        },
        {
            id: 11,
            name: "David Clark",
            rating: 4.8,
            role: "Network Engineer",
            description: "Skilled in designing, implementing, and managing computer networks for optimal performance.",
            companyLogo: "/images/cisco.svg",
            studentsTrained: "190+ students Trained",
            profileImage: "/images/profile8.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#FF4081]",
            industry: "Cisco"
        },
        {
            id: 12,
            name: "Olivia White",
            rating: 4.7,
            role: "UI Developer",
            description: "Passionate about creating visually appealing and responsive user interfaces for web applications.",
            companyLogo: "/images/google.svg",
            studentsTrained: "170+ students Trained",
            profileImage: "/images/profile9.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#009688]",
            industry: "Google"
        },
        {
            id: 13,
            name: "Daniel Harris",
            rating: 4.6,
            role: "Cloud Solutions Architect",
            description: "Expertise in designing and implementing scalable and secure cloud infrastructure solutions.",
            companyLogo: "/images/aws.svg",
            studentsTrained: "180+ students Trained",
            profileImage: "/images/profile10.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#673AB7]",
            industry: "Amazon Web Services"
        },
        {
            id: 14,
            name: "Isabella Taylor",
            rating: 4.9,
            role: "Full Stack Developer",
            description: "Skilled in both front-end and back-end development, capable of creating complete and functional web applications.",
            companyLogo: "/images/microsoft.svg",
            studentsTrained: "200+ students Trained",
            profileImage: "/images/profile11.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#795548]",
            industry: "Microsoft"
        },
        {
            id: 15,
            name: "Matthew Johnson",
            rating: 4.7,
            role: "Business Analyst",
            description: "Analytical thinker with expertise in gathering and analyzing business requirements to drive strategic decision-making.",
            companyLogo: "/images/oracle.svg",
            studentsTrained: "190+ students Trained",
            profileImage: "/images/profile12.svg",
            ratingImage: "/images/rating.svg",
            convocationImage: "/images/convocation.svg",
            imageBG: "[#FF9800]",
            industry: "Oracle"
        }
        
    ];

    const pageSize = 9; // Number of items per page
    const [data, setData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(1);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        const scrolYValue = 270;
        window.scrollTo(0, scrolYValue);
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        setPrevPage(currentPage);
        window.scrollTo(0, 270);
    };

    let filteredData
    const paginatedData = () => {
        // Apply search and industry filters first, then calculate pagination
        filteredData = data.filter(
            (item) =>
                item.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (selectedIndustry ? item.industry === selectedIndustry : true)
        );
    
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredData.slice(startIndex, endIndex);
    };

    useEffect(() => {
        if (searchQuery.trim() !== '' || selectedIndustry !== '') {
            setPrevPage(currentPage);
            setCurrentPage(1);
        } else {
            setCurrentPage(prevPage); // Restore previous page when filters are reset
        }
    }, [searchQuery, selectedIndustry]);


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
                            <option value="Microsoft">Microsoft</option>
                            <option value="Cisco">Cisco</option>
                            <option value="Amazon Web Services">AWS</option>
                            <option value="IBM">IBM</option>
                            <option value="Oracle">Oracle</option>
                            <option value="Facebook">Facebook</option>

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