import ArticlesList from "../../components/ArticlesList";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import UpcomingProjects from "../../components/UpcomingProjects";

const HomeView = () => {
    return (
        <div className="flex">
            <aside className="pl-7 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5 border-r border-gray-700">
                <Logo />
                <Navbar />
            </aside>

            <main className="w-full overflow-y-scroll h-screen sticky top-0">
                <div className="flex sticky top-0 bg-black w-full py-3 px-4 border-b border-gray-700">
                    <h1 className="font-bold text-xl">Home</h1>
                </div>
                <div className="">
                    <h1>begin</h1>
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
                    <h1>end</h1>
                </div>
            </main>

            <aside className="overflow-y-scroll h-screen sticky top-0 w-7/12 border-l pr-7 pl-3 border-gray-700">
                <SearchForm />
                <ArticlesList />
                <UpcomingProjects />
                <div className="sticky top-0">
                    <p>bottom</p>
                </div>
            </aside>
        </div>
    )
}
export default HomeView;