import {calculate} from "./calculate";
import chai from "chai";

chai.config.truncateThreshold = 0;
const expect = chai.expect;

function pressButtons(buttons){
    const value = {};
    buttons.forEach(button => {
        Object.assign(value, calculate(value, button));
    });

    Object.keys(value).forEach(key => {
        if(value[key] === null){
            delete value[key];
        }
    });
    return value;
}

function expectButtons(buttons, expectation){
    expect(pressButtons(buttons)).to.deep.equal(expectation);
}

function test(buttons, expectation, only = false){
    const func = only ? it.only : it;

    func(`button ${buttons.join(',')} -> ${JSON.stringify(expectation)}`, () => {
        expectButtons(buttons, expectation);
    });
}

describe("calculate", function(){
    test(["6"], { next: "6" });

    test(["6", "+", "5"], { next: "5", total: "6", operation: "+" });

    test(["6", "+", "6", "="], {
        total: "12",
    });
    
    test(["0", "0", "+", "0", "="], {
        total: "0",
    });
    
    test(["6", "+", "6", "=", "9"], {
        next: "9",
    });
    
    test(["3", "+", "6", "=", "+"], {
        total: "9",
        operation: "+",
    });
    
});