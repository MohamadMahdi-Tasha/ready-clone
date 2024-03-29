// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import SecondSectionComponent from "@/component/section/home/secondSectionComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import FourthSectionComponent from '@/component/section/home/fourthSectionComponent';
import FifthSectionComponent from "@/component/section/home/fifthSectionComponent";
import SixthSectionComponent from "@/component/section/home/sixthSectionComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
        </>
    );
}
