import {Main} from '../src/app.js';

describe("Berlin clock kata project", function() {
    let main = new Main();
    
    // --------------------  STEP 1 : Single Minute  --------------------

    it("BerlinClock should return 0000 when given 0", function() {
        expect(0).toBe("0000");
    });

    it("BerlinClock should return Y000 when given 1", function() {
        expect(1).toBe("Y000");
    });

    it("BerlinClock should return YY00 when given 2", function() {
        expect(2).toBe("YY00");
    });

    it("BerlinClock should return YYY0 when given 3", function() {
        expect(3).toBe("YYY0");
    });

    it("BerlinClock should return YYYY when given 4", function() {
        expect(4).toBe("YYYY");
    });
})

