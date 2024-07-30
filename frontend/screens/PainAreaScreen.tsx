// src/screens/PainAreaScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InteractiveBodyDiagram from '../components/InteractiveBodyDiagram';

const PainAreaScreen = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 300, height: 500 });
  const navigation = useNavigation();

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
    setSelectedAreas((prev) => {
      const isNewSelection = prev.includes(area);
      return isNewSelection ? prev.filter((a) => a !== area) : [...prev, area];
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>If there is an area you feel pain, please select it. If not, please skip.</Text>
      <View style={styles.diagramContainer}>
        <InteractiveBodyDiagram
          selectedAreas={selectedAreas}
          toggleArea={toggleArea}
          dimensions={dimensions}
        />
      </View>
      <Button title="Skip" onPress={() => console.log(selectedAreas)} color="#f0a500" />
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
