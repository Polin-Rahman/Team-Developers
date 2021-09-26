import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }

    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="cart-main">
            <h2>{userIcon} Developers added: {props.cart.length}</h2>
            <h3>Total Cost: $ {total}</h3>
            <ul>
                {
                    cart.map(developer => <li key={developer.id} ><span className="name-list">{developer.name}</span> - Added</li>)
                }
            </ul>
            <button className="btn-hire">Hire Now</button>
        </div>
    );
};

export default Cart;