import React, { useEffect, useState } from 'react'
import Loading from '../pages/Loading';

const Delay = ({ waitBeforeShow, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, waitBeforeShow);

        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return show ? children : <Loading />;
};

export default Delay