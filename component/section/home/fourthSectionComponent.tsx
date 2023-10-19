// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import travelImage from '@/public/img/section/fourthSection/img-travel.webp';
import threadsImage from '@/public/img/section/fourthSection/img-threads.webp';
import tasksImage from '@/public/img/section/fourthSection/img-task.webp';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting fourth section of home page as default
export default function ForthSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className={'mt-[50px]'}>
        <main>
            <HolderComponent className={'p-[20px]'}>
                <h1 className={`text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>Leave <span className={'bg-circle-line'}>every</span> meeting <br/> feeling Ready</h1>
                <p className={'text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Never lose track of a decision or forget a follow up. Ready <br/> keeps you and your team organized before, during, and <br/> after every meeting.</p>
                <div className={'lg:grid flex flex-col grid-cols-5 gap-[20px]'}>
                    <div className={'col-span-3 lg:grid flex flex-col grid-rows-4 gap-[20px]'}>
                        <div className={'row-span-2 bg-travel rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                            <div className={'p-[30px] lg:w-[75%]'}>
                                <span className={'block text-[20px] mb-[10px] text-white'}>Time Travel</span>
                                <span className={'block text-[18px] text-white'}>Ready connects your meetings together. Jump back in time to see what was discussed or leap forward to get a head start.</span>
                            </div>
                            <img className={'w-full ml-[30px]'} src={travelImage.src} alt="Time Travel"/>
                        </div>
                        <div className={'row-span-2 lg:grid flex flex-col grid-cols-3 gap-[20px]'}>
                            <div className={'col-span-1 lg:flex hidden justify-end items-start'}>
                                <span className={'rotate-[270deg]'}><IconComponent name={'threeLines'} size={50} /></span>
                            </div>
                            <div className={'bg-threads col-span-2 rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                                <div className={'p-[30px] lg:w-[75%]'}>
                                    <span className={'block text-[20px] mb-[10px] text-white'}>Threads</span>
                                    <span className={'block text-[18px] text-white'}>Ready organizes everything for you in Threads, never worry about folders again.</span>
                                </div>
                                <img className={'w-full ml-[30px]'} src={threadsImage.src} alt="Threads"/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-2 lg:grid flex flex-col grid-rows-5 gap-[20px]'}>
                        <div className={'row-span-1 lg:flex hidden justify-start items-end'}>
                            <span className={'rotate-90'}><IconComponent name={'threeLines'} size={50} /></span>
                        </div>
                        <div className={'row-span-3 bg-tasks-fourth-section rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                            <div className={'p-[30px] lg:w-[75%]'}>
                                <span className={'block text-[20px] mb-[10px] text-white'}>Task Sidebar</span>
                                <span className={'block text-[18px] text-white'}>See all your tasks and action items from across your meetings in one place, right alongside your calendar.</span>
                            </div>
                            <img className={'w-full -ml-[30px]'} src={tasksImage.src} alt="Task Sidebar"/>
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
