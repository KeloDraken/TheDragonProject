import { Fragment } from "react"

const Navbar = () => {
    return (
        <Fragment>
            <a href="#" className="flex rounded-3xl mt-7 px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">home</i>
                <span className="text-2xl ml-6 -mt-1">Home</span>
            </a>
            <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">explore</i>
                <span className="text-2xl ml-6 -mt-1">Explore</span>
            </a>
            <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">article</i>
                <span className="text-2xl ml-6 -mt-1">Blog</span>
            </a>
            <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">forums</i>
                <span className="text-2xl -mt-1">Community</span>
            </a>
            <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">account_circle</i>
                <span className="text-2xl ml-6 -mt-1">Profile</span>
            </a>
            <a href="#" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">info</i>
                <span className="text-2xl ml-6 -mt-1">About</span>
            </a>
        </Fragment>
    )
}

export default Navbar