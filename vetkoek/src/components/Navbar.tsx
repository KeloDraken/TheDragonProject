import { Fragment } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Fragment>
            <Link to="/" className="flex rounded-3xl mt-7 pl-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">home</i>
                <span className="text-xl ml-6 -mt-1">Home</span>
            </Link>
            <Link to="/explore" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">explore</i>
                <span className="text-xl ml-6 -mt-1">Explore</span>
            </Link>
            <Link to="/blog" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">article</i>
                <span className="text-xl ml-6 -mt-1">Blog</span>
            </Link>
            <Link to="/community" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">forums</i>
                <span className="text-xl -mt-1">Community</span>
            </Link>
            <Link to="/account" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">account_circle</i>
                <span className="text-xl ml-6 -mt-1">Profile</span>
            </Link>
            <Link to="/about" className="flex rounded-3xl px-3 py-3 navlink">
                <i className="material-icons-outlined pl-3">info</i>
                <span className="text-xl ml-6 -mt-1">About</span>
            </Link>
        </Fragment>
    )
}

export default Navbar