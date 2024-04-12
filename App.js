import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TesteScreen from "./src/screens/TesteScreen";
import TesteScreen2 from "./src/screens/TesteScreen2";

import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function StackNavigator() {
  <Stack.Navigator initialRouteName="Inicial">
    
    <Stack.Screen
      name="TesteScreen"
      component={TesteScreen}
    />
    <Stack.Screen
      name="TesteScreen2"
      component={TesteScreen2}
    />
  </Stack.Navigator>
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="TesteScreen" 
        component={TesteScreen} 
        options={{ tabBarIcon: () => {
          return <AntDesign name="home" size={25} color="lightblue" />
        }}}
      />
      <Tab.Screen 
        name="TesteScreen2" 
        component={TesteScreen2} 
        options={{ tabBarIcon: () => {
          return <AntDesign name="home" size={25} color="lightblue" /> // Ícone diferente para a segunda aba
        }}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={estilos.containerSafe}>
      <StatusBar />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  containerSafe: {
    flex: 1,
  },
});
