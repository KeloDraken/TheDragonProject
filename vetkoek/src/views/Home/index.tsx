import Card from "../../components/card";
import Logo from "../../components/Logo";

const HomeView = () => {
    return (
        <div className="flex">
            <aside className="pl-7 pr-10 overflow-y-scroll h-screen sticky top-0 w-2/5 border-r border-gray-700">
                <Logo />
                <a href="#" className="flex rounded-3xl mt-7 px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">home</i>
                    <span className="text-2xl ml-4 -mt-1">Home</span>
                </a>
                <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">explore</i>
                    <span className="text-2xl ml-4 -mt-1">Explore</span>
                </a>
                <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">article</i>
                    <span className="text-2xl ml-4 -mt-1">Blog</span>
                </a>
                <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">forums</i>
                    <span className="text-2xl -mt-1">Community</span>
                </a>
                <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">account_circle</i>
                    <span className="text-2xl ml-4 -mt-1">Profile</span>
                </a>
                <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                    <i className="material-icons-outlined pl-3">info</i>
                    <span className="text-2xl ml-4 -mt-1">About</span>
                </a>
            </aside>

            <main className="w-full">
                <div className="flex sticky top-0 bg-black w-full py-3 px-4 border-b border-gray-700">
                    <h1 className="font-bold text-xl">Home</h1>
                </div>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>
                <h1>Home</h1>

            </main>

            <aside className="h-auto sticky top-0 w-7/12 border-l border-gray-700">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="sticky top-0">
                    <Card />
                </div>
            </aside>
        </div>
    )
}
export default HomeView;