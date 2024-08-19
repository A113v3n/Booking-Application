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
  route: any;
};

const PregnantScreen: React.FC<Props> = ({ navigation, route }) => {
  const { basicInfo } = route.params;

  const handleNext = (pregnant: string) => {
    navigation.navigate('Pressure', { basicInfo, pregnant });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you currently pregnant?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={() => handleNext('yes')} color="#f0a500" />
        <Button title="No" onPress={() => handleNext('no')} color="#f0a500" />
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
