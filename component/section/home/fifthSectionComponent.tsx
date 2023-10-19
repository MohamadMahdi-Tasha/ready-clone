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
        <section className={'mt-[50px] bg-gradient-to-b from-transparent to-indigo-200'}>
            <main>
                <HolderComponent className={'px-[20px]'}>
                    <div className={'mb-[100px]'}>
                        <h1 className={`text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}><span className={'bg-line-fifth-section-1'}>All</span> in a calendar, <br/> that’s a <span className={'bg-line-fifth-section-2'}>joy to use</span></h1>
                        <p className={'text-center text-gray-800 text-[18px] font-normal mb-[50px]'}>An entire meeting collaboration platform built inside a fast <br/> and modern calendar you and your team will love.</p>
                        <div className={'flex flex-wrap items-center justify-center mx-auto gap-[10px] lg:w-[40%]'}>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>Desktop </div>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>App Keyboard </div>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>Shortcuts</div>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>Dark & Light Mode</div>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>Google Calendar Sync</div>
                            <div className={'px-[20px] py-[10px] text-[15px] rounded-[50rem] font-bold text-indigo-500 border border-indigo-200'}>Notifications</div>
                        </div>
                    </div>
                    <img className={'w-full'} src={demoImage.src} alt="Ready App"/>
                </HolderComponent>
            </main>
        </section>
    );
}