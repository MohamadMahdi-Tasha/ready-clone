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
                <HolderComponent>
                    <h1 className={`lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>Meetings just <br/> got an <span>got an upgrade</span></h1>
                    <p className={'text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Templates, tasks, and meeting tools make it effortless to <br/> supercharge your meetings.</p>
                    <div>
                        <div>
                            <div><IconComponent name={'threeLines'} size={30} /></div>
                            <div>
                                <span>Automated Templates</span>
                                <span>Templates allow you to recreate the perfect meeting in 1-click. And Templates can be added automatically to your weekly meetings, making it No-Click™️.</span>
                                <img src={automatedImage.src} alt="Automated Templates"/>
                            </div>
                            <div>
                                <div>
                                    <span>Smart Tasks</span>
                                    <span>Jot down tasks and assign action items in your meetings. Ready then automatically organizes them for you and your team.</span>
                                    <img src={tasksImage.src} alt="Automated Templates"/>
                                </div>
                                <div><span><IconComponent name={'threeLines'} size={30} /></span></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Powerful Tools</span>
                                <span>Meeting spaces come loaded with a growing kit of meeting tools that power-up your meetings in a few clicks.</span>
                                <img src={toolsImage.src} alt="Automated Templates"/>
                            </div>
                            <div><span><IconComponent name={'threeLines'} size={30} /></span></div>
                        </div>
                    </div>
                </HolderComponent>
            </main>
        </section>
    );
}