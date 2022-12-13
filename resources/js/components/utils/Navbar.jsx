import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const nav = useNavigate();
    const locate = (url) => nav(url)

    return (
        <div>
            <ul>
                <li onClick={()=>locate('/')}>Home</li>
                <li onClick={()=>locate('/listings')}>Listings</li>
            </ul>
        </div>
    )
}

export default Navbar