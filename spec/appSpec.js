import {Main} from '../src/app.js';

describe("Berlin clock kata project", function() {
    let main = new Main();
    
    // --------------------  STEP 1 : Simple Minute  --------------------

    it("BerlinClock should return 0000 when given 0", function() {
        const result = main.getSimpleMinute(0);
        expect(result).toBe("0000");
    });

    it("BerlinClock should return Y000 when given 1", function() {
        const result = main.getSimpleMinute(1);
        expect(result).toBe("Y000");
    });

    it("BerlinClock should return YY00 when given 2", function() {
        const result = main.getSimpleMinute(2);
        expect(result).toBe("YY00");
    });

    it("BerlinClock should return YYY0 when given 3", function() {
        const result = main.getSimpleMinute(3);
        expect(result).toBe("YYY0");
    });

    it("BerlinClock should return YYYY when given 4", function() {
        const result = main.getSimpleMinute(4);
        expect(result).toBe("YYYY");
    });

    // --------------------  STEP 2 : Five Minutes Block  --------------------

    it("BerlinClock should return Y0000000000 when given 5", function() {
        const result = main.getFiveMinutes(5);
        expect(result).toBe("Y0000000000");
    });

    it("BerlinClock should return YYR00000000 when given 15", function() {
        const result = main.getFiveMinutes(15);
        expect(result).toBe("YYR00000000");
    });

    it("BerlinClock should return YYRYYR00000 when given 30", function() {
        const result = main.getFiveMinutes(30);
        expect(result).toBe("YYRYYR00000");
    });

    it("BerlinClock should return YYRYYRYY000 when given 40", function() {
        const result = main.getFiveMinutes(40);
        expect(result).toBe("YYRYYRYY000");
    });

    // --------------------  STEP 1 and 2 : Combined tests  --------------------

    it("BerlinClock should return 0000:0000:YYR00000000:Y000 when given 00:16:00", function() {
        const result = main.berlinClock(0,16);
        expect(result).toBe("0000\n0000\nYYR00000000\nY000");
    });

    it("BerlinClock should return 0000:0000:YYRYYRY0000:YYYY when given 00:39:00", function() {
        const result = main.berlinClock(0,39);
        expect(result).toBe("0000\n0000\nYYRYYRY0000\nYYYY");
    });

    // --------------------  STEP 3 : Simple Hours  --------------------

    it("BerlinClock should return 0000 when given 0", function() {
        const result = main.getSimpleHour(0);
        expect(result).toBe("0000");
    });

    it("BerlinClock should return R000 when given 1", function() {
        const result = main.getSimpleHour(1);
        expect(result).toBe("R000");
    });

    it("BerlinClock should return RR00 when given 2", function() {
        const result = main.getSimpleHour(2);
        expect(result).toBe("RR00");
    });

    it("BerlinClock should return RRR0 when given 3", function() {
        const result = main.getSimpleHour(3);
        expect(result).toBe("RRR0");
    });

    it("BerlinClock should return RRRR when given 4", function() {
        const result = main.getSimpleHour(4);
        expect(result).toBe("RRRR");
    });

    // --------------------  STEP 1, 2 and 3 : Combined tests  --------------------

    it("BerlinClock should return 0000:RR00:YYRYY000000:Y000 when given 02:26:00", function() {
        const result = main.berlinClock(2,26);
        expect(result).toBe("0000\nRR00\nYYRYY000000\nY000");
    });

    it("BerlinClock should return 0000:RRRR:YYRYYRYYRYY:YYYY when given 04:59:00", function() {
        const result = main.berlinClock(4,59);
        expect(result).toBe("0000\nRRRR\nYYRYYRYYRYY\nYYYY");
    });

    // --------------------  STEP 4 : Five Hours Block  --------------------

    it("BerlinClock should return 0000 when given 0", function() {
        const result = main.getFiveHours(0);
        expect(result).toBe("0000");
    });

    it("BerlinClock should return R000 when given 5", function() {
        const result = main.getFiveHours(5);
        expect(result).toBe("R000");
    });

    it("BerlinClock should return RR00 when given 10", function() {
        const result = main.getFiveHours(10);
        expect(result).toBe("RR00");
    });

    it("BerlinClock should return RRR0 when given 15", function() {
        const result = main.getFiveHours(15);
        expect(result).toBe("RRR0");
    });

    it("BerlinClock should return RRRR when given 20", function() {
        const result = main.getFiveHours(20);
        expect(result).toBe("RRRR");
    });

    // --------------------  STEP 1, 2, 3 and 4 : Combined tests  --------------------

    it("BerlinClock should return RRR0:RR00:00000000000:0000 when given 17:00:00", function() {
        const result = main.berlinClock(17,0);
        expect(result).toBe("RRR0\nRR00\n00000000000\n0000");
    });

    it("BerlinClock should return RRRR:R000:YYRYYRYYRYY:YYYY when given 21:59:00", function() {
        const result = main.berlinClock(21,59);
        expect(result).toBe("RRRR\nR000\nYYRYYRYYRYY\nYYYY");
    });

});

