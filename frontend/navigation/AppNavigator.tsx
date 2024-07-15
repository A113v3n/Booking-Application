import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminDashboard from '../screens/AdminDashboard';
import AttendantDashboard from '../screens/AttendantDashboard';
import ClientDashboard from '../screens/ClientDashboard';
import BookingScreen from '../screens/BookingScreen';
import BasicInfoScreen from '../screens/BasicInfoScreen.tsx';
import PregnantScreen from '../screens/PregnantScreen';
import PressureScreen from '../screens/PressureScreen';
import PainAreaScreen from '../screens/PainAreaScreen';

// Define the type for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AdminDashboard: undefined;
  AttendantDashboard: undefined;
  ClientDashboard: undefined;
  BookingScreen: undefined;
  BasicInfo: undefined;
  Pregnant: undefined;
  Pressure: undefined;
  PainArea: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="AttendantDashboard" component={AttendantDashboard} />
      <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      {/* Add the new registration step screens */}
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      <Stack.Screen name="Pregnant" component={PregnantScreen} />
      <Stack.Screen name="Pressure" component={PressureScreen} />
      <Stack.Screen name="PainArea" component={PainAreaScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
