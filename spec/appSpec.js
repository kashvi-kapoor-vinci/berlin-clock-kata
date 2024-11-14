import {Main} from '../src/app.js';

describe("Berlin clock kata project", function() {
    let main = new Main();
    
    // --------------------  STEP 1 : Single Minute  --------------------

    it("BerlinClock should return 0000 when given 0", function() {
        const result = main.getSimpleMinute("0");
        expect(result).toBe("0000");
    });

    it("BerlinClock should return Y000 when given 1", function() {
        const result = main.getSimpleMinute("1");
        expect(result).toBe("Y000");
    });

    it("BerlinClock should return YY00 when given 2", function() {
        const result = main.getSimpleMinute("2");
        expect(result).toBe("YY00");
    });

    it("BerlinClock should return YYY0 when given 3", function() {
        const result = main.getSimpleMinute("3");
        expect(result).toBe("YYY0");
    });

    it("BerlinClock should return YYYY when given 4", function() {
        const result = main.getSimpleMinute("4");
        expect(result).toBe("YYYY");
    });

    // --------------------  STEP 2 : Five Minutes Block  --------------------

    it("BerlinClock should return Y0000000000 when given 5", function() {
        const result = main.getFiveMinutes("5");
        expect(result).toBe("Y0000000000");
    });

    it("BerlinClock should return YYR00000000 when given 15", function() {
        const result = main.getFiveMinutes("15");
        expect(result).toBe("YYR00000000");
    });

    it("BerlinClock should return YYRYYR00000 when given 30", function() {
        const result = main.getFiveMinutes("30");
        expect(result).toBe("YYRYYR00000");
    });

    it("BerlinClock should return YYRYYRYY000 when given 40", function() {
        const result = main.getFiveMinutes("40");
        expect(result).toBe("YYRYYRYY000");
    });

    
});

