import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AdminDashboard from '../screens/AdminDashboard';
import AttendantDashboard from '../screens/AttendantDashboard';
import ClientDashboard from '../screens/ClientDashboard';
import BookingScreen from '../screens/BookingScreen';

// Define the type for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AdminDashboard: undefined;
  AttendantDashboard: undefined;
  ClientDashboard: undefined;
  BookingScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="AttendantDashboard" component={AttendantDashboard} />
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
