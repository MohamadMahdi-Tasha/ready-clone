// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    name: string;
    size: number;
}

// Creating and exporting icon component as default
export default function IconComponent({name, size}:propsType):ReactNode {
    // Conditional rendering
    if (name === 'threeLines') {
        return (
            <svg width={size} height={size} viewBox="0 0 53 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5701 43.5835C12.5762 43.0286 7.26707 39.5561 2.39844 38.165" stroke="#5C6AE4" strokeWidth="3" strokeLinecap="round"/>
                <path d="M31.8761 32.3515C28.0743 24.1315 23.3263 16.4475 19.5195 8.2168" stroke="#5C6AE4" strokeWidth="3" strokeLinecap="round"/>
                <path d="M48.9961 24.0762C48.9961 16.4819 49.1603 9.74725 51.1635 2.40234" stroke="#5C6AE4" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        );
    } else if (name === 'twitter') {
        return (
            <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z" fill="black"/>
            </svg>
        );
    } else if (name === 'linkedin') {
        return (
            <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M15.3 0H0.7C0.3 0 0 0.3 0 0.7V15.4C0 15.7 0.3 16 0.7 16H15.4C15.8 16 16.1 15.7 16.1 15.3V0.7C16 0.3 15.7 0 15.3 0ZM4.7 13.6H2.4V6H4.8V13.6H4.7ZM3.6 5C2.8 5 2.2 4.3 2.2 3.6C2.2 2.8 2.8 2.2 3.6 2.2C4.4 2.2 5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5ZM13.6 13.6H11.2V9.9C11.2 9 11.2 7.9 10 7.9C8.8 7.9 8.6 8.9 8.6 9.9V13.7H6.2V6H8.5V7C8.8 6.4 9.6 5.8 10.7 5.8C13.1 5.8 13.5 7.4 13.5 9.4V13.6H13.6Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        );
    }
}