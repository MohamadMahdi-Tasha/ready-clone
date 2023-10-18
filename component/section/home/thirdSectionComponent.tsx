// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import IconComponent from "@/chunk/iconComponent";
import automatedImage from '@/public/img/section/thirdSection/img-automated.webp';
import tasksImage from '@/public/img/section/thirdSection/img-tasks.webp';
import toolsImage from '@/public/img/section/thirdSection/img-tools.webp';

// Creating and exporting third section of home page as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mt-[50px]'}>
            <main>
                <HolderComponent className={'p-[20px]'}>
                    <h1 className={`lg:text-[50px] lg:text-start text-center text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>Meetings just <br/> got an got an <span className={'bg-line-underline bg-contain bg-no-repeat'}>upgrade</span></h1>
                    <p className={'text-gray-800 lg:text-start text-center text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Templates, tasks, and meeting tools make it effortless to <br/> supercharge your meetings.</p>
                    <div className={'lg:grid flex flex-col grid-cols-3 gap-[20px]'}>
                        <div className={'col-span-2 gap-[20px] lg:grid flex flex-col grid-rows-6'}>
                            <div className={'row-span-1 flex lg:justify-end items-end'}><IconComponent name={'threeLines'} size={50} /></div>
                            <div className={'row-span-3 bg-features rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                                <div className={'p-[30px] lg:w-[75%]'}>
                                    <span className={'block text-[20px] mb-[10px] text-white'}>Automated Templates</span>
                                    <span className={'block text-[18px] text-white'}>Templates allow you to recreate the perfect meeting in 1-click. And Templates can be added automatically to your weekly meetings, making it No-Click™️.</span>
                                </div>
                                <div className={'px-[30px]'}>
                                    <img className={'w-full'} src={automatedImage.src} alt="Automated Templates"/>
                                </div>
                            </div>
                            <div className={'row-span-2 lg:grid flex flex-col-reverse grid-cols-4 gap-[20px]'}>
                                <div className={'col-span-1 flex lg:justify-end items-start'}>
                                    <span className={'rotate-[270deg] block'}><IconComponent name={'threeLines'} size={50} /></span>
                                </div>
                                <div className={'col-span-3 bg-tasks rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                                    <div className={'p-[30px] lg:w-[75%]'}>
                                        <span className={'block text-[20px] mb-[10px] text-white'}>Smart Tasks</span>
                                        <span className={'block text-[18px] text-white'}>Jot down tasks and assign action items in your meetings. Ready then automatically organizes them for you and your team.</span>
                                    </div>
                                    <div className={'px-[30px]'}>
                                        <img className={'w-full'} src={tasksImage.src} alt="Automated Templates"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'lg:grid hidden flex-col grid-rows-4 gap-[20px]'}>
                            <div className={'row-span-3 p-[30px] bg-tools rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                                <div>
                                    <span className={'block text-[20px] mb-[10px] text-white'}>Powerful Tools</span>
                                    <span className={'block text-[18px] text-white'}>Meeting spaces come loaded with a growing kit of meeting tools that power-up your meetings in a few clicks.</span>
                                </div>
                                <img className={'w-full'} src={toolsImage.src} alt="Automated Templates"/>
                            </div>
                            <div className={'row-span-1 flex justify-start items-start'}>
                                <span className={'rotate-180'}><IconComponent name={'threeLines'} size={50} /></span>
                            </div>
                        </div>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}