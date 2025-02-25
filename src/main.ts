import prompts from 'prompts'
import { removeSpace, variableInInput } from './helper/lib';
import { match } from 'assert';
import { isFormatAccepted } from './helper/validator';


/**
 * &  = ET
 * |  = OU
 * ~  = NON
 * => = IMPLIQUE
 *  
 */
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

        if (!isFormatAccepted(input)){
            console.log("- not accepted");
        } else {
            console.log("+ ok");   
        }
    } while (input != 'stop');

}

index()








