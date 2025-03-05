import { binary, expression } from "./model";

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

export const consoleBinaryTable = (tables: Array<Array<any>>,variable: Array<string>):void => {
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

export const binaryIteration = (table: Array<Array<number>>,ligne: number,colonne: number,up: boolean = true): void => {

    if (up) table[ligne][colonne] = (table[ligne][colonne] + 1) % 2;
    
    ((table[ligne][colonne] != 1) && up)? up = true: up = false;
    
    if (ligne < (table.length - 1)) binaryIteration(table,ligne+1,colonne,up)
}

export const extractByParenthese = (text: string): expression[] => {
    const regex = /\(([a-z]|&|~|=>|\||<=>|[A-Z])*\)/g;    
    const result: expression[] = [...text.matchAll(regex)].map(match => {
        return {
            value: match[0],
            end: match[1],
            index: match.index
        }
    })
    
    return result;
}

export const sliceString = (text: string,debut: number,fin: number = text.length): string => {
    let str = ''
    for (let i = debut; i < fin; i++){
        str += text[i]
    }
    return str;
}


export class Dictionnaire {
    private map = new Map();
    private set = new Set();

    public addValue (key: string,value: binary[] | string): void {
        this.map.set(key,value);
        this.set.add(value);
    }

    public getValue(key: string): binary[] {
        return this.map.get(key)
    }

    public hasValue(value: binary[] | string): boolean {
        return (this.set.has(value))? true : false;
    }

    public hasKey(key: string): boolean {
        return (this.map.has(key))? true : false;
    }
}

export class DictionnaireString {
    private map = new Map();
    private set = new Set();

    public addValue (key: string,value: string): void {
        this.map.set(key,value);
        this.set.add(value);
    }

    public getValue(key: string): string {
        return this.map.get(key)
    }

    public entries(){
        return this.map.entries();
    }

    public hasValue(value: string): boolean {
        return (this.set.has(value))? true : false;
    }

    public hasKey(key: string): boolean {
        return (this.map.has(key))? true : false;
    }
    public clear(): void{
        this.set.clear();
        this.map.clear();    
    }
}


export const remplaceTo = (str: string,original:string,input: string): string => {
    const remplace = (str: string,start: number = 0,end: number,input: string): string => {
        
        if (end == -1) end = str.length;
    
        let temp = ''
        for (let i = 0;i < start;i++){
            temp += str[i]
        }
        temp += input
        for (let i = end; i < str.length; i ++){
            temp += str[i]
        }
    
        return temp;
    
    }
    
    let start = str.indexOf(original)
    let end = original.length;

    return remplace(str,start,start+end,input);
}

export const formatLogicalExpression = (expression: string): string => {
    // Fonction pour ajouter des parenthèses autour des opérateurs & et |
    function addParentheses(match: string, p1: string, p2: string, p3: string): string {
      return `(${p1}${p2}${p3})`;
    }
  
    // Remplacer les expressions avec & et | combinés avec d'autres opérateurs
    let formattedExpression = expression;
    formattedExpression = formattedExpression.replace(/([A-Za-z~()]+)([\|&])([A-Za-z~()]+)/g, addParentheses);
    if (formattedExpression != expression) return formattedExpression;
    formattedExpression = formattedExpression.replace(/([A-Za-z~()]+)(=>)([A-Za-z~()]+)/g, addParentheses);
    if (formattedExpression != expression) return formattedExpression;
    formattedExpression = formattedExpression.replace(/([A-Za-z~()]+)(<=>)([A-Za-z~()]+)/g, addParentheses);
    return formattedExpression;
}
