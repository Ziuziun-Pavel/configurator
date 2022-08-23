import React from "react";
import s from './LoadingSpinner.module.scss';

const LoadingSpinner: React.FC = () =>  {
    return (
        <div className={s.spinnerContainer}>
            <div className={s.loadingSpinner}>
            </div>
        </div>
    );
}

export default LoadingSpinner;
