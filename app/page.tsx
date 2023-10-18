// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import SecondSectionComponent from "@/component/section/home/secondSectionComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
        </>
    );
}