// Codes by mahdi tasha
'use client'
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import demoImage1 from '@/public/img/section/firstSection/img-demo-1.webp';
import demoImage2 from '@/public/img/section/firstSection/img-demo-2.webp';
import americanStandardFont ,{walsheimFont} from "@/app/font";
import {motion} from 'framer-motion';

// Creating and exporting first section component as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'lg:mt-[200px] mt-[100px]'}>
            <main>
                <HolderComponent className={'p-[20px]'}>
                    <h4 className={'text-[12px] text-center font-bold text-indigo-500 tracking-[2px] mb-[20px]'}>YOUR NEW CALENDAR</h4>
                    <h1 className={`text-center lg:text-[80px] text-[50px] text-gray-800 font-bold lg:leading-[90px] leading-[50px] mb-[30px] ${walsheimFont.className}`}>
                        The calendar
                        <div className={'relative'}>
                            <span>you need to meet</span>
                            <div className={'absolute right-0 top-0 w-[64%] xl:flex hidden items-start pr-[230px]'}>
                                <motion.div
                                    variants={{
                                        hidden: {width: 0, opacity: 0},
                                        visible: {width: '100%', opacity: 1}
                                    }}
                                    transition={{duration: 1}}
                                    initial={'hidden'}
                                    animate={'visible'}
                                    className={'w-full h-[100px] bg-indigo-700/30 -z-[1] rounded-l-[20px]'}
                                />
                                <div className={'flex items-start -translate-y-[50%]'}>
                                    <div className={'w-[1px] h-[200px] bg-indigo-700'}/>
                                    <motion.div
                                        variants={{
                                            hidden: {opacity: 0},
                                            visible: {opacity: 1}
                                        }}
                                        initial={'hidden'}
                                        animate={'visible'}
                                        transition={{duration: 1, delay: 1.5}}
                                        className={'rounded-t-[10px] rounded-r-[10px] -translate-y-[80%] -translate-x-[1px] px-[10px] py-[5px] h-[30px] flex justify-center items-center bg-indigo-700'}
                                    >
                                        <span className={`${americanStandardFont.className} text-[14px] font-bold text-white`}>Febby</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </h1>
                    <p className={'text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Ready evolves your calendar into a living <br/>, breathing multiplayer workspace for teams to <br/> instantly make your meetings better.</p>
                    <div className={'flex relative gap-[100px]'}>
                        <img className={'w-[50%] rounded-[20px] lg:h-[700px] h-[300px] object-cover overflow-hidden shadow-[0_0_30px_rgba(0,0,0,.2)]'} src={demoImage1.src} alt={'Demo of the ready app'} />
                        <div className={'bg-indigo-700 w-[50%] absolute left-[50%] top-[50%] scale-125 shadow-[0_0_30px_rgba(0,0,0,.2)] -translate-x-[50%] -translate-y-[50%] rounded-[20px] h-full'} />
                        <img className={'w-[50%] rounded-[20px] lg:h-[700px] h-[300px] object-cover overflow-hidden shadow-[0_0_30px_rgba(0,0,0,.2)]'} src={demoImage2.src} alt={'Demo of the ready app'} />
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}