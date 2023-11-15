import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ListaJugadores = ({ navigation }) => {
    const [jugadores, setJugadores] = useState([]);
    const [jugadorActual, setJugadorActual] = useState(0);

    useEffect(() => {
        axios.get('http://10.0.2.161:8080/jugadores/peso')
            .then(response => setJugadores(response.data))
            .catch(error => console.error(error));
    }, []);

    const contadorJugadores = `${jugadorActual + 1}/${jugadores.length}`;
    const jugadorActualData = jugadores[jugadorActual];

    return (
        <View style={styles.container}>
            <Text style={styles.listaTitle}>Jugadores con peso entre 75 y 80kg</Text>
            {jugadorActualData && (
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.cardTitle}>{jugadorActualData.nombre}</Text>
                        <Text style={styles.counterText}>{contadorJugadores}</Text>
                    </View>
                    <Text style={styles.cardText}>POS: {jugadorActualData.pos}</Text>
                    <Text style={styles.cardText}>Edad: {jugadorActualData.edad}</Text>
                    <Text style={styles.cardText}>Est: {jugadorActualData.estatura}</Text>
                    <Text style={styles.cardText}>P: {jugadorActualData.peso}</Text>
                    <Text style={styles.cardText}>NAC: {jugadorActualData.nacionalidad}</Text>
                    <Text style={styles.cardText}>POS: {jugadorActualData.pos}</Text>
                    <Text style={styles.cardText}>Ap: {jugadorActualData.apariciones}</Text>
                    <Text style={styles.cardText}>SUB: {jugadorActualData.apariciones_sustituto}</Text>
                    <Text style={styles.cardText}>A: {jugadorActualData.atajadas}</Text>
                    <Text style={styles.cardText}>GA: {jugadorActualData.goles_concedidos}</Text>
                    <Text style={styles.cardText}>A: {jugadorActualData.asistencias}</Text>
                    <Text style={styles.cardText}>FC: {jugadorActualData.faltas_cometidas}</Text>
                    <Text style={styles.cardText}>FS: {jugadorActualData.faltas_sufridas}</Text>
                    <Text style={styles.cardText}>TA: {jugadorActualData.tarjetas_amarillas}</Text>
                    <Text style={styles.cardText}>TR: {jugadorActualData.tarjetas_rojas}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    listaTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    counterText: {
        color: '#888',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        marginBottom: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        width: '48%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ListaJugadores;
