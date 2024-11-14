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
})

