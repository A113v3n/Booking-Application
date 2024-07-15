import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../services/api';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

interface AuthResponse {
  success: boolean;
  token: string;
  role: string;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      const data: AuthResponse = response.data;

      if (data.token && data.role) {
        const { token, role } = data;
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('role', role);
        if (role === 'admin') {
          navigation.navigate('AdminDashboard');
        } else if (role === 'attendant') {
          navigation.navigate('AttendantDashboard');
        } else if (role === 'client') {
          navigation.navigate('ClientDashboard');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/moose_logo.png')} style={styles.logo} /> */}
      <Text style={styles.instructions}>Please enter your phone number or email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number or email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/apple_logo.png')} style={styles.socialLogo} />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/facebook_logo.png')} style={styles.socialLogo} />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/google_logo.png')} style={styles.socialLogo} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#333',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  instructions: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 20,
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  socialLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default LoginScreen;
