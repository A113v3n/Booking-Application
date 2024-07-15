import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type PregnantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Pregnant'
>;

type Props = {
  navigation: PregnantScreenNavigationProp;
};

const PregnantScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you currently pregnant?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={() => navigation.navigate('Pressure')} color="#f0a500" />
        <Button title="No" onPress={() => navigation.navigate('Pressure')} color="#f0a500" />
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PregnantScreen;
