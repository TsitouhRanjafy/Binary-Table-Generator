import { log } from "console";

export const isFormatAccepted = (text: string): boolean => {
    const format1 = /\(/g;
    const format2 = /\)/g;
    
    if ( (text.match(format1)?.length) != (text.match(format2)?.length)){
        return false;
    }
    return true
}