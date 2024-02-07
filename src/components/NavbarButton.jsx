const NavbarButton = () => {
    return (
        <div className="md:hidden text-center"> {/* Shown only on screens smaller than medium (768px) */}
            <button className="text-white font-Archivo-700 whitespace-nowrap bg-violet-800 rounded-xl max-md:px-5 max-md:mt-10 px-7 py-2.5 mb-5 hover:bg-violet-200 hover:text-violet-800 cursor-pointer transition-all transition-duration: 400ms;">Contact Us</button>
        </div>
    )
}

export default NavbarButton;