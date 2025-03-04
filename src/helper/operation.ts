import { BinaryOperations } from "./binary-operation";
import { Dictionnaire } from "./lib";
import { binary, operation } from "./model";

export const mainOperation = (operations: operation[],table: Dictionnaire,variable: string[],binaireTable: binary[][]): binary[][] => {
    for (const operation of operations){
        if (!table.hasKey(operation.variable1)){
            table.addValue(operation.variable1,BinaryOperations.NON(table.getValue(operation.variable1[1])))
            variable.push(operation.variable1)
            binaireTable = [...[table.getValue(operation.variable1)],...binaireTable]  
        }
        if (!table.hasKey(operation.variable2)){
            table.addValue(operation.variable2,BinaryOperations.NON(table.getValue(operation.variable2[1])))
            variable.push(operation.variable2)
            binaireTable = [...[table.getValue(operation.variable2)],...binaireTable]
        }
        switch (operation.operator) {
            case '&':
                table.addValue(
                    (operation.variable1+operation.operator+operation.variable2),
                    BinaryOperations.ET(table.getValue(operation.variable1),table.getValue(operation.variable2))
                ) 
                variable.push(operation.variable1+operation.operator+operation.variable2)
                binaireTable = [...[table.getValue((operation.variable1+operation.operator+operation.variable2))],...binaireTable] 
                break;
            case '|':
                table.addValue(
                    (operation.variable1+operation.operator+operation.variable2),
                    BinaryOperations.OR(table.getValue(operation.variable1),table.getValue(operation.variable2))
                ) 
                variable.push(operation.variable1+operation.operator+operation.variable2)
                binaireTable = [...[table.getValue((operation.variable1+operation.operator+operation.variable2))],...binaireTable] 
                break;
            case '=>':
                table.addValue(
                    (operation.variable1+operation.operator+operation.variable2),
                    BinaryOperations.IMPLIQUE(table.getValue(operation.variable1),table.getValue(operation.variable2))
                ) 
                variable.push(operation.variable1+operation.operator+operation.variable2)
                binaireTable = [...[table.getValue((operation.variable1+operation.operator+operation.variable2))],...binaireTable] 
                break;
            case '<=>':
                table.addValue(
                    (operation.variable1+operation.operator+operation.variable2),
                    BinaryOperations.EQUIVALENT(table.getValue(operation.variable1),table.getValue(operation.variable2))
                ) 
                variable.push(operation.variable1+operation.operator+operation.variable2)
                binaireTable = [...[table.getValue((operation.variable1+operation.operator+operation.variable2))],...binaireTable] 
                break;
            default:
                console.log(" - Erro of operator");
                break;
        }
    }
    return binaireTable;
    
    
}