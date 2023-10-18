// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {walsheimFont} from "@/app/font";
import HolderComponent from "@/chunk/holderComponent";
import demoImage1 from '@/public/img/section/secondSection/img-demo-1.webp';
import demoImage2 from '@/public/img/section/secondSection/img-demo-2.webp';
import demoImage3 from '@/public/img/section/secondSection/img-demo-3.webp';

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mt-[150px]'}>
            <main>
                <HolderComponent>
                    <h1 className={`text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>A superpowered <br/> meeting in every <br/> calendar event</h1>
                    <p className={'text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Calendar events in Ready are instantly transformed into <br/> collaborative meeting spaces designed to create the <br/> perfect meeting in seconds.</p>
                    <div>
                        <img src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img src={demoImage3.src} alt="Demo image of the ready app"/>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}