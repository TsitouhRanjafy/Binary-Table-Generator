import { Binary, binary } from "./model"

export class BinaryOperations {
    
    public static ET(array1: binary[],array2: binary[]): binary[] {
        let temp: binary[] = []
        for (let i = 0;i < array1.length;i++){
            temp.push(Binary(array1[i] & array2[i]))
        }
        return temp
    }

    public static OR(array1: binary[],array2: binary[]): binary[] {
        let temp: binary[] = []
        for (let i = 0;i < array1.length;i++){
            temp.push(Binary(array1[i] | array2[i]))
        }
        return temp
    }

    public static XOR(array1: binary[],array2: binary[]): binary[] {
        let temp: binary[] = []
        for (let i = 0;i < array1.length;i++){
            temp.push(Binary(array1[i] ^ array2[i]))
        }
        return temp
    }

    public static NON(array: binary[]): binary[] {
        let temp: binary[] = []
        for (let i = 0;i < array.length;i++){
            temp.push(Binary((array[i] + 1) % 2 ))
        }
        return temp
    }

    public static IMPLIQUE(array1: binary[],array2: binary[]): binary[] {
        let temp: binary[] = []
        for (let i = 0;i < array1.length;i++){
            temp.push(implique(array1[i],array2[i]))
        }
        return temp
    }

    public static EQUIVALENT(array1: binary[],array2: binary[]): binary[] {
        let temp: binary[] = []
        if (array1.length != array2.length) {
            console.error("- INTERNAL ERROR: equivalent fonction error");
            return temp;
        }
        for (let i = 0;i < array1.length;i++){
            temp.push(equivalent(array1[i],array2[i]))
        }
        return temp
    }
}


function implique(a: binary,b: binary): binary {
    if (a > b) return 0;
    return 1;
}

function equivalent(a: binary,b: binary): binary {
    return (a == b)? 1 : 0 
}






