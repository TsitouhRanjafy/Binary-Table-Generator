import prompts from 'prompts'
import { removeSpace, extractVariable, consoleBinaryTable, extractByParenthese } from './helper/lib';
import { isParantheseNumberEqual, extractOperation } from './helper/validator';
import { generateInitBinaryTable } from './helper/generator';
import { binary, operation } from './helper/model';



/**
 * &   = ET
 * |   = OU
 * ~   = NON
 * =>  = IMPLIQUE
 * <=> = EQUIVALENT
 *  
 * ((r & p) | r) <=> ((r <=> p) & p | (o & ~p))
 * 
 */


var table: binary[][] = []
var variable: string[] = []
var pseudoVar: object[] = []
var pseudoDispo = ['F','P','R','Q','X','Y']  



export const mainOperation = (operation: operation) => {
    console.log("\n\n\n\t -operation-",operation.operator);
    console.log(table[variable.indexOf(operation.variable1)]);
    console.log(table[variable.indexOf(operation.variable2)]);
}








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
        input = '('+input+')'.toLowerCase()
        console.log("\n\n expression: ",input);
        
        // verifie the form of expression 
        if (!isParantheseNumberEqual(input)){
            console.error("\n - not accepted: verifier les paranthèses \n");
            break;
        } 

        // init binary variable and binary table
        variable = extractVariable(input).reverse()
        const temp = [...variable] 

        
        // print
        console.log("[dev] variable: ",variable, ",n: ",variable.length); // for dev
        console.log(" variable: ",temp.reverse(), ",n: ",variable.length);
        console.log("[dev]"); // for dev
        table = generateInitBinaryTable(variable) 
        console.table(table) // for dev
        consoleBinaryTable(table,variable)


        
        // extract the first operation 
        const operations: operation[] | void = extractOperation(extractByParenthese(input)); 
        if (!operations){
            console.error(' Error of expression');
            break;
        }
        console.log(operations);
        
        console.log(input);
        // check if operation NON
        // mije à jour variable
        // fait l'operation
        
        for (const operation of operations){
            mainOperation(operation)
        }
        // mije à jour table, input (expression), variable

        // extract the first operation
        // fait l'operation
        // mije à jour table et input (expression)
        
        

        
    } while (input != '(stop)');

}

index()









