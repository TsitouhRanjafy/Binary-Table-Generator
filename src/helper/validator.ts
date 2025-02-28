
export const isParantheseNumberEqual = (text: string): boolean => {
    const format1 = /\(/g;
    const format2 = /\)/g;
    
    if ( (text.match(format1)?.length) != (text.match(format2)?.length)){
        return false;
    }
    return true
}

export const extractByParenthese = (text: string) => {
    const regex = /\(([a-z]|&|~|=>|\||<=>)*\)/g;    
    const result = [...text.matchAll(regex)].map(match => {
        return {
            value: match[0],
            end: match[1],
            index: match.index
        }
    })
    
    return result;
}

export const isValidExpression = (textWhiteParanthese: string) => {
    if (textWhiteParanthese.length > 9){
        return false;
    }
    return true
}


