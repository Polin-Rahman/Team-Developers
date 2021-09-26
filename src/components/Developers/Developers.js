import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    //use states
    const [developers, setDevelopers] = useState([]);

    const [cart, setCart] = useState([]);

    //load data
    useEffect(() => {
        fetch('./fake-data.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    //cart handeler
    const handelToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    //sending props to child components
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