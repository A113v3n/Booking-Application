// screens/PainAreaScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Svg, { Rect, G } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the type for the navigation prop
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AdminDashboard: undefined;
  AttendantDashboard: undefined;
  ClientDashboard: undefined;
  BookingScreen: undefined;
  BasicInfo: undefined;
  Pregnant: undefined;
  Pressure: undefined;
  PainArea: undefined;
};

type PainAreaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PainArea'>;
type PainAreaScreenRouteProp = RouteProp<RootStackParamList, 'PainArea'>;

type Props = {
  navigation: PainAreaScreenNavigationProp;
  route: PainAreaScreenRouteProp;
};

const PainAreaScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (area: string) => {
    console.log(`Toggling area: ${area}`); // Debugging statement
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const isSelected = (area: string) => {
    console.log(`Checking if ${area} is selected: ${selectedAreas.includes(area)}`); // Debugging statement
    return selectedAreas.includes(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>If there is an area you feel pain, please select it. If not, please skip.</Text>
      <View style={styles.diagramContainer}>
        <Svg height="400" width="200">
          <G>
            <Rect
              x="75"
              y="10"
              width="50"
              height="50"
              fill={isSelected('head') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('head')}
            />
            <Rect
              x="75"
              y="60"
              width="50"
              height="30"
              fill={isSelected('neck') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('neck')}
            />
            <Rect
              x="25"
              y="90"
              width="50"
              height="40"
              fill={isSelected('left shoulder') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left shoulder')}
            />
            <Rect
              x="125"
              y="90"
              width="50"
              height="40"
              fill={isSelected('right shoulder') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right shoulder')}
            />
            <Rect
              x="75"
              y="90"
              width="50"
              height="50"
              fill={isSelected('chest') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('chest')}
            />
            <Rect
              x="75"
              y="140"
              width="50"
              height="60"
              fill={isSelected('abdomen') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('abdomen')}
            />
            <Rect
              x="25"
              y="130"
              width="30"
              height="100"
              fill={isSelected('left arm') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left arm')}
            />
            <Rect
              x="145"
              y="130"
              width="30"
              height="100"
              fill={isSelected('right arm') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right arm')}
            />
            <Rect
              x="25"
              y="230"
              width="30"
              height="30"
              fill={isSelected('left hand') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left hand')}
            />
            <Rect
              x="145"
              y="230"
              width="30"
              height="30"
              fill={isSelected('right hand') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right hand')}
            />
            <Rect
              x="50"
              y="200"
              width="40"
              height="80"
              fill={isSelected('left upper leg') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left upper leg')}
            />
            <Rect
              x="110"
              y="200"
              width="40"
              height="80"
              fill={isSelected('right upper leg') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right upper leg')}
            />
            <Rect
              x="50"
              y="280"
              width="40"
              height="30"
              fill={isSelected('left knee') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left knee')}
            />
            <Rect
              x="110"
              y="280"
              width="40"
              height="30"
              fill={isSelected('right knee') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right knee')}
            />
            <Rect
              x="50"
              y="310"
              width="40"
              height="60"
              fill={isSelected('left lower leg') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left lower leg')}
            />
            <Rect
              x="110"
              y="310"
              width="40"
              height="60"
              fill={isSelected('right lower leg') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right lower leg')}
            />
            <Rect
              x="50"
              y="370"
              width="40"
              height="30"
              fill={isSelected('left foot') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('left foot')}
            />
            <Rect
              x="110"
              y="370"
              width="40"
              height="30"
              fill={isSelected('right foot') ? 'red' : 'transparent'}
              stroke="white"
              strokeWidth="2"
              onPressIn={() => toggleArea('right foot')}
            />
          </G>
        </Svg>
      </View>
      <Button title="Skip" onPress={() => {
        console.log(selectedAreas);
        // Handle submission of all data
      }} color="#f0a500" />
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
  diagramContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default PainAreaScreen;
