import React from 'react';
import { Tilt } from 'react-tilt';

const OverviewSkillCard = ({ name, level }) => {
    const defaultOptions = {
        reverse: false,
        max: 25,             
        perspective: 1500,    
        scale: 1.1,           
        speed: 2000,          
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",  
    };

    return (
        <Tilt options={defaultOptions}>
            <div className="border-2 border-gray-400 bg-gray-200 p-6 rounded-lg w-[250px] h-[300px] flex justify-center items-center shadow-lg transition-all duration-300 hover:border-purple-500 hover:shadow-xl">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600">Level: {level}</p>
                </div>
            </div>
        </Tilt>
    );
}

export default OverviewSkillCard;
