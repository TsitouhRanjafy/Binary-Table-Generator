import { binaryIteration } from "./lib";
import { Binary, binary } from "./model";


export const generateInitBinaryTable = (variable: string[]): binary[][] => {
    let table: binary[][] = []
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

export const generateTable = (dimension: number): binary[] => {
    if (dimension <= 0){
        return []
    }
    let array: binary[] = []
    for (let i = 0; i < dimension;i++){
        array.push(Binary(0))
    }
    return array
}




