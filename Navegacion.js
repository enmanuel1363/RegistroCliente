import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import Formulario from './Componentes/Formulario';
import Lista from './Screens/Lista';


function Navegacion() {
    return (
        <NavigationContainer>
        
            <StackDetalles>

            </StackDetalles>
        
        </NavigationContainer>
    );
}
const Stack = createStackNavigator();

function StackDetalles() {
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Formulario" component={Formulario} />
                <Stack.Screen name="Lista" component={Lista} />


            </Stack.Navigator>
    )
}


export default Navegacion;
