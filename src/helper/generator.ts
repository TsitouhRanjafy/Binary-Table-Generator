import { binaryIteration } from "./lib";


export const generateInitBinaryTable = (variable: string[]): Array<Array<any>> => {
    let table: Array<Array<any>> = []
    for (let i = 0; i < variable.length; i++){
        table.push(generateTable(Math.pow(2,variable.length)))
    }

    for (let i = 1;i < Math.pow(2,variable.length);i++){
        for (let j = i; j < Math.pow(2,variable.length);j++){
            binaryIteration(table,0,j)
        }
    }
    
    return table
}

export const generateTable = (dimension: number): Array<Array<number>> => {
    if (dimension <= 0){
        return []
    }
    let array: Array<Array<number>> = []
    for (let i = 0; i < dimension;i++){
        array.push([0])
    }
    return array
}




