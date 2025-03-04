import prompts from 'prompts'
import { removeSpace, extractVariable, consoleBinaryTable, extractByParenthese, Dictionnaire, remplaceTo, formatLogicalExpression } from './helper/lib';
import { isParantheseNumberEqual, extractOperation } from './helper/validator';
import { generateInitBinaryTable } from './helper/generator';
import { binary, operation } from './helper/model';
import { mainOperation } from './helper/operation';



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


var table = new Dictionnaire();
var pseudoVariable = new Dictionnaire();
var pseuDoVarDisponible = ['A','B','C','D','E','F','J','K','L','M']

const index = async (): Promise<void> => {
    
    
    
    do{
        const response: {
            value: string
        } = await prompts({
            type: 'text',
            name: 'value',
            message: 'Entrer expression',
        })
        var input: string = removeSpace(response.value) 
        input = '('+input+')'.toLowerCase()


        console.log("\n\n expression: ",input);
        
        // // verifie the form of expression 
        if (!isParantheseNumberEqual(input)){
            console.error("\n - not accepted: verifier les paranthèses \n");
            return;
        } 

        // // init binary variable and binary table
        let variable = extractVariable(input)
        let binaryIinit = generateInitBinaryTable(variable);
        for (let i = (binaryIinit.length - 1); i >= 0; i--){
            table.addValue(variable[variable.length - i - 1],binaryIinit[i])
        }
        // console.log(binaryIinit);
        // consoleBinaryTable(binaryIinit,[...variable].reverse())

        
        // extract the first operation 
        let operations: operation[] | void = extractOperation(extractByParenthese(input)); 
        // console.log(operations);
        if (!operations){
            console.log(" - expression not accepted");
            return;
        }

        binaryIinit = mainOperation(operations,table,variable,binaryIinit)
        consoleBinaryTable(binaryIinit,[...variable].reverse())
        
        
        /** ************************************** */
        // for (const i of extractByParenthese(input)){
        //     let pseudo = pseuDoVarDisponible.splice(pseuDoVarDisponible.length-1,pseuDoVarDisponible.length)[0]
        //     input = remplaceTo(input,i.value,pseudo)
        //     pseudoVariable.addValue(pseudo,i.value)
        // }
        // input = formatLogicalExpression(input)
        // console.log(pseudoVariable);
        // console.log(input);
        
        
        // variable = extractVariable(input)
        // console.log(variable);
        // operations = extractOperation(extractByParenthese(input))
        // console.log(operations);
        

        
    } while (input != '(stop)');

}

index()









