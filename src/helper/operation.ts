import { BinaryOperations } from "./binary-operation";
import { Dictionnaire, DictionnaireString } from "./lib";
import { binary, operation } from "./model";

export const mainOperation = (operations: operation[],table: Dictionnaire,variable: string[],binaireTable: binary[][],pseudoVar: DictionnaireString): binary[][] => {
    for (const operation of operations){
        if (!table.hasKey(operation.variable1) && !pseudoVar.hasKey(operation.variable1)){
            table.addValue(operation.variable1,BinaryOperations.NON(table.getValue(operation.variable1[1])))
            variable.push(operation.variable1)
            binaireTable = [...[table.getValue(operation.variable1)],...binaireTable]  
        }
        if (!table.hasKey(operation.variable2) && !pseudoVar.hasKey(operation.variable2)){
            table.addValue(operation.variable2,BinaryOperations.NON(table.getValue(operation.variable2[1])))
            variable.push(operation.variable2)
            binaireTable = [...[table.getValue(operation.variable2)],...binaireTable]
        }
        let v1 = table.getValue(operation.variable1);
        let v2 = table.getValue(operation.variable2)
        let var1 = operation.variable1;
        let var2 = operation.variable2;
        let operator = operation.operator
        
        if (!v1) v1 = table.getValue(pseudoVar.getValue(operation.variable1).trim());
        if (!v2) v2 = table.getValue(pseudoVar.getValue(operation.variable2).trim());
        if (var1 == var2) { 
            var2 = '' 
            operator = ''
        };
        
        switch (operation.operator) {
            case '&':
                table.addValue(
                    ("("+var1+operator+var2+")"),
                    BinaryOperations.ET(v1,v2)
                ) 
                variable.push("("+var1+operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operator+var2+")"))],...binaireTable] 
                break;
            case '|':
                table.addValue(
                    ("("+var1+operator+var2+")"),
                    BinaryOperations.OR(v1,v2)
                ) 
                variable.push("("+var1+operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operator+var2+")"))],...binaireTable] 
                break;
            case '=>':
                table.addValue(
                    ("("+var1+operator+var2+")"),
                    BinaryOperations.IMPLIQUE(v1,v2)
                ) 
                variable.push("("+var1+operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operator+var2+")"))],...binaireTable] 
                break;
            case '<=>':                
                table.addValue(
                    ("("+var1+operator+var2+")"),
                    BinaryOperations.EQUIVALENT(v1,v2)
                ) 
                variable.push("("+var1+operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operator+var2+")"))],...binaireTable] 
                break;
            default:
                console.log(" - Erro of operator");
                break;
        }
    }
    return binaireTable;
    
    
}