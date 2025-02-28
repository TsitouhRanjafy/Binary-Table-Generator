import prompts from 'prompts'
import { removeSpace, extractVariable, consolePerso } from './helper/lib';
import { match } from 'assert';
import { extractByParenthese, isParantheseNumberEqual } from './helper/validator';
import { generateInitBinaryTable } from './helper/generator';



/**
 * &  = ET
 * |  = OU
 * ~  = NON
 * => = IMPLIQUE
 *  
 *((r & p) | r) <=> ((r <=> p) & p | (o & ~p))
 * 
 */

var table = []

const index = async (): Promise<void> => {
    
    
    
    do{
        const response: {
            value: string
        } = await prompts({
            type: 'text',
            name: 'value',
            message: 'Ecrire text',
        })


        var input: string = removeSpace(response.value) 
        input = '('+input+')'
        console.log("\n\n expression: ",input);
        const variable = extractVariable(input).reverse()
        console.log(" variable: ",variable, ",n: ",variable.length);

        table = generateInitBinaryTable(variable)
        console.table(table)
        consolePerso(table,variable)
        

        if (!isParantheseNumberEqual(input)){
            console.log("- expression not accepted");
        } else {
            console.log("+ ok");   
        }
        
    } while (input != '(stop)');

}

index()









