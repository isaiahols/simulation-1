import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header' >
            <nav className="headerButtons" >
                <Link to='/'>
                    <button>Dashboard</button>
                </Link>
                <Link to='/add' >
                    <button>Add Inventory</button>
                </Link>
            </nav>
        </div>
    )
}

export default Header