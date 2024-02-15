import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import {routes} from '../routes/navigation.routes';
import HomeScreen from '../screen/HomeScreen';
import {icons} from '../res/icon/icons';
import {colors} from '../res/colors';
import HeaderLeftComp from '../components/HeaderLeftComp';
import HeaderRightComp from '../components/HeaderRightComp';
import NewTodoScreen from '../screen/NewTodoScreen';
import HistoryScreen from '../screen/HistoryScreen';
import NotifiactionScreen from '../screen/NotifiactionScreen';
import {AppStore} from '../context/AppContext';
import TodoDetailsScreen from '../screen/TodoDetailsScreen';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {isLogin} = useContext(AppStore);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin ? (
          <Stack.Screen
            options={{headerShown: false}}
            name={routes.Login}
            component={LoginScreen}
          />
        ) : (
          <>
            <Stack.Screen
              options={{
                headerLeft: () => <HeaderLeftComp />,
                headerRight: () => <HeaderRightComp />,
                title: 'Home',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 22,
                },
              }}
              name={routes.Home}
              component={HomeScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={routes.Notifiaction}
              component={NotifiactionScreen}
            />

            <Stack.Screen
              options={{title: 'Details'}}
              name={routes.TodoDetails}
              component={TodoDetailsScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={routes.History}
              component={HistoryScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name={routes.NewTodo}
              component={NewTodoScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
