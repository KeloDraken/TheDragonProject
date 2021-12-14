import React, { Fragment } from "react"
// import { Link } from "react-router-dom"


interface SidebarProps {
    cardTitle: string,
}

const SidebarCard: React.FC<SidebarProps> = ({ cardTitle }) => {
    return (
        <Fragment>
            <article className="explore_card mx-3 pt-4 rounded-2xl mb-3">
                <h1 className="font-bold text-xl px-4 mb-4">{cardTitle}</h1>
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
                <div className="link_hover px-5 py-3 rounded-b-2xl">
                    <p className="text-sm text-gray-400">Posted in <span className="underline cursor-pointer">SEO</span></p>
                    <p className="font-bold text-normal">Article four</p>
                </div>
            </article>
        </Fragment>
    )
}
export default SidebarCard