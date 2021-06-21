interface Result {
    periodLength: number,
    trainingDays: number,
    sucess: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const comentRate = (rate: number): string => {

    switch (rate) {
        case 1:
            return 'not too bad but could be better';
        case 2:
            return 'Man, you need to excercise your body';
        case 3:
            return 'Man you\'re awesome, keep working that gainzz';
        default:
            throw new Error(`Rate is not 1, 2 or 3: ${rate}`)
    }
}

const rateHours = (target: number, average: number): number => {
    if (target > average) return 1;
    if (target === average) return 2;
    if (target < average) return 3;
    return 1;
}

const exerciseCalculator = (weekWork: Array<number>, targetHours: number): Result => {
    
    let periodLength: number = weekWork.length;
    let trainingDays: number = weekWork.filter(day => day !== 0).length;
    let target: number = targetHours;
    let average: number = weekWork.reduce((a, b) => (a + b)) / periodLength;
    let sucess: boolean = target <= average;
    let rating: number = rateHours(target, average);
    let ratingDescription: string = comentRate(rating);

    return {
        periodLength,
        trainingDays,
        sucess,
        rating,
        ratingDescription,
        target,
        average
    }
}

/*
const getArray = (): Array<number> => {
    let argv = process.argv;
    if (argv.length === 2) return [];

    let result: Array<number> = [];
    for ( let i = 2; i < argv.length -1; i++ ) {
        result.push(Number(argv[i]));
    }

    return result
}

let period: Array<number> = getArray()
let target = Number(process.argv.length - 1);

try {
    console.log(exerciseCalculator(period, target));
    
} catch (error) {
    console.error(error.message);  
}
*/

export default exerciseCalculator;