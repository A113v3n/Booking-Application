import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type BasicInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BasicInfo'
>;

type Props = {
  navigation: BasicInfoScreenNavigationProp;
};

// Define the type for the form data
interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const BasicInfoScreen: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Store data and navigate to next screen
    console.log(data);
    navigation.navigate('Pregnant');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>Register</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="First Name" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="firstName"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="Last Name" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="lastName"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="Phone Number" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="phoneNumber"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="email"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry />
        )}
        name="password"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput style={styles.input} placeholder="Confirm Password" onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      <Button title="Register" onPress={handleSubmit(onSubmit)} color="#f0a500" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333',
  },
  logo: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
    color: '#f0a500',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});

export default BasicInfoScreen;
