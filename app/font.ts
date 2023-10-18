// Codes by mahdi tasha
// Importing part
import localFont from "next/font/local";
import {NextFont} from "next/dist/compiled/@next/font";

// Defining custom fonts
const americanStandardFont:NextFont = localFont({
    src: '../public/font/america-standard.woff'
})

export const walsheimFont:NextFont = localFont({
    variable: '--font-walsheim',
    src: [
        {
            path: '../public/font/walsheim/GT-Walsheim-Black.woff2',
            weight: '900',
            style: 'normal'
        },
        {
            path: '../public/font/walsheim/GT-Walsheim-Bold.woff2',
            weight: '900',
            style: 'normal'
        },
        {
            path: '../public/font/walsheim/GT-Walsheim-Condensed-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/font/walsheim/GT-Walsheim-Condensed-Medium.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/font/walsheim/GT-Walsheim-Condensed-Regular.woff2',
            weight: '500',
            style: 'normal'
        }
    ]
})

// Exporting the american standard font as default
export default americanStandardFont;