import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, CustomFormData } from '../navigation/AppNavigator';

type BasicInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BasicInfo'
>;

type Props = {
  navigation: BasicInfoScreenNavigationProp;
};

const BasicInfoScreen: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<CustomFormData>();

  const onSubmit = (data: CustomFormData) => {
    console.log(data);
    navigation.navigate('Pregnant', { basicInfo: data });
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
      <Button title="Next" onPress={handleSubmit(onSubmit)} color="#f0a500" />
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
