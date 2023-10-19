// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import HolderComponent from "@/chunk/holderComponent";
import {walsheimFont} from "@/app/font";
import travelImage from '@/public/img/section/fourthSection/img-travel.webp';
import threadsImage from '@/public/img/section/fourthSection/img-threads.webp';
import tasksImage from '@/public/img/section/fourthSection/img-tasks.webp';
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting fourth section of home page as default
export default function ForthSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className={'mt-[50px]'}>
        <main>
            <HolderComponent>
                <h1 className={`sm:text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>Leave <span>every</span> meeting <br/> feeling Ready</h1>
                <p className={'sm:text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Never lose track of a decision or forget a follow up. Ready <br/> keeps you and your team organized before, during, andkeeps you and your team organized before, during, and <br/> after every meeting.</p>
                <div>
                    <div>
                        <div className={'p-[30px] rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                            <div>
                                <span className={'block text-[20px] mb-[10px] text-white'}>Time Travel</span>
                                <span className={'block text-[18px] text-white'}>Ready connects your meetings together. Jump back in time to see what was discussed or leap forward to get a head start.</span>
                            </div>
                            <img className={'w-full'} src={travelImage.src} alt="Time Travel"/>
                        </div>
                        <div>
                            <div><IconComponent name={'threeLines'} size={50} /></div>
                            <div className={'p-[30px] rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                                <div>
                                    <span className={'block text-[20px] mb-[10px] text-white'}>Threads</span>
                                    <span className={'block text-[18px] text-white'}>Ready organizes everything for you in Threads, never worry about folders again.</span>
                                </div>
                                <img className={'w-full'} src={threadsImage.src} alt="Threads"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><IconComponent name={'threeLines'} size={50} /></div>
                        <div className={'p-[30px] rounded-[20px] overflow-hidden gap-[20px] bg-cover flex flex-col justify-between'}>
                            <div>
                                <span className={'block text-[20px] mb-[10px] text-white'}>Task Sidebar</span>
                                <span className={'block text-[18px] text-white'}>See all your tasks and action items from across your meetings in one place, right alongside your calendar.</span>
                            </div>
                            <img className={'w-full'} src={tasksImage.src} alt="Task Sidebar"/>
                        </div>
                        <div><IconComponent name={'threeLines'} size={50} /></div>
                    </div>
                </div>
            </HolderComponent>
        </main>
    </section>
  );
}
