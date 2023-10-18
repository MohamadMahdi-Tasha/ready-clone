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
    }
}