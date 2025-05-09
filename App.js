import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');

  const [clientes, setClientes] = useState([]);

  const guardar = () => {
    if (!cedula || !nombre) return null;
     const nuevoCliente = {
      nuevacedula: cedula,
      nuevosnombre: nombre,
      nuevosapellido: apellido,
      nuevofechaNacimiento: fechaNacimiento,
      nuevoSexo: sexo,
     }

     setClientes([nuevoCliente, ...clientes]);
     Alert.alert(
      'Datos almacenados',
      `cedula: ${cedula}
      nombre: ${nombre}
       apellido: ${apellido}
       fecha de nacimiento: ${fechaNacimiento}
        sexo: ${sexo}`
     );

     setCedula('');
     setNombre('');
    setApellido('');
    setFechaNacimiento('');
    setSexo('');  
  };

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.label}> cedula</Text>
      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={setCedula}
        placeholder="Ingrese su cedula"
      ></TextInput>

      <Text style={styles.label}> Nombre</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"/>

        <Text style={styles.label}> Apellido</Text>
        <textInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Ingrese su apellido"
        ></textInput>

        <Text style={styles.label}> Fecha de nacimiento</Text>
        <TextInput
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        placeholder="YYYY/MM/DD"/>

        <Text style={styles.label}> Sexo </Text>


        <View>
        <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        >
        <Picker.item label="Seleccione...." value=""/>
        <Picker.item label="Masculino" value="Masculino"/>
        <Picker.item label="Femenino" value="Femenino"/>
        </Picker>
        </View>
       </View>

        <Button titl="Guardar" onPress={guardar}></Button>
      <StatusBar style="auto" />


    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label :{
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    width: 300,
    height: 55,
  },

  Picker: {
    borderWidth: 1,
    borderColor: '#999',
    marginTop : 5,
    marginBottom: 5,
    width: 300,
  },
});
