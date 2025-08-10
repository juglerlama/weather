import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const weatherSchema = {
    type: Type.OBJECT,
    properties: {
        locationName: { 
            type: Type.STRING,
            description: "The official name of the location, e.g., 'Paris, France'."
        },
        temperatureCelsius: { 
            type: Type.NUMBER,
            description: "The current temperature in Celsius, as a whole number."
        },
        condition: { 
            type: Type.STRING, 
            description: "A brief, one or two word description of the weather, e.g., 'Sunny', 'Partly Cloudy', 'Light Rain', 'Thunderstorm', 'Snowy', 'Windy', 'Foggy'."
        },
        humidity: { 
            type: Type.INTEGER, 
            description: "The humidity percentage, from 0 to 100."
        },
        windSpeedKPH: { 
            type: Type.NUMBER, 
            description: "The wind speed in kilometers per hour."
        },
    },
    required: ["locationName", "temperatureCelsius", "condition", "humidity", "windSpeedKPH"]
};

export const getWeatherForLocation = async (location: string): Promise<WeatherData> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate the current, real-time weather data for the following location: ${location}. Provide a realistic and accurate representation of the current conditions. If the location is ambiguous, choose the most famous one.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: weatherSchema,
            },
        });
        
        const jsonText = response.text?.trim();
        if (!jsonText) {
             throw new Error("AI returned an empty response. The location may not be recognized.");
        }
        
        const weatherData = JSON.parse(jsonText);
        
        if (!weatherData.locationName || typeof weatherData.temperatureCelsius !== 'number') {
            throw new Error("Invalid weather data format received from AI.");
        }
        
        return weatherData as WeatherData;

    } catch (error) {
        console.error("Error fetching weather data from Gemini:", error);
        if (error instanceof Error && error.message.includes('JSON')) {
             throw new Error(`The location "${location}" could not be found. Please try a different one.`);
        }
        throw new Error(`Failed to get weather for ${location}. Please try again.`);
    }
};

export const getWeatherAdvice = async (weatherData: WeatherData): Promise<string> => {
    try {
        const prompt = `
            Based on the following weather data for ${weatherData.locationName}, provide some concise, practical, and friendly advice for someone going about their day. 
            Keep it to 2-3 short sentences. Be encouraging and helpful. Do not repeat the weather conditions in your advice.

            Weather Details:
            - Condition: ${weatherData.condition}
            - Temperature: ${weatherData.temperatureCelsius}°C
            - Humidity: ${weatherData.humidity}%
            - Wind: ${weatherData.windSpeedKPH} km/h
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7,
            }
        });

        const adviceText = response.text?.trim();
        if (!adviceText) {
            throw new Error("AI returned empty advice.");
        }
        return adviceText;
    } catch (error) {
        console.error("Error fetching weather advice from Gemini:", error);
        throw new Error("Could not generate weather advice at the moment.");
    }
};