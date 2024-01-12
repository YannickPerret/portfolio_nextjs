import React from 'react';

const ProgressBar = ({ value, max }) => {
    // Calcule le pourcentage de la valeur actuelle par rapport au maximum
    const percentage = (value / max) * 100;

    return (
        <svg width="100%" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="20" rx="10" ry="10" fill="#e0e0e0" />
            <rect x="0" y="0" width={`${percentage}%`} height="20" rx="10" ry="10" fill="#4caf50" />
        </svg>
    );
};

export default ProgressBar;
