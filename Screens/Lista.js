import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Lista({ route }) {

    const { clientes } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Lista de clientes </Text>

            {clientes.length == 0 ? (
                <Text style={styles.mensaje}> No hay clientes</Text>

            ) : (

                <ScrollView style={styles.scroll}>
                    {clientes.map((clientes, index) => (
                        <View key={index} style={styles.card}>

                            <Text style={styles.label}> Cedula: <Text style={styles.valor}> {clientes.Ncedula} </Text> </Text>
                            <Text style={styles.label}> Nombre: <Text style={styles.valor}> {clientes.Nnombres} </Text> </Text>
                            <Text style={styles.label}> Apeliidos: <Text style={styles.valor}> {clientes.Napellidos} </Text> </Text>
                            <Text style={styles.label}> Fecha de nacimiento: <Text style={styles.valor}> {clientes.Nfechanac} </Text> </Text>
                            <Text style={styles.label}> Sexo: <Text style={styles.valor}> {clientes.Nsexo} </Text> </Text>
                        </View>

                    ))}

                </ScrollView>

            )}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7E6',
    },
    titulo: {
        fontSize: 25,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#4F8B2E',
        paddingTop: 20
    },
    card: {
        height: 130,
        width: 360,
        backgroundColor: '#C2E8C2',
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    label: {
        color: '#00000',
        marginLeft: 10,
        paddingTop: 1,

    },
    valor: {
        color: '#358B47'

    }
});
