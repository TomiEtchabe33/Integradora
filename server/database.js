import mysql from "mysql2";
import {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    MYSQL_PORT
} from './config.js';

const pool = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT
}).promise();

export async function getJugadores() {
    const [row] = await pool.query('SELECT * FROM jugadores');
    return row;
}

export async function getJugadoresById(id_jugador) {
    const [row] = await pool.query("SELECT * FROM jugadores WHERE id_jugador = ?", [id_jugador]);
    return row;
}

export async function getJugadoresArgentinos() {
    const [row] = await pool.query("SELECT * FROM jugadores WHERE nacionalidad = ?", ['Argentina']);
    return row;
}

export async function getJugadoresPorPeso() {
    const [rows] = await pool.query("SELECT * FROM jugadores WHERE peso >= ? AND peso <= ?", [75, 80]);
    return rows;
}

export async function getJugadorMasAlto() {
    const [rows] = await pool.query("SELECT * FROM jugadores ORDER BY estatura DESC LIMIT 1");
    return rows[0];
}

export async function insertarRegistro(nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas) {
    const [row] = await pool.query("INSERT INTO jugadores VALUES (nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apariciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas) = (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas]);    
    return row;
}

export async function actualizarJugadorById(id_jugador, nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas) {
    const [row] = await pool.query("UPDATE jugadores SET nombre = ?, posicion = ?, edad = ?, estatura = ?, peso = ?, nacionalidad = ?, apariciones = ?, apariciones_sustituto = ?, atajadas = ?, goles_concecidos = ?, asistencias = ?, faltas_cometidas = ?, faltas_sufridas = ?, tarjetas_amarillas = ?, tarjetas_rojas = ? WHERE id_jugador = ?", [nombre, posicion, edad, estatura, peso, nacionalidad, apariciones, apareciones_sustituto, atajadas, goles_concedidos, asistencias, faltas_cometidas, faltas_sufridas, tarjetas_amarillas, tarjetas_rojas, id_jugador]);    
    return row;
}

export async function borrarJugadorById(id_jugador) {
    const [row] = await pool.query('DELETE FROM jugadores WHERE id_jugador = ?',[id_jugador]);
    return row;
}