export class Main {

    
    //Returns berlin clock
    berlinClock(hours, minutes){ 
        const fiveHours = this.getFiveHours(hours);
        const simpleHour = this.getSimpleHour(hours);
        const fiveMinutes = this.getFiveMinutes(minutes);
        const simpleMinutes = this.getSimpleMinute(minutes);
        return `${fiveHours}\n${simpleHour}\n${fiveMinutes}\n${simpleMinutes}`;
    }

    //Returns the display of simple minutes as a string.
    getSimpleMinute(minutes){
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "0".repeat(Math.abs(4-simpleMinutes));
    }

    //Returns the display of five minutes block as a string.
    getFiveMinutes(minutes) {
        const lightOn = Math.floor(minutes / 5); 
        let totalLights = ""; 

        for (let i = 0; i < lightOn; i++) {
            if ((i + 1) % 3 === 0) {  // multiple of 3 = red light
                totalLights += "R";
            } else {
                totalLights += "Y"; 
            }
        }

        while (totalLights.length < 11) {
            totalLights += "0";
        }

        return totalLights; 
    }

    //Returns the display of simple hours as a string.
    getSimpleHour(hours) {
        const simpleHour = hours % 5;
        return "R".repeat(simpleHour) + "0".repeat(Math.abs(4-simpleHour));
    }

    //Returns the display of five hours block as a string.
    getFiveHours(hours) {
        const fiveHours = parseInt(hours / 5);
        return "R".repeat(fiveHours) + "0".repeat(Math.abs(4-fiveHours));
    }
}