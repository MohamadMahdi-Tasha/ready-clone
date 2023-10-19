// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import Link from "next/link";

// Creating and exporting sixth section of home page as default
export default function SixthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <HolderComponent>
                    <h1 className={`sm:text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>
                        It's time. <br/>
                        Get Ready
                    </h1>
                    <p className={'sm:text-center text-gray-800 text-[18px] font-normal mb-[50px]'}>Your calendar has the power to shape your day. And life is too damn short for bad meetings.</p>
                    <p className={'sm:text-center text-gray-800 text-[18px] font-normal mb-[80px]'}>Get Ready, and let’s shape the future of meetings and calendars, together.</p>
                    <div>
                        <Link href={'/'}>Sign Up</Link>
                        <Link href={'/'}>Download for Mac</Link>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}