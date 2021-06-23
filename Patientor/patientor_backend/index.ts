import express from 'express';
import cors from 'cors';
import { Diagnosis, NoSSNpatient, Patient } from './types';
import diagnosesService from './services/diagnosesService';
import patientsService from './services/patientsService';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
    const diagnoses: Array<Diagnosis> = diagnosesService.getEntries();
    res.send(diagnoses);
});

app.get('/api/patients', (_req, res) => {
    const patient: Array<NoSSNpatient> = patientsService.getPatientsNoSsn(); 
    res.send(patient);
});

app.post('/api/patients', (req, res) => {
    const {name, occupation, gender, ssn, dateOfBirth} = req.body;
    const newPatient: Patient = patientsService.addPatient(name, occupation, gender, ssn, dateOfBirth);
    res.send(newPatient);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});