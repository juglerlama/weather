
import React from 'react';
import type { WeatherData } from '../types';
import { WeatherIcon, DropletIcon, WindIcon } from './icons';

const WeatherDisplay: React.FC<{ data: WeatherData }> = ({ data }) => {
    return (
        <div className="text-white p-6 sm:p-8 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg w-full max-w-lg mx-auto border border-white/20">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{data.locationName}</h2>
                    <p className="text-lg text-gray-300">{data.condition}</p>
                </div>
                <div className="text-yellow-300">
                    <WeatherIcon condition={data.condition} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <div className="text-6xl sm:text-7xl font-extrabold tracking-tighter">
                    {Math.round(data.temperatureCelsius)}°<span className="text-4xl sm:text-5xl font-semibold align-top">C</span>
                </div>
                <div className="space-y-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <span className="font-medium">Humidity</span>
                        <DropletIcon className="w-5 h-5 text-blue-300"/>
                        <span className="font-bold">{data.humidity}%</span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                         <span className="font-medium">Wind</span>
                        <WindIcon className="w-5 h-5 text-gray-300"/>
                        <span className="font-bold">{Math.round(data.windSpeedKPH)} kph</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
