
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (location: string) => void;
    isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() && !isLoading) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <label htmlFor="location-search" className="sr-only">Search location</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    id="location-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                    className="block w-full pl-10 pr-20 py-3 text-white bg-white/10 rounded-full border-2 border-transparent focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none transition duration-300 placeholder-gray-400"
                    placeholder="E.g., London, Tokyo, New York"
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="absolute inset-y-0 right-0 flex items-center pr-1.5">
                    <span className="h-10 px-6 font-semibold rounded-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center transition duration-300">
                        {isLoading ? '...' : 'Search'}
                    </span>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
