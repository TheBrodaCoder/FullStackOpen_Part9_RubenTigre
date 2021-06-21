
const bmiCalculator = (weight: number, height: number): string => {

    if (height === 0) throw new Error('Cannot divide by 0');

    let bmi: number = (weight/height**2)*10_000;

    if (bmi < 15)                   return 'Very severely underweight';
    if ( 15 <= bmi && bmi <= 16 )   return 'Severely underweight';
    if ( 16 < bmi && bmi <= 18.5 )  return 'Underweight';
    if ( 18.5 < bmi && bmi <= 25 )  return 'Normal (healthy weight)';
    if ( 25 < bmi && bmi <= 30 )    return 'Overweight';
    if ( 30 < bmi && bmi <= 35 )    return 'Obese Class I (Moderately obese)';
    if ( 35 < bmi && bmi <= 40 )    return 'Obese Class II (Severely obese)';
    if ( bmi > 40)                  return 'Obese Class III (Very severely obese)';
    throw new Error('This dont work');
}

/*
let userWeight = Number(process.argv[2]);
let userHeight = Number(process.argv[3]);

try {
    console.log(bmiCalculator(userWeight, userHeight));
} catch(error) {
    console.error(error.message);
}
*/

export default bmiCalculator;