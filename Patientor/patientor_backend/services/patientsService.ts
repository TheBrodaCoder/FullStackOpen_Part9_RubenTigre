import patientsData from '../patients';
import { Patient, NoSSNpatient, Gender } from '../types';

const patients: Array<Patient> = patientsData;

const idGenerator = (): string => {
    return Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 13);
}

const getPatients = (): Array<Patient> => {
    return patients;
};

const getPatientsNoSsn = (): NoSSNpatient [] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (name: string, occupation: string, gender: Gender, ssn: string, dateOfBirth: string): Patient => {
    const newPatient: Patient = {
        id: idGenerator(),
        name,
        occupation,
        gender,
        ssn,
        dateOfBirth
    }

    patientsData.push(newPatient);
        
    return newPatient;
}

export default {
    getPatients,
    getPatientsNoSsn,
    addPatient
};