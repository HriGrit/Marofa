import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import './Cards.css'; 
import lady from '../../../assets/cardpic.svg';

export default function Cards({ helper }) {
    return (
        <div className="w-[200px] h-[400px] rounded-lg overflow-hidden shadow-lg flex flex-col">
            <a href={`/helpers/${helper.id}`} className="flex-grow flex flex-col">
                <div className="aspect-w-1 aspect-h-1 w-full relative">
                    <LazyLoadImage
                        src={helper.image || lady} 
                        alt="helper-card"
                        effect="blur" 
                        className="object-cover w-full h-full" 
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                    <h5 className="text-lg font-bold mb-2">
                        {helper.personalInfoHelper?.firstName || 'Helper'}
                    </h5>
                    <p className="text-sm text-gray-600 mb-1">
                        Nationality: {helper.personalInfoHelper?.nationality || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Experience: {helper.professionalInfoHelper?.yearsOfExperience || 'N/A'} years
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Desired Salary: {helper.jobPreferenceHelper?.expectedSalary || 'N/A'} SAR
                    </p>
                </div>
            </a>
        </div>
    );
}
