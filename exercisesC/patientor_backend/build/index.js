"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnosesService_1 = __importDefault(require("./services/diagnosesService"));
const patientsService_1 = __importDefault(require("./services/patientsService"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const PORT = 3001;
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.get('/api/diagnoses', (_req, res) => {
    const diagnoses = diagnosesService_1.default.getEntries();
    res.send(diagnoses);
});
app.get('/api/patients', (_req, res) => {
    const patient = patientsService_1.default.getPatientsNoSsn();
    res.send(patient);
});
app.post('/api/patients', (req, res) => {
    const { name, occupation, gender, ssn, dateOfBirth } = req.body;
    const newPatient = patientsService_1.default.addPatient(name, occupation, gender, ssn, dateOfBirth);
    res.send(newPatient);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
