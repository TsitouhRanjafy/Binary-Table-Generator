import prompts from 'prompts'
import { removeSpace, extractVariable, consoleBinaryTable, extractByParenthese, Dictionnaire, remplaceTo, formatLogicalExpression, DictionnaireString } from './helper/lib';
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
var pseudoVariable = new DictionnaireString();
var pseuDoVarDisponible = ['A','B','C','D','E','F','J','K','L','M','N','P','Q','R','S','T','U','W','X','Y','Z'];

const index = async ()  => {
    do{
        // CLI
        const response: {
            value: string
        } = await prompts({
            type: 'text',
            name: 'value',
            message: 'Entrer expression',
        })

        // get input
        var input: string = removeSpace(response.value) 
        input = '('+input+')'.toLowerCase()
        console.log("\n\n expression: ",input);
        
        // verify the parenthesis of the expression 
        if (!isParantheseNumberEqual(input)){
            console.error("\n - not accepted: verifier les paranthèses \n");
            return;
        } 

        // init binary variable and binary table
        let variable = extractVariable(input)
        let binaryIinit = generateInitBinaryTable(variable);
        for (let i = (binaryIinit.length - 1); i >= 0; i--){
            table.addValue(variable[variable.length - i - 1],binaryIinit[i])
        }

        // the operation
        let operations: operation[] | void;
        do {
            // extract operation 
            operations = extractOperation(extractByParenthese(input)); 
            if (!operations){
                console.log(" - expression not accepted");
                return;
            }
            binaryIinit = mainOperation(operations,table,variable,binaryIinit,pseudoVariable)
            // update input
            for (const i of extractByParenthese(input)){
                let pseudo = pseuDoVarDisponible.splice(pseuDoVarDisponible.length-1,pseuDoVarDisponible.length)[0]
                input = remplaceTo(input,i.value,pseudo)
                pseudoVariable.addValue(pseudo,i.value)
            }
            input = formatLogicalExpression(input)
            console.log(input);
            
        } while (input.length != 1);

        // show binary table
        consoleBinaryTable(binaryIinit,[...variable].reverse()); 

    } while (input != '(stop)');

}

index();

// (p => q) <=> (~p => ~p)




