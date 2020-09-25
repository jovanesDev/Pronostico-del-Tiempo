import React from 'react'

const Header = ({titulo}) => {
    return (
        <nav>
            <div className=" nav-wrapper deep-purple">
            <a href="#?" className="brand-logo white-text ">{titulo}</a>
            </div>

        </nav>
    )
}

export default Header
