const SearchForm = () => {
    return (
        <div className="sticky top-0 bg-black mb-3">
            <form method="GET" className="mx-3 mt-2">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className="p-1 focus:outline-none focus:shadow-outline material-icons-outlined">
                            search
                        </i>
                    </span>
                    <input type="text" name="q" className="w-full py-2 text-sm text-white input rounded-3xl pl-14 py-3" placeholder="Search..." autoComplete="off" />
                </div>
            </form>
        </div>
    )
}

export default SearchForm