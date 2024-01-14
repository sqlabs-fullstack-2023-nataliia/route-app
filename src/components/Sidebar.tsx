import React, { useState } from 'react'
import colors from '../services/colors'
import { RiDashboardFill } from "react-icons/ri";
import { IoStorefrontSharp, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaShoppingCart, FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [selectedPage, setSelectedPage] = useState('Dashbord');

    const pages = [
        { icon: <RiDashboardFill size={20} />, route: '/', title: 'Dashbord' },
        { icon: <IoStorefrontSharp size={20} />, route: '/store', title: 'Store' },
        { icon: <IoChatbubbleEllipsesSharp size={20} />, route: '/support', title: 'Support' },
        { icon: <FaShoppingCart size={20} />, route: '/cart', title: 'Cart' },
        { icon: <FaUserTie size={20} />, route: '/login', title: 'login' },
    ]
    return (
        <div style={{ height: '100vh', backgroundColor: colors.outer_space }}>
            <div className="avatar-container">
                <img className='avatar' alt='avatar' src='https://res.cloudinary.com/united-app/image/upload/v1686929983/avatars/avatar3_j9bubc.png' />
                <p className='pgreen'>Nataliia Stasiukova</p>
                <p className='pwhite'>Full Stack</p>
            </div>
            {
                pages.map((page, index) => (
                    <Link onClick={() => setSelectedPage(page.title)} to={page.route} key={index} className={selectedPage === page.title ? 'pressed_link' : 'link'}>
                        {page.icon} <span style={{ marginLeft: 12 }}>{page.title}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar