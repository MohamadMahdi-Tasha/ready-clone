// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import {Metadata} from "next";
import HeaderComponent from "@/component/header/headerComponent";
import '@/app/index.css';
import americanStandardFont from '@/app/font';
import FooterComponent from "@/component/footerComponent";

// Creating metadata of page
export const metadata:Metadata = {
    title: 'Ready -- Clone',
    keywords: ['ready', 'clone', 'tailwindCSS', 'CSS', 'front end', 'resume', 'vercel'],
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    themeColor: '#333',
}

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting layout component as default
export default function Layout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={`${americanStandardFont.className} bg-body sand-bg`}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}