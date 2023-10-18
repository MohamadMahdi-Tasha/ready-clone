// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from 'next/link';
import Image from 'next/image';
import logoTypo from '@/public/img/header/img-logo-typo.svg';
import profileImage1 from '@/public/img/header/profiles/img-1.webp';
import profileImage2 from '@/public/img/header/profiles/img-2.webp';
import profileImage3 from '@/public/img/header/profiles/img-3.webp';
import profileImage4 from '@/public/img/header/profiles/img-4.webp';
import profileImage5 from '@/public/img/header/profiles/img-5.webp';
import HeaderProfileComponent from "@/component/header/headerProfileComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur fixed top-0 left-0 w-full border-b border-b-black/20'}>
            <div className={'sand-bg'}>
                <HolderComponent className={'flex justify-between items-center gap-[20px] py-[10px] px-[15px] flex-wrap'}>
                    <Link className={'block'} href={'/'}>
                        <Image className={'w-auto h-auto'} src={logoTypo.src} alt={'Logo Of Ready'} width={100} height={100} />
                    </Link>
                    <div className={'flex flex-wrap gap-[10px]'}>
                        <div className={'sm:flex hidden ml-[10px]'}>
                            <HeaderProfileComponent img={profileImage1.src} />
                            <HeaderProfileComponent img={profileImage2.src} />
                            <HeaderProfileComponent img={profileImage3.src} />
                            <HeaderProfileComponent img={profileImage4.src} />
                            <HeaderProfileComponent img={profileImage5.src} />
                        </div>
                        <Link className={'flex items-center justify-center rounded-[5px] text-[13px] font-bold px-[15px] py-[5px] bg-indigo-500 text-white'} href={'/'}>Get Ready</Link>
                    </div>
                </HolderComponent>
            </div>
        </header>
    );
}