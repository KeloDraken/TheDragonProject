import { Fragment } from "react"
import { Link } from "react-router-dom"

const ArticlesList = () => {
    return (
        <Fragment>
            <article className="explore_card mx-3 pt-4 rounded-2xl">
                <h1 className="font-bold text-xl px-4 mb-4">Card Title</h1>
                <div className="link_hover px-5 py-3">
                    <p className="text-sm text-gray-400">Posted in <span className="underline cursor-pointer">Entrepreneurship</span></p>
                    <p className="font-bold text-normal">Article one</p>
                </div>
                <div className="link_hover px-5 py-3">
                    <p className="text-sm text-gray-400">Posted in <span className="underline cursor-pointer">Job opportunities</span></p>
                    <p className="font-bold text-normal">Article two</p>
                </div>
                <div className="link_hover px-5 py-3">
                    <p className="text-sm text-gray-400">Posted in <span className="underline cursor-pointer">Side projects</span></p>
                    <p className="font-bold text-normal">Article three</p>
                </div>
                <div className="link_hover px-5 py-3">
                    <p className="text-sm text-gray-400">Posted in <span className="underline cursor-pointer">SEO</span></p>
                    <p className="font-bold text-normal">Article four</p>
                </div>
                <Link to="/blog" className="text-red-300">
                    <div className="link_hover px-5 rounded-b-2xl py-5">
                        Explore more
                    </div>
                </Link>
            </article>
        </Fragment>
    )
}
export default ArticlesList