// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Image from 'next/image';
import demoImage1 from '@/public/img/section/firstSection/img-demo-1.webp';
import demoImage2 from '@/public/img/section/firstSection/img-demo-2.webp';

// Creating and exporting first section component as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <h4>YOUR NEW CALENDAR</h4>
                <h1>
                    <span>The calendar</span>
                    <div>
                        <span>you need to meet</span>
                        <div>
                            <div />
                            <div><div>Febby</div></div>
                        </div>
                    </div>
                </h1>
                <p>Ready evolves your calendar into a living <br/>, breathing multiplayer workspace for teams to <br/> instantly make your meetings better.</p>
                <div>
                    <Image src={demoImage1.src} alt={'Demo of the ready app'} width={100} height={100} />
                    <div/>
                    <Image src={demoImage2.src} alt={'Demo of the ready app'} width={100} height={100} />
                </div>
            </main>
        </section>
    );
}