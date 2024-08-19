import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, CustomFormData } from '../navigation/AppNavigator';
import InteractiveBodyDiagram from '../components/InteractiveBodyDiagram';
import { registerClient } from '../services/auth';

type PainAreaScreenNavigationProp = NavigationProp<RootStackParamList, 'PainArea'>;
type PainAreaScreenRouteProp = RouteProp<RootStackParamList, 'PainArea'>;

const PainAreaScreen: React.FC = () => {
  const [painArea, setPainArea] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 300, height: 500 });
  const navigation = useNavigation<PainAreaScreenNavigationProp>();
  const route = useRoute<PainAreaScreenRouteProp>();
  const { basicInfo, pregnant, pressurePreference } = route.params;

  useEffect(() => {
    const updateDimensions = () => {
      const window = Dimensions.get('window');
      const height = window.height * 0.7;
      const width = height * (300 / 500);
      setDimensions({ width, height });
    };

    updateDimensions();
    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => subscription.remove();
  }, []);

  const toggleArea = (area: string) => {
    setPainArea((prev: string[]) => {
      const isNewSelection = prev.includes(area);
      return isNewSelection ? prev.filter((a) => a !== area) : [...prev, area];
    });
  };

  const handleSubmit = async () => {
    const registrationData = {
      ...basicInfo,
      pregnant,
      pressurePreference,
      painArea,
    };

    try {
      const response = await registerClient(registrationData);
      if (response.success) {
        Alert.alert('Registration successful!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Registration failed', response.message);
      }
    } catch (error: any) {
      console.error('Registration error details:', error); // Log detailed error
      Alert.alert('An error occurred during registration', error.message || 'Unknown error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>If there is an area you feel pain, please select it. If not, please skip.</Text>
      <View style={styles.diagramContainer}>
        <InteractiveBodyDiagram
          painArea={painArea}
          toggleArea={toggleArea}
          dimensions={dimensions}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} color="#f0a500" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: '#fff',
  },
  diagramContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default PainAreaScreen;
