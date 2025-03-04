import { sliceString } from "./lib";
import { expression, operation } from "./model";

export const isParantheseNumberEqual = (text: string): boolean => {
    const format1 = /\(/g;
    const format2 = /\)/g;
    
    if ( (text.match(format1)?.length) != (text.match(format2)?.length)){
        return false;
    }
    return true
}


export const extractOperation = (expressions: expression[]): operation[] | void => {
    let tableOperations: operation[] = []
    
    for (const expression of expressions){
        let temp: operation | void = extractValidExpression(expression.value)
        if (!temp) return;
        tableOperations.push(temp);
    }
    return tableOperations
}

const extractValidExpression = (expression: string): operation | void => {
    if (expression.length > 9) return;

    const regexp = new RegExp("[& | => <=>]+","g")

    const array = expression.split(regexp)
    
    
    let result: operation;
    if (array.length >= 2){
        const operator: string = sliceString(expression,array[0].length,(expression.length-array[1].length))
        result = {
            variable1: sliceString(array[0],1),
            variable2: sliceString(array[1],0,array[1].length-1),
            operator: operator
        }
    } else {
        result = {
            variable1: sliceString(array[0],1,array[0].length - 1),
            variable2: sliceString(array[0],1,array[0].length - 1),
            operator: '|'
        }
    }
    
    return result
}




