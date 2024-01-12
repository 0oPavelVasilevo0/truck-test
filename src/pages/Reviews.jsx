import React, { useEffect } from 'react'

const Reviews = () => {

    useEffect(() => {
        // Load and execute the script after component is mounted
        const script = document.createElement('script');
        script.src = 'https://res.smartwidgets.ru/app.js';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            document.body.removeChild(script);
        };

    }, []);

    return (
        <main className="section__reviews">
            <div className="container">
                <div className='reviews__avito'>
                    {/* Insert the div for the smart widget here */}
                    <div className="sw-app" data-app="c16c709c34e2fb79e8cce331d993689e"></div>
                </div>
            </div>
         </main>
    )
}

export default Reviews