const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between py-1 px-4 w-full border-b border-gray-800">
            <a href="/" title="Ett projekt av Samkelo Drakensberg" className="text-lg">KeloDraken</a>
            <div className="flex flex-row">
                <h6 className="text-colour text-3xl ml-3 font-bold">
                    <a title="Bookmarks" href="#" className="material-icons text-white">bookmark</a>
                </h6>
                <h6 className="text-colour text-3xl ml-3 mr-3 font-bold">
                    <a title="Dashboard" href="#" className="material-icons text-white">dashboard</a>
                </h6>
                <a title="Create a Matstad account" href="#" className="bg-white text-black text-sm rounded-xl font-extrabold px-4 py-2">Sign in</a>
            </div>
        </nav>
    )
}

export default Navbar