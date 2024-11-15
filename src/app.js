export class Main {

    // "Y" = Yellow (light on)
    // "R" = Red (light on)
    // "0" = Light Off

    //Returns berlin clock
    berlinClock(time){ 
        const second = this.getSeconds(time);
        const fiveHours = this.getFiveHours(time);
        const simpleHour = this.getSimpleHour(time);
        const fiveMinutes = this.getFiveMinutes(time);
        const simpleMinutes = this.getSimpleMinute(time);
        return `${second}\n${fiveHours}\n${simpleHour}\n${fiveMinutes}\n${simpleMinutes}`;
    }

    //Returns the display of simple minutes as a string.
    getSimpleMinute(time){
        const minutes = this.getMinutes(time);
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "0".repeat(Math.abs(4-simpleMinutes));
    }

    //Returns the display of five minutes block as a string.
    getFiveMinutes(time) {
        const minutes = this.getMinutes(time);
        const lightOnCount = Math.floor(minutes / 5);
        let lights = '';
    
        for (let i = 0; i < 11; i++) {
            lights = this.light(i, lightOnCount, lights);
        }
    
        return lights;
    }

    light(i, lightOnCount, lights) {
        if (i < lightOnCount) {
            lights += (i + 1) % 3 === 0 ? 'R' : 'Y'; // multiple of 3 = red light
        } else {
            lights += '0';
        }
        return lights;
    }

    //Returns the display of simple hours as a string.
    getSimpleHour(time) {
        const hours = this.getHours(time);
        const simpleHour = hours % 5;
        return "R".repeat(simpleHour) + "0".repeat(Math.abs(4-simpleHour));
    }

    //Returns the display of five hours block as a string.
    getFiveHours(time) {
        const hours = this.getHours(time);
        const fiveHours = parseInt(hours / 5);
        return "R".repeat(fiveHours) + "0".repeat(Math.abs(4-fiveHours));
    }

    //Returns the display of seconds lamp
    getSeconds(time){
        const seconds = this.getSecond(time);
        return seconds % 2 === 0 ? "R" : "0"; // R for even seconds
    }

    // convertor
    //23:45:54 -> [23],[45],[54]
    //             0     1    2
    getMinutes(time) {
        return parseInt(time.split(':')[1]);
    }

    getHours(time) {
        return parseInt(time.split(':')[0]);
    }

    getSecond(time) {
        return parseInt(time.split(':')[2]);
    }
}