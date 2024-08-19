import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type PressureScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Pressure'
>;

type Props = {
  navigation: PressureScreenNavigationProp;
  route: any;
};

const PressureScreen: React.FC<Props> = ({ navigation, route }) => {
  const { basicInfo, pregnant } = route.params;

  const handleNext = (pressurePreference: string) => {
    navigation.navigate('PainArea', { basicInfo, pregnant, pressurePreference });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your preferred pressure?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Light" onPress={() => handleNext('light')} color="#f0a500" />
        <Button title="Medium" onPress={() => handleNext('medium')} color="#f0a500" />
        <Button title="Firm" onPress={() => handleNext('firm')} color="#f0a500" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    marginVertical: 8,
  },
});

export default PressureScreen;
