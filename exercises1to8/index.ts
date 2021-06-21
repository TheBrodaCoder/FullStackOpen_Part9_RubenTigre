import express from 'express';
import bmiCalculator from './bmiCalculator';
import exerciseCalculator from './exerciseCalculator';
const app = express();

app.use(express.json())

app.get('/greetings', (_req, res) => {
    res.send('Hello Full Stack')
});

app.get('/bmi', (req, res) => {
    if (Object.keys(req.query).length === 0 || Object.keys(req.query).length < 2 || Object.keys(req.query).length > 2) {
        res.status(400).send({
            error: 'parameters missing'
        });
    } else {
        if (Object.keys(req.query).includes('weight') && Object.keys(req.query).includes('height')) {
            let weight:number = Number(req.query.weight);
            let height:number = Number(req.query.height);

            res.status(200).send({
            weight,
            height,
            bmi: bmiCalculator(weight, height)
            });
        } else {
            res.status(400).send({
                error: "malformatted item"
            });
        }
    }
})

app.post('/exercises', (req, res) => {
    
    let keysReq: Array<string> = Object.keys(req.body);
    if (keysReq.length > 0 || keysReq.length > 2 && ( keysReq.includes('daily_exercises') && keysReq.includes('target'))) {
        try {
            let exercise: Array<number> = req.body.daily_exercises;
            let target: number = req.body.target;
            console.log(exercise, target);
            
            res.status(200).send(exerciseCalculator(exercise, target));
        } catch (error) {
            res.status(400).send({
                error: 'malformatted parameters'
            })
        }
    } else {
        res.status(400).send({
            error: 'parameters missing'
        })
    }
    
})

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}: http://www.localhost:3002`);
})