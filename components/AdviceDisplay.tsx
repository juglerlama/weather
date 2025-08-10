
import React from 'react';

const AdviceDisplay: React.FC<{ advice: string }> = ({ advice }) => {
    return (
        <div className="text-white p-6 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg w-full max-w-lg mx-auto border border-white/20">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-500/50 flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-purple-200">AI Advice</h3>
                    <p className="text-gray-200 mt-1">{advice}</p>
                </div>
            </div>
        </div>
    );
};

export default AdviceDisplay;
