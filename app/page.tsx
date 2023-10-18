// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}