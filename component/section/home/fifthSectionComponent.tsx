// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import demoImage from '@/public/img/section/fifthSection/img-demo.webp';

// Creating and exporting fifth section of home page as default
export default function FifthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mt-[50px]'}>
            <main>
                <HolderComponent>
                    <div>
                        <h1 className={`sm:text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}><span>All</span> in a calendar, <br/> that’s a <span>joy to use</span></h1>
                        <p className={'sm:text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>An entire meeting collaboration platform built inside a fast <br/> and modern calendar you and your team will love.</p>
                        <div>
                            <div>Desktop </div>
                            <div>AppKeyboard </div>
                            <div>Shortcuts</div>
                            <div>Dark & Light Mode</div>
                            <div>Google Calendar Sync</div>
                            <div>Notifications</div>
                        </div>
                    </div>
                    <img src={demoImage.src} alt="Ready App"/>
                </HolderComponent>
            </main>
        </section>
    );
}