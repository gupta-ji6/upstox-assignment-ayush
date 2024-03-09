import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Holding from '../src/screens/Holding/Holding';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Holding'
          component={Holding}
          options={{
            title: 'Upstox Holding',
            headerStyle: {
              backgroundColor: COLORS.PRIMARY,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
