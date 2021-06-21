"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../patients"));
const patients = patients_1.default;
const idGenerator = () => {
    return Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 5) + '-' + Math.random().toString(36).substr(2, 13);
};
const getPatients = () => {
    return patients;
};
const getPatientsNoSsn = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (name, occupation, gender, ssn, dateOfBirth) => {
    const newPatient = {
        id: idGenerator(),
        name,
        occupation,
        gender,
        ssn,
        dateOfBirth
    };
    patients_1.default.push(newPatient);
    return newPatient;
};
exports.default = {
    getPatients,
    getPatientsNoSsn,
    addPatient
};
