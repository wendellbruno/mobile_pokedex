import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Catchs} from '../pages';
import PokeballSvg from '../assets/svgs/pokeball.svg';
import PokeballCapturadoSvg from '../assets/svgs/pokeballCapturado.svg';
import {Ionicons} from '@expo/vector-icons'

// import { Container } from './styles';

export const Routes: React.FC = () => {
    const Stack = createStackNavigator();

    {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator> */}
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        

        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} options={{
            tabBarLabel: 'Inicio' ,
            tabBarIcon: (() => <PokeballSvg />),
          }} />
          <Tab.Screen name='Catchs' component={Catchs}  options={{
            tabBarIcon: (() => <PokeballCapturadoSvg />)
          }}/>
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}
