import React, { useState } from 'react';

const Exp1 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>Juillet - Août 2017:</h3>
            <h4>Stage au Laser Maintenance, Vénissieux, Lyon</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Stage au Laser Maintenance, Vénissieux, Lyon</h2>
                            <h5>(Juillet - Août 2017)</h5>
                            <p className='text'>
                                Descriptif: Stage ouvier <br/>
                                Tâches: Rénover des imprimantes
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp1;