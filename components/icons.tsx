
import React from 'react';

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
);

export const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 1 4.5-4.5h10.5a4.5 4.5 0 0 1 4.5 4.5v.75a4.5 4.5 0 0 1-4.5 4.5H6.75a4.5 4.5 0 0 1-4.5-4.5v-.75Z" />
    </svg>
);

export const RainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 19.5h.01m3.74 0h.01m3.74 0h.01"/>
    </svg>
);

export const SnowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v13.5m-4.243-4.243L12 12l4.243 4.243m0-8.486L12 12l-4.243-4.243M5.25 12h13.5" />
    </svg>
);

export const StormIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
);

export const WindIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const FogIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3 5.858a8.287 8.287 0 0 0 5.858 3 8.287 8.287 0 0 0 2.37-.427A8.252 8.252 0 0 1 15.362 5.214Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75v-.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75v-.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v.75" />
     </svg>
);

export const DropletIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


export const WeatherIcon = ({ condition, className }: { condition: string; className: string }) => {
    const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes('storm') || lowerCaseCondition.includes('thunder')) {
        return <StormIcon className={className} />;
    }
    if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('sleet') || lowerCaseCondition.includes('blizzard')) {
        return <SnowIcon className={className} />;
    }
    if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle') || lowerCaseCondition.includes('shower')) {
        return <RainIcon className={className} />;
    }
    if (lowerCaseCondition.includes('cloud') || lowerCaseCondition.includes('overcast')) {
        return <CloudIcon className={className} />;
    }
    if (lowerCaseCondition.includes('fog') || lowerCaseCondition.includes('mist') || lowerCaseCondition.includes('haze')) {
        return <FogIcon className={className} />;
    }
    if (lowerCaseCondition.includes('wind')) {
        return <WindIcon className={className} />;
    }
    if (lowerCaseCondition.includes('sun') || lowerCaseCondition.includes('clear') || lowerCaseCondition.includes('fair')) {
        return <SunIcon className={className} />;
    }

    return <CloudIcon className={className} />;
};
