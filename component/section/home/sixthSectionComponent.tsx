// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import Link from "next/link";
import logoImage from '@/app/favicon.ico';

// Creating and exporting sixth section of home page as default
export default function SixthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'relative'}>
            <img className={'w-[75px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] h-[75px] aspect-square'} src={logoImage.src} alt="Logo of ready app"/>
            <main>
                <HolderComponent className={'pt-[70px] pb-[20px] px-[20px]'}>
                    <h1 className={`text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>
                        It's time. <br/>
                        Get Ready
                    </h1>
                    <p className={'text-center text-gray-800 text-[18px] font-normal mb-[20px]'}>Your calendar has the power to shape your day. And life <br/> is too damn short for bad meetings.</p>
                    <p className={'text-center text-gray-800 text-[18px] font-normal mb-[50px]'}>Get Ready, and let’s shape the future of meetings and <br/> calendars, together.</p>
                    <div className={'flex justify-center items-center gap-[20px] flex-wrap'}>
                        <Link className={'px-[30px] py-[10px] bg-indigo-500 text-white font-bold text-[15px] rounded-[10px]'} href={'/'}>Sign Up</Link>
                        <Link className={'px-[30px] py-[10px] border border-indigo-200 text-indigo-500 font-bold text-[15px] rounded-[10px]'} href={'/'}>Download for Mac</Link>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}