export const removeSpace = (text: string): string => {
    text = text.trim();
    let temp = text[0]
    for (let i = 1;i < text.length;i++){
        if (text[i] != ' ' ){
            temp += text[i]
        }
    }
    return temp
}

export  const extractVariable = (input: string): string[] => {
    let temp = []
    for  (let i of input){
        if ((i != '&') && (i != '|') && (i != '~') && (i != '=') && (i != '(') && (i != ')' && (i != '>') && (i != '<'))){
            temp.push(i)
        }
    }
    return removeDuplicateInArray(temp)
}

export const removeDuplicateInArray = (textArray: string[]): string[] => {
    let array: string[] = []
    for (let i of textArray){
        if (!array.includes(i)){
            array.push(i)
        }
    }
    return array
}

export const consolePerso = (tables: Array<Array<any>>,variable: Array<string>) => {
    let temp: Object[] = []

    if (variable.length != tables.length) {
        console.error(' Error On Console Perso')
        return;
    }

    for (let colonnne = 0;colonnne < tables[0].length;colonnne++){
        let jsonString = '{'
        for (let ligne = (variable.length-1) ;ligne >= 0;ligne--){
            
            jsonString += `"${variable[ligne]}": ${tables[ligne][colonnne]}`;

            (ligne == 0)? jsonString += '}':jsonString+=',';
            
            
        }
        
        temp.push(JSON.parse(jsonString))
        
    }
    console.table(temp)
}

export const binaryIteration = (table: Array<Array<number>>,ligne: number,colonne: number,up: boolean = true) => {

    if (up) table[ligne][colonne] = (table[ligne][colonne] + 1) % 2;
    
    ((table[ligne][colonne] != 1) && up)? up = true: up = false;
    
    if (ligne < (table.length - 1)) binaryIteration(table,ligne+1,colonne,up)
}




