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

export  const variableInInput = (input: string): string[] => {
    let temp = []
    for  (let i of input){
        if ((i != '&') && (i != '|') && (i != '~') && (i != '=') && (i != '(') && (i != ')' && (i != '>'))) {
            temp.push(i)
        }
    }
    return temp
}

