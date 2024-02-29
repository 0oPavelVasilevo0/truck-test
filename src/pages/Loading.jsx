import React from 'react'
import logo from './../img/truck-icon.png'

const Loading = () => {


    // useEffect(() => {
    //     const timeout = setTimeout(() =>  5000);

    //     return () => (timeout);
    // }, []);

    // return  (
    //     <div className='loading'>
    //         <img src={logo} className='loading-img' alt='' />
    //     </div>
    // ) 

    return (
            <div className='loading'>
                <img src={logo} className='loading-img' alt='' />
            </div>
    )
}

export default Loading