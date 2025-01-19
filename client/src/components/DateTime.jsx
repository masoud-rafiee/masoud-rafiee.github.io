import React, { useEffect, useState } from 'react';

function DateTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="datetime">
            <h2>Date & Time</h2>
            <p>{dateTime.toLocaleString()}</p>
        </div>
    );
}

export default DateTime;
