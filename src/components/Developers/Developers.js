import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fake-data.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    const handelToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div className="developers-container">
            <div className="developer-container">
                <div className="developer">
                    {
                        developers.map(developer => <Developer
                            key={developer.id}
                            developer={developer}
                            handelToCart={handelToCart}></Developer>)
                    }
                </div>

            </div>
            <div className="cart-containar">
                <Cart cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Developers;