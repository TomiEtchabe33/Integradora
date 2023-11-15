import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import {
    actualizarJugadorById,
    borrarJugadorById,
    getJugadores,
    getJugadoresById,
    getJugadorMasAlto,
    getJugadoresArgentinos,
    getJugadoresPorPeso,
    insertarRegistro
} from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const respuesta = await getJugadores();
        res.status(200).send(respuesta);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los jugadores.');
    }
});

app.get('/jugadores/argentinos', async (req, res) => {
    try {
        const respuesta = await getJugadoresArgentinos();
        if (respuesta.length === 0) {
            res.status(404).send('No se encontraron jugadores argentinos.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar jugadores argentinos.');
    }
});

app.get('/jugadores/peso', async (req, res) => {
    try {
        const respuesta = await getJugadoresPorPeso();
        if (respuesta.length === 0) {
            res.status(404).send('No se encontraron jugadores en ese rango de peso.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar jugadores por peso.');
    }
});

app.get('/jugador/mas-alto', async (req, res) => {
    try {
        const respuesta = await getJugadorMasAlto();
        if (!respuesta) {
            res.status(404).send('No se encontró al jugador más alto.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar al jugador más alto.');
    }
});

app.get('/jugador/:id', async (req, res) => {
    try {
        const respuesta = await getJugadoresById(req.params.id);
        if (!respuesta) {
            res.status(404).send('Jugador no encontrado.');
        } else {
            res.status(200).send(respuesta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el jugador por ID.');
    }
});

app.post('/jugador', async (req, res) => {
    const {nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas} = req.body;
    const respuesta = await insertarRegistro(nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas);
    res.status(200).send(respuesta);
});

app.put('/jugador/actualizar', async (req, res) => {
    const {id_jugador, nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas} = req.body;
    const respuesta = await actualizarJugadorById(id_jugador, nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas);
    res.status(200).send(respuesta);
});

app.delete('/jugador/eliminar/:id', async (req, res) => {
    const respuesta = await borrarJugadorById(req.params.id);
    res.status(200).send(respuesta);
});

app.listen(PORT, ()=>{
    console.log('El servidor esta corriendo en el puerto '+ PORT);
});