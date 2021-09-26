import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }

    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div>
            <h2>{userIcon} Developer added: {props.cart.length}</h2>
            <h3>Total: {total}</h3>
            <ul>
                {
                    cart.map(developer => <li>{developer.name} - added</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;