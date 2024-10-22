import './loadEnvironment.js';
import express from 'express';

const app = express();

const port = process.env.HOST_PORT ?? '3000';

const students_array = [
  "Mateo Achá Sánchez", "Satenik Avetisyan", "Paul Aznar Tequén",
  "Adrià Baltrons Mata", "Roger Bustos Julià", "Óscar Cruañas Gonzalbez",
  "Pol Cubo Pizarro", "Santiago Fernández-Pedrera López", "ORIOL FONTCUBERTA ADUART",
  "Daniel Galeano García", "Arnau Gil Gil", "Adrián Lozano Infantes",
  "Nil Marquez Rodriguez", "Quim Pallarés Sirvent", "Denis Stefan Podovei",
  "Victor Manuel Trujillo Guadiamos", "Adrià Usón Usón Delso", "Ivan Vallejo Ciuraneta",
  "Nicolás Vehí Stark", "Nahomy Fernanda Argueta Navarrete", "Francesc Barceló Castellet",
  "Brian Bautista Martin", "Héctor García Carlota", "Jaime Higueras Rubiño",
  "Joan Puig Oliván", "Jaume Gàndara Sánchez", "Albert Garrido Pintado",
  "Óscar Parra Raya", "Alex Blay Estrada", "Rafel Herrerias Cuscullola",
  "Alejandro Pascual González"
];

const contador_students = students_array.length;

app.get('/students', (_, res) => {

res.json({contador_students, students_array});
});

app.listen(port, () => {

  console.log(`[server]: Server is running at http://localhost:${port}/students`);
});
export default app;
