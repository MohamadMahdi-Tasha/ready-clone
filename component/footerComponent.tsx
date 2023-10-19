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
        <footer>
            <main>
                <HolderComponent>
                    <div>
                        <span>Ready — Made remotely (The original one of course) 🌏</span>
                        <div>
                            <Link href={'/'}>Privacy Policy</Link>
                            <Link href={'/'}>Terms of Service</Link>
                        </div>
                    </div>
                    <div>
                        <Link href={'https://twitter.com/readycalendar'}><IconComponent size={20} name={'twitter'} /></Link>
                        <Link href={'http://linkedin.com/company/readycalendar'}><IconComponent size={20} name={'linkedin'} /></Link>
                    </div>
                </HolderComponent>
            </main>
            <div>
                <HolderComponent>
                    <h6>
                        Made with ❤️ By
                        <Link href={'https://mahditasha.vercel.app'}>Mahdi Tasha</Link>
                    </h6>
                </HolderComponent>
            </div>
        </footer>
    );
}