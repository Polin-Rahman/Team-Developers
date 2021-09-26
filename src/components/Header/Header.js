import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

    const usersIcon = <FontAwesomeIcon icon={faUsers} />

    return (
        <div className="header">
            <div>
                <h1>Team - Developer'S {usersIcon}</h1>
                <p>Make a roboust developer team! for you'r dynamic project!!</p>
                <h2>Total Budget: $ 1 Million</h2>
            </div>

        </div>
    );
};

export default Header;