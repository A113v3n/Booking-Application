import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { login } from '../services/auth';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await login(email, password);
    console.log('Login response:', response); // Debugging line

    if (response.success) {
      const role = response.role;
      console.log('User role:', role); // Debugging line

      if (role === 'admin') {
        navigation.navigate('AdminDashboard');
      } else if (role === 'attendant') {
        navigation.navigate('AttendantDashboard');
      } else if (role === 'client') {
        navigation.navigate('ClientDashboard');
      } else {
        navigation.navigate('Home');
      }
    } else {
      alert('Login failed');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
