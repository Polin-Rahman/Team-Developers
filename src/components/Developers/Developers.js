import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        fetch('./fake-data.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    return (
        <div className="developers-container">
            <div className="developer-container">
                <div className="developer">
                    {
                        developers.map(developer => <Developer
                            key={developer.id}
                            developer={developer}></Developer>)
                    }
                </div>

            </div>
            <div className="cart-containar">
                <h2><i class="fas fa-user-plus"></i> Developer added:</h2>
            </div>
        </div>
    );
};

export default Developers;