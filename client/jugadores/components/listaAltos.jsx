import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const JugadorAlto = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.0.3.225:8080/jugador/alto');
                console.log('Respuesta de la API:', response.data);
                setJugadores(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);


    const renderJugador = ({ item }) => (
        <View>
            <View style={styles.header}>
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.counterText}>1/1</Text>
            </View>
            <Text style={styles.cardText}>POS: {item.pos}</Text>
            <Text style={styles.cardText}>Edad: {item.edad}</Text>
            <Text style={styles.cardText}>Est: {item.estatura}</Text>
            <Text style={styles.cardText}>P: {item.peso}</Text>
            <Text style={styles.cardText}>NAC: {item.nacionalidad}</Text>
            <Text style={styles.cardText}>Ap: {item.apariciones}</Text>
            <Text style={styles.cardText}>SUB: {item.apariciones_sustituto}</Text>
            <Text style={styles.cardText}>A: {item.atajadas}</Text>
            <Text style={styles.cardText}>GA: {item.goles_concedidos}</Text>
            <Text style={styles.cardText}>A: {item.asistencias}</Text>
            <Text style={styles.cardText}>FC: {item.faltas_cometidas}</Text>
            <Text style={styles.cardText}>FS: {item.faltas_sufridas}</Text>
            <Text style={styles.cardText}>TA: {item.tarjetas_amarillas}</Text>
            <Text style={styles.cardText}>TR: {item.tarjetas_rojas}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.listaTitle}>Jugador mal alto:</Text>
                <View style={styles.card}>
            <FlatList
                data={jugadores ? [jugadores] : []}
                keyExtractor={(item) => (item && item.id_jugador ? item.id_jugador.toString() : '')}
                renderItem={renderJugador}
            />
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

export default JugadorAlto;