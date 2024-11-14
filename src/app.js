export class Main {

    
    //Returns berlin clock
    berlinClock(time){ 
        const simpleMinutes = this.getSimpleMinute(time);
        return `${simpleMinutes}`;
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
}