const getSleepHours = (day) => {
    day = day.toLowerCase()
    switch (day) {
        case "monday":
            return 6;
        case "tuesday":
            return 6;
        case "wednesday":
            return 6;
        case "thursday":
            return 6;
        case "friday":
            return 7;
        case "saturday":
            return 6;
        case "sunday":
            return 6;
    }
};


const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
    let idealHours = 8 * 7;
    return idealHours
}

const calculateSleepDebt = () => {
    let actualSleepHours= getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours < idealSleepHours) {
        sleep = idealSleepHours - actualSleepHours
        return `You're not sleeping enough. You slept ${sleep} hours less than you should.`;
    } else if (actualSleepHours > idealSleepHours) {
        sleep = actualSleepHours - idealSleepHours
        return `You're sleeping too much. You slept ${sleep} hours more than you should.`;
    } else {
        return "You're sleeping just right";
    }
}

console.log(calculateSleepDebt())