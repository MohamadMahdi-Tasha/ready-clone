// Codes by mahdi tasha
// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";

// Defining type of props
interface propsType {
    img: string;
}

// Creating and exporting header profile component as default
export default function HeaderProfileComponent({img}:propsType):ReactNode {
    // Defining state of component
    const [isClicked, setClicked]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className={'-ml-[10px] relative'} onClick={() => setClicked(true)}>
            <img className={'w-[30px] rounded-full object-cover aspect-square h-[30px]'} src={img} alt="Profile Image"/>
            <div onAnimationEnd={() => setClicked(false)}
                 data-showing={isClicked} className={'absolute w-full h-full top-0 left-0 header-profile-animation z-[50]'}>
                <div className={'absolute top-0 left-[20px] bg-indigo-500 w-[2px] h-[10px] rounded-[20rem] -rotate-45'} />
                <div className={'absolute top-0 left-0 bg-indigo-500 w-[2px] h-[5px] rounded-[20rem] -rotate-[70deg]'} />
                <div className={'absolute top-[10px] right-[20px] bg-indigo-500 w-[2px] h-[10px] rounded-[20rem] rotate-45'} />
                <div className={'absolute top-[10px] right-0 bg-indigo-500 w-[2px] h-[5px] rounded-[20rem] rotate-[70deg]'} />
                <div className={'absolute bottom-0 left-0 bg-indigo-500 w-[2px] h-[10px] rounded-[20rem] rotate-2'} />
                <div className={'absolute bottom-0 right-[5px] bg-indigo-500 w-[2px] h-[10px] rounded-[20rem] rotate-45'} />
            </div>
        </div>
    );
}