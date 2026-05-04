// import sum from "./sum";
const sum = require("./sum");


describe("test for sum func", ()=>{
        test("sum of 2 and 2 is 4", ()=>{
        expect(sum(2,2)).toBe(4);
    });
        test("sum of 2 and 2 is 4", ()=>{
        expect(sum(4,2)).toBe(6);
    });
});