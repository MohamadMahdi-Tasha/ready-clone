// Codes by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import HolderComponent from '@/chunk/holderComponent';
import {walsheimFont} from '@/app/font';
import travelImage from '@/public/img/section/fourthSection/img-travel.webp';
import threadsImage from '@/public/img/section/fourthSection/img-threads.webp'
import taskImage from '@/public/img/section/fourthSection/img-task.webp'
import IconComponent from '@/chunk/iconComponent';

// Creating and exporting fourth section of home page as default
export default function ForthSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section>
      <main>
        <HolderComponent>
          <h1 className={`sm:text-center lg:text-[50px] text-[40px] text-gray-800 font-bold lg:leading-[60px] leading-[40px] mb-[30px] ${walsheimFont.className}`}>
            Leave <span>feeling Ready</span> meeting <br/>
            feeling Ready
          </h1>
          <p className={'sm:text-center text-gray-800 text-[18px] font-normal lg:mb-[120px] mb-[80px]'}>Never lose track of a decision or forget a follow up. Ready <br/> keeps you and your team organized before, during, and <br/> after every meeting.</p>
          <div>
            <div>
              <span>Time Travel</span>
              <span>Ready connects your meetings together. Jump back in time to see what was discussed or leap forward to get a head start.</span>
              <img src={travelImage.src} alt={'Time Travel'} />
            </div>
            <div>
              <div>
                <iconComponent name={"threeLines"} size={50} />
              </div>
              <div>
                <span>Threads</span>
                <span>Ready organizes everything for you in Threads, never worry about folders again.</span>
                <img src={threadsImage.src} alt={'Threads'} />
              </div>
            </div>
          </div>
          <div>
              <div>
                <iconComponent name={"threeLines"} size={50} />
              </div>
              <div>
                <span>Task Sidebar</span>
                <span></span>
                <img src={threadsImage.src} alt={'Task Sidebar'} />
              </div>
              <div>
                <iconComponent name={"threeLines"} size={50} />
              </div>
          </div>
        </HolderComponent>
      </main>
    </section>
  );
}
