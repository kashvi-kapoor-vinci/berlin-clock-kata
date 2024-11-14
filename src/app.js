export class Main {

    
    //Returns berlin clock
    berlinClock(time){ 
        const simpleMinutes = this.getSimpleMinute(time);
        return `${simpleMinutes}`;
    }

    //Returns the display of simple minutes as a string.
    getSimpleMinute(time){
        const minutes = this.getMinutes(time);
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "0".repeat(Math.abs(4-simpleMinutes));
    }
}