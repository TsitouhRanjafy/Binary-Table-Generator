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
        
        if (!v1) {
            var1 = pseudoVar.getValue(operation.variable1).trim()
            v1 = table.getValue(var1.trim());
        }
        if (!v2){
            var2 = pseudoVar.getValue(operation.variable2).trim()
            v2 = table.getValue(var2);
        }
        
        switch (operation.operator) {
            case '&':
                table.addValue(
                    ("("+var1+operation.operator+var2+")"),
                    BinaryOperations.ET(v1,v2)
                ) 
                variable.push("("+var1+operation.operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operation.operator+var2+")"))],...binaireTable] 
                break;
            case '|':
                table.addValue(
                    ("("+var1+operation.operator+var2+")"),
                    BinaryOperations.OR(v1,v2)
                ) 
                variable.push("("+var1+operation.operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operation.operator+var2+")"))],...binaireTable] 
                break;
            case '=>':
                table.addValue(
                    ("("+var1+operation.operator+var2+")"),
                    BinaryOperations.IMPLIQUE(v1,v2)
                ) 
                variable.push("("+var1+operation.operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operation.operator+var2+")"))],...binaireTable] 
                break;
            case '<=>':
                table.addValue(
                    ("("+var1+operation.operator+var2+")"),
                    BinaryOperations.EQUIVALENT(v1,v2)
                ) 
                variable.push("("+var1+operation.operator+var2+")")
                binaireTable = [...[table.getValue(("("+var1+operation.operator+var2+")"))],...binaireTable] 
                break;
            default:
                console.log(" - Erro of operator");
                break;
        }
    }
    return binaireTable;
    
    
}