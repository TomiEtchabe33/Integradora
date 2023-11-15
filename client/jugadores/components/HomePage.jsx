import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>TP N°17 (Integradora)</Text>
                <Button
                    title="Lista Jugadores"
                    onPress={() => navigation.navigate('Lista')}
                    style={styles.button}
                    color="#4CAF50" 
                />
                <View style={styles.buttonSpace} />
                <Button
                    title="Nacionalidad Argentina"
                    onPress={() => navigation.navigate('Nacionalidad')}
                    style={styles.button}
                    color="#4CAF50" 
                />
                <View style={styles.buttonSpace} />
                <Button
                    title="75-80kg"
                    onPress={() => navigation.navigate('Peso')}
                    style={styles.button}
                    color="#4CAF50" 
                />
                <View style={styles.buttonSpace} />
                <Button
                    title="Jugador mas alto"
                    onPress={() => navigation.navigate('Altura')}
                    style={styles.button}
                    color="#4CAF50"
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
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        marginTop: 10,
    },
    buttonSpace: {
        height: 10,
    },
});

export default HomePage;
