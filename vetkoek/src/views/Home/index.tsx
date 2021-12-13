import { Fragment } from "react"
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const HomeView = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <h1>This is home</h1>
        </Fragment>
    )
}
export default HomeView;