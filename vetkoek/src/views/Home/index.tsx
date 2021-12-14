import Card from "../../components/card";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";

const HomeView = () => {
    return (
        <div className="flex">
            <aside className="pl-7 overflow-y-scroll h-screen sticky top-0 w-2/5 border-r border-gray-700">
                <Logo />
                <Navbar />
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
                <SearchForm />
                <Card />
            </aside>
        </div>
    )
}
export default HomeView;