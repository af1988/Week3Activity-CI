"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_model_1 = require("./calculator.model");
const numeric_keys_enum_1 = require("../enums/numeric-keys.enum");
const operator_keys_enum_1 = require("../enums/operator-keys.enum");
const action_keys_enum_1 = require("../enums/action-keys.enum");
describe('CalculatorModel', () => {
    let calculator;
    beforeEach(() => {
        calculator = new calculator_model_1.CalculatorModel();
    });
    it('should contain a CalculatorModel class that implements ICalculatorModel', () => {
        expect(calculator).toBeDefined();
    });
    it('should have an empty display on init', () => {
        // Act
        const displayValue = calculator.display();
        // Assert
        expect(displayValue).toEqual('');
    });
    it('should display `1` when the `1` key is pressed', () => {
        // Act
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ONE);
        const displayValue = calculator.display();
        // Assert
        expect(displayValue).toEqual('1');
    });
    it('should display `2` when the `2` key is pressed', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.TWO);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('2');
    });
    it('should display `98` when the `9` key is pressed followed by the `8` key', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.NINE);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.EIGHT);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('98');
    });
    it('should display `13` when equals is clicked on `7 + 6`', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.SEVEN);
        calculator.pressOperatorKey(operator_keys_enum_1.OperatorKeys.PLUS);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.SIX);
        calculator.pressActionKey(action_keys_enum_1.ActionKeys.EQUALS);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('13');
    });
    it('should display `5` when equals is clicked on `15 - 10`', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ONE);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.FIVE);
        calculator.pressOperatorKey(operator_keys_enum_1.OperatorKeys.MINUS);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ONE);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ZERO);
        calculator.pressActionKey(action_keys_enum_1.ActionKeys.EQUALS);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('5');
    });
    it('should display `21` when equals is clicked on `3 * 7`', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.THREE);
        calculator.pressOperatorKey(operator_keys_enum_1.OperatorKeys.MULT);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.SEVEN);
        calculator.pressActionKey(action_keys_enum_1.ActionKeys.EQUALS);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('21');
    });
    it('should display `12` when equals is clicked on `144 / 12`', () => {
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ONE);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.FOUR);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.FOUR);
        calculator.pressOperatorKey(operator_keys_enum_1.OperatorKeys.DIV);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.ONE);
        calculator.pressNumericKey(numeric_keys_enum_1.NumericKeys.TWO);
        calculator.pressActionKey(action_keys_enum_1.ActionKeys.EQUALS);
        const displayValue = calculator.display();
        expect(displayValue).toEqual('12');
    });
});
