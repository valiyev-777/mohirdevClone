import React from "react";
import "./cards.css";


interface CardProps {
    title: string;
    student: string;
    fullName: string;
    imageSrc: string;
    cost: string;
    progress?: number;
    button?: string;
    free?: string;
}

const Cards: React.FC<CardProps> = ({ title, student, fullName, imageSrc, cost, progress, button, free }) => {
    return (
        <div className="card">
            <img className="aftorIMg" src={imageSrc} alt="Author" />
            <div className="cardInfo">
                <p className="students">{student}</p>
                <h3>{title}</h3>
                <p className="name">{fullName}</p>

                {typeof progress === "number" && (
                    <div className="progressbar">
                        <div className="progressBg">
                            <div className="progressFoiz" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="progressText">{progress}%</p>
                    </div>
                )}

                <h2>{cost}</h2>

                {typeof button === "string" && (
                    <button>{button}</button>
                )}

                <h4>{free}</h4>
            </div>
        </div>
    );
};

export default Cards;
