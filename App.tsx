
import React, { useState, useCallback } from 'react';
import type { WeatherData } from './types';
import { getWeatherForLocation, getWeatherAdvice } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import AdviceDisplay from './components/AdviceDisplay';
import { SunIcon } from './components/icons';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-500/30 border border-red-500 text-red-200 px-4 py-3 rounded-lg relative max-w-lg mx-auto text-center" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{message}</span>
    </div>
);

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [advice, setAdvice] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isInitial, setIsInitial] = useState(true);

    const handleSearch = useCallback(async (location: string) => {
        setIsInitial(false);
        setIsLoading(true);
        setError(null);
        setWeatherData(null);
        setAdvice(null);

        try {
            const data = await getWeatherForLocation(location);
            setWeatherData(data);
            const newAdvice = await getWeatherAdvice(data);
            setAdvice(newAdvice);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-8 sm:pt-16">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 flex items-center justify-center gap-3">
                        <SunIcon className="w-10 h-10 text-yellow-300"/>
                        AI Weather Advisor
                    </h1>
                    <p className="text-lg text-purple-200">Real-time weather and AI-powered advice for any location.</p>
                </header>

                <div className="w-full">
                    <SearchBar onSearch={handleSearch} isLoading={isLoading} />
                </div>
                
                <div className="w-full mt-8 space-y-6">
                    {isLoading && <LoadingSpinner />}
                    {error && <ErrorMessage message={error} />}

                    {weatherData && (
                        <div className="animate-fade-in">
                            <WeatherDisplay data={weatherData} />
                        </div>
                    )}
                    
                    {advice && (
                        <div className="animate-fade-in-delay">
                            <AdviceDisplay advice={advice} />
                        </div>
                    )}

                    {isInitial && !isLoading && (
                        <div className="text-center text-gray-400 mt-8">
                            <p>Enter a city to get started!</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default App;
