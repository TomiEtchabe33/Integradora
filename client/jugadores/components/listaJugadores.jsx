import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ListaJugadores = ({ navigation }) => {
    const [jugadores, setJugadores] = useState([]);
    const [jugadorActual, setJugadorActual] = useState(0);

    useEffect(() => {
        axios.get('http://10.0.2.161:8080/')
            .then(response => setJugadores(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleNextPlayer = () => {
        setJugadorActual(prevJugador => (prevJugador + 1) % jugadores.length);
    };

    const handlePrevPlayer = () => {
        setJugadorActual(prevJugador => (prevJugador - 1 + jugadores.length) % jugadores.length);
    };

    const contadorJugadores = `${jugadorActual + 1}/${jugadores.length}`;

    return (
        <View style={styles.container}>
            <Text style={styles.listaTitle}>Lista de Jugadores</Text>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.cardTitle}>{jugadores[jugadorActual]?.nombre}</Text>
                    <Text style={styles.counterText}>{contadorJugadores}</Text>
                </View>
                <Text style={styles.cardText}>POS: {jugadores[jugadorActual]?.pos}</Text>
                <Text style={styles.cardText}>Edad: {jugadores[jugadorActual]?.edad}</Text>
                <Text style={styles.cardText}>Est: {jugadores[jugadorActual]?.estatura}</Text>
                <Text style={styles.cardText}>P: {jugadores[jugadorActual]?.peso}</Text>
                <Text style={styles.cardText}>NAC: {jugadores[jugadorActual]?.nacionalidad}</Text>
                <Text style={styles.cardText}>Ap: {jugadores[jugadorActual]?.apariciones}</Text>
                <Text style={styles.cardText}>SUB: {jugadores[jugadorActual]?.apariciones_sustituto}</Text>
                <Text style={styles.cardText}>A: {jugadores[jugadorActual]?.atajadas}</Text>
                <Text style={styles.cardText}>GA: {jugadores[jugadorActual]?.goles_concedidos}</Text>
                <Text style={styles.cardText}>A: {jugadores[jugadorActual]?.asistencias}</Text>
                <Text style={styles.cardText}>FC: {jugadores[jugadorActual]?.faltas_cometidas}</Text>
                <Text style={styles.cardText}>FS: {jugadores[jugadorActual]?.faltas_sufridas}</Text>
                <Text style={styles.cardText}>TA: {jugadores[jugadorActual]?.tarjetas_amarillas}</Text>
                <Text style={styles.cardText}>TR: {jugadores[jugadorActual]?.tarjetas_rojas}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handlePrevPlayer}>
                        <Text style={styles.buttonText}>Atrás</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleNextPlayer}>
                        <Text style={styles.buttonText}>Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
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