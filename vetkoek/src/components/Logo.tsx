import { Link } from "react-router-dom"
import "./style.css"

const Logo = () => {
    return (
        <div className="mt-4">
            <Link to="/" className="flex">
                <img src="https://i.imgur.com/yk842xK.png" width={50} alt="logo" />
                <span className="logo my-3 text-3xl font-bold">KeloDraken</span>
            </Link>
        </div>
    )
}
export default Logo