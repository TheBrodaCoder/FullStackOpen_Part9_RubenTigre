import { Patient, NoSSNpatient, Gender } from '../types';
declare const _default: {
    getPatients: () => Patient[];
    getPatientsNoSsn: () => NoSSNpatient[];
    addPatient: (name: string, occupation: string, gender: Gender, ssn: string, dateOfBirth: string) => Patient;
};
export default _default;
