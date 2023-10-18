// Codes by mahdi tasha
// Forcing NextJS to render this component as client side component
'use client'

// Importing part
import {ReactNode, useEffect} from "react";
import {walsheimFont} from "@/app/font";
import HolderComponent from "@/chunk/holderComponent";
import demoImage1 from '@/public/img/section/secondSection/img-demo-1.webp';
import demoImage2 from '@/public/img/section/secondSection/img-demo-2.webp';
import demoImage3 from '@/public/img/section/secondSection/img-demo-3.webp';

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Using useEffect hook to scroll the demos holder to left as user scrolls the page
    useEffect(() => {
        addEventListener('scroll', (event) => {
            const secondSectionImageHolder:any = document.getElementById('second-section-image-holder');
            const transformOfHolder:string = getComputedStyle(secondSectionImageHolder).transform;

            if (transformOfHolder !== 'none') {
                secondSectionImageHolder.style = `transform: translateX(${(window.scrollY - 1000) * -1}px)`;
            }
        })
    }, [])

    // Returning JSX
    return (
        <section className={'lg:mt-[150px] mt-[50px] overflow-hidden'}>
            <main>
                <HolderComponent className={'p-[20px]'}>
                    <h1 className={`sm:text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>A superpowered <br/> meeting in every <br/> calendar event</h1>
                    <p className={'sm:text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Calendar events in Ready are instantly transformed into <br/> collaborative meeting spaces designed to create the <br/> perfect meeting in seconds.</p>
                    <div id={'second-section-image-holder'} className={'flex gap-[20px] -translate-x-[50%]'}>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage1.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage2.src} alt="Demo image of the ready app"/>
                        <img className={'lg:w-[30vw] object-cover shrink-0 w-[20rem]'} src={demoImage3.src} alt="Demo image of the ready app"/>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}