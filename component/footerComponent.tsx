// Codes by mahdi tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Creating and exporting footer component as default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'mt-[100px]'}>
            <main>
                <HolderComponent className={'p-[20px] gap-[20px] flex justify-between flex-wrap items-center'}>
                    <div>
                        <span className={'block mb-[15px] text-[15px] font-normal text-gray-800'}>Ready — Made remotely (The original one of course) 🌏</span>
                        <div className={'flex flex-wrap w-full justify-start gap-[20px]'}>
                            <Link className={'block mb-[15px] text-[12px] font-normal text-gray-500'} href={'/'}>Privacy Policy</Link>
                            <Link className={'block mb-[15px] text-[12px] font-normal text-gray-500'} href={'/'}>Terms of Service</Link>
                        </div>
                    </div>
                    <div className={'flex gap-[20px]'}>
                        <Link className={'transition-all duration-300 text-gray-500 hover:text-gray-800'} href={'https://twitter.com/readycalendar'}><IconComponent size={20} name={'twitter'} /></Link>
                        <Link className={'transition-all duration-300 text-gray-500 hover:text-gray-800'} href={'http://linkedin.com/company/readycalendar'}><IconComponent size={20} name={'linkedin'} /></Link>
                    </div>
                </HolderComponent>
            </main>
            <div className={'bg-indigo-700'}>
                <HolderComponent className={'p-[20px]'}>
                    <h6 className={'text-center text-[15px] text-white'}>
                        Cloned with ❤️ By
                        <Link className={'font-bold ml-[1ch] underline underline-offset-4'} href={'https://mahditasha.vercel.app'}>Mahdi Tasha</Link>
                    </h6>
                </HolderComponent>
            </div>
        </footer>
    );
}