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

        /********************* CLI ************************/

        const response: {
            value: string
        } = await prompts({
            type: 'text',
            name: 'value',
            message: 'Entrer expression',
        })

        /********************* INPUT VERIFICATION ***************************/

        var input: string = removeSpace(response.value) 
        input = '('+input+')'.toLowerCase()
        console.log("\n\n expression: ",input); 
        if (!isParantheseNumberEqual(input)){
            console.error("\n - not accepted: verifier les paranthèses \n");
            return;
        } 

        /********************** INIT *************************/

        let variable = extractVariable(input)
        let binaryIinit = generateInitBinaryTable(variable);
        for (let i = (binaryIinit.length - 1); i >= 0; i--){
            table.addValue(variable[variable.length - i - 1],binaryIinit[i])
        }
        input = formatLogicalExpression(input)

        /*********************** OPERATION ********************/

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
            
        } while (input.length != 1);

        /************************** RESULT ******************************/

        consoleBinaryTable(binaryIinit,[...variable].reverse()); 

        let iterator = pseudoVariable.entries();
        let result = iterator.next();
        console.log("\n pseudo:");
        
        while (!result.done) {
            console.log("\t",result.value[0] ,' = ',result.value[1]);
            result = iterator.next();
        }

        console.log("\n");
        
        /************************** REINITIALISE ******************************/

        pseudoVariable.clear()
        pseuDoVarDisponible = ['A','B','C','D','E','F','J','K','L','M','N','P','Q','R','S','T','U','W','X','Y','Z']

    } while (input != '');

}

index();


// (p => q) <=> (~p => ~q)
// p => q <=> ~p => ~q

// 



