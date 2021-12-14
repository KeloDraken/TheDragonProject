import { Fragment } from "react"
// import { Link } from "react-router-dom"

const UpcomingProjects = () => {
    return (
        <Fragment>
            <article className="explore_card mx-3 pt-4 rounded-2xl mt-5">
                <h1 className="font-bold text-2xl px-4 mb-4">Card Title</h1>
                <div className="link_hover px-5 py-4">
                    <p className="text-sm text-gray-400">Posted by <span className="underline cursor-pointer">user1</span></p>
                    <p className="font-bold text-lg">Product one</p>
                </div>
                <div className="link_hover px-5 py-4">
                    <p className="text-sm text-gray-400">Posted by <span className="underline cursor-pointer">user2</span></p>
                    <p className="font-bold text-lg">Product two</p>
                </div>
                <div className="link_hover px-5 py-4">
                    <p className="text-sm text-gray-400">Posted by <span className="underline cursor-pointer">user3</span></p>
                    <p className="font-bold text-lg">Product three</p>
                </div>
                <div className="link_hover px-5 py-4 rounded-b-2xl">
                    <p className="text-sm text-gray-400">Posted by <span className="underline cursor-pointer">user4</span></p>
                    <p className="font-bold text-lg">Product four</p>
                </div>
            </article>
        </Fragment>
    )
}
export default UpcomingProjects