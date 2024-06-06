import React from 'react';
import lady from '../../../assets/cardpic.svg';

export default function Cards() {
    return (
        <div className="max-w-[280px] rounded-lg overflow-hidden shadow-lg">
            <div className="block">
                <img
                    src={lady}
                    alt="helper-card"
                    className="object-contain w-full"
                />
                <div className="p-4">
                    <h5 className="text-lg font-bold mb-2">Lizard</h5>
                    <p className="text-sm text-gray-600 mb-1">
                        Nationality: Colombia
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Experience: 2-5 years
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Desired Job: Nanny
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Desired Salary: $20/hr
                    </p>
                </div>
            </div>
        </div>
    );
}
