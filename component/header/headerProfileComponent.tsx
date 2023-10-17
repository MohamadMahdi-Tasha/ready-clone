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
    // Defining states of component
    const [isClicked, setClicked]:[boolean, Dispatch<any>] = useState(false);

    // Returning JSX
    return (
        <div className={'-ml-[10px] relative'} onClick={() => setClicked((prev:boolean) => !prev)}>
            <img className={'w-[30px] rounded-full object-cover aspect-square h-[30px]'} src={img} alt="Profile Image"/>
            <div className={'absolute w-full h-full top-0 left-0 transition-all duration-500 data-[show="false"]:opacity-0 data-[show="false"]:scale-scale-[1.3] data-[show="true"]:opacity-100 data-[show="true"]:scale-[1.3]'} data-show={isClicked}>
                <div className={'absolute top-0 left-[20px] bg-indigo-500 w-[3px] h-[10px] rounded-[20rem] -rotate-45'} />
                <div className={'absolute top-0 left-0 bg-indigo-500 w-[2px] h-[5px] rounded-[20rem] -rotate-[70deg]'} />
                <div className={'absolute top-[10px] right-[20px] bg-indigo-500 w-[3px] h-[10px] rounded-[20rem] rotate-45'} />
                <div className={'absolute top-[10px] right-0 bg-indigo-500 w-[2px] h-[5px] rounded-[20rem] rotate-[70deg]'} />
                <div className={'absolute bottom-0 left-0 bg-indigo-500 w-[3px] h-[10px] rounded-[20rem] rotate-2'} />
                <div className={'absolute bottom-0 right-[5px] bg-indigo-500 w-[3px] h-[10px] rounded-[20rem] rotate-45'} />
            </div>
        </div>
    );
}