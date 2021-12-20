import Feed from "../../components/Posts/Feed";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AuthForm from "../Auth/Form";
import { view } from "@risingstack/react-easy-state";
import { userAuth } from "../../store";

const HomeView = view(() => {
  return (
    <div className="flex">
      <aside className="pl-1 pr-3 overflow-y-scroll h-screen sticky top-0 w-2/5">
        <Navbar />
      </aside>

      <main className="w-full overflow-y-scroll h-screen sticky top-0">
        {userAuth.isLoggedIn === false ? <AuthForm /> : null}
        <Feed />
      </main>

      <aside className="overflow-y-scroll h-screen hidden md:block lg:block xl:block 2xl:block sticky top-0 w-7/12 pr-7 pl-3">
        <Sidebar />
      </aside>
    </div>
  );
});
export default HomeView;
