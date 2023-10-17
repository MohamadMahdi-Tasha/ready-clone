// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting holder component as default
export default function HolderComponent({children}:propsType):ReactNode {
    // Returning JSX
    return <div>{children}</div>
}