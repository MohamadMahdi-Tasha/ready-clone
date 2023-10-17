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

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <HolderComponent>
                <Link href={'/'}>
                    <Image src={logoTypo.src} alt={'Logo Of Ready'} width={100} height={100} />
                </Link>
                <div>
                    <div>
                        <img src={profileImage1.src} alt="Profile Image"/>
                        <img src={profileImage2.src} alt="Profile Image"/>
                        <img src={profileImage3.src} alt="Profile Image"/>
                        <img src={profileImage4.src} alt="Profile Image"/>
                        <img src={profileImage5.src} alt="Profile Image"/>
                    </div>
                    <Link href={'/'}>Get Ready</Link>
                </div>
            </HolderComponent>
        </header>
    );
}