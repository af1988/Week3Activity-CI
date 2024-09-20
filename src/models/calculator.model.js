"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorModel = void 0;
const action_keys_enum_1 = require("../enums/action-keys.enum");
class CalculatorModel {
    constructor() {
        this._buffer = '';
    }
    pressNumericKey(key) {
        this._buffer += key;
    }
    pressOperatorKey(key) {
        this._buffer += key;
    }
    pressActionKey(key) {
        switch (key) {
            case action_keys_enum_1.ActionKeys.CLEAR:
                this._buffer = '';
                break;
            case action_keys_enum_1.ActionKeys.DOT:
                this._buffer += '.';
                break;
            case action_keys_enum_1.ActionKeys.EQUALS:
                // eslint-disable-next-line no-eval
                this._buffer = eval(this._buffer).toString();
                break;
            default:
                throw new Error('Invalid Action');
        }
    }
    display() {
        return this._buffer;
    }
}
exports.CalculatorModel = CalculatorModel;
