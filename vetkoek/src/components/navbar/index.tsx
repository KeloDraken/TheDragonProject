const Navbar = () => {
    return (
        <div className="sticky top-0 justify-center flex flex-row pt-3 pl-5 pb-4 w-full">
            <a title="Search" href="#" className="material-icons text-gray-400 hover:text-white mr-8">search</a>
            <a href="/" className="text-normal mr-7 font-bold text-gray-400 hover:text-white">Frontpage</a>
            <a href="/" className="text-normal mr-7 font-bold text-gray-400 hover:text-white">Upvoted</a>
            <a href="/" className="text-normal mr-7 font-bold text-gray-400 hover:text-white">Community</a>
            <a href="/" className="text-normal mr-7 font-bold text-gray-400 hover:text-white">Projects</a>
        </div>
    )
}

export default Navbar