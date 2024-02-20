import React, { useState, useEffect } from 'react';

export function TimeAgo({ date }) {
    const [timeAgo, setTimeAgo] = useState('');

    const calculateTimeAgo = () => {
        const diff = Date.now() - new Date(date);
        const diffInMinutes = Math.max(1, Math.floor(diff / 60000));
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInYears > 0) {
            return diffInYears + 'y';
        } else if (diffInWeeks > 0) {
            return diffInWeeks + 'w';
        } else if (diffInDays > 0) {
            return diffInDays + 'd';
        } else if (diffInHours > 0) {
            return diffInHours + 'h';
        } else {
            return diffInMinutes + 'm';
        }
    };

    useEffect(() => {
        setTimeAgo(calculateTimeAgo());

        const interval = setInterval(() => {
            setTimeAgo(calculateTimeAgo());
        }, 60000);

        return () => clearInterval(interval);
    }, [date]);

    return <span>{timeAgo}</span>;
}
