import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const PainAreaScreen = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const navigation = useNavigation();

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const isSelected = (area: string) => selectedAreas.includes(area);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>If there is an area you feel pain, please select it. If not, please skip.</Text>
      <View style={styles.diagramContainer}>
        <Svg
          height="400"
          width="200"
          viewBox="0 0 200 300"
        >
          <Path
            id="head"
            d="M72.2,28.4c-1.8-9.2,4.2-16.7,5.4-18.2,5.6-6.6,14.6-9.9,23.3-8.5,1.2.2,13.4,2.4,18.4,13.3.8,1.7,4.3,10.1,0,17.7-2.5,4.4-6.4,6.4-7.5,7-3.6,1.8-5.8,1.4-19.2.7-10.6-.5-12.6-.4-15.1-2.4-4-3.1-5-7.9-5.3-9.5Z"
            fill={isSelected('head') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('head')}
          />
          <Path
            id="neck"
            d="M83.3,45.9c-.9,2-.3,4.6-.2,5.1.9,3.7,3.8,5.6,4.8,6.3,4.1,2.8,9.8,3.1,14.3.9,1.1-.6,4.8-2.5,6.1-6.6.2-.7,1.1-3.5,0-5.8-3.2-6.6-22-6.3-25,.2Z"
            fill={isSelected('neck') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('neck')}
          />
          <Path
            id="right-shoulder"
            d="M113.4,45.6c1.5-.9,6.1-3.3,12.1-2.4.8.1,9.5,1.6,13.6,9.7.5.9,4.3,8.9.3,15-4.8,7.4-18.1,7.7-24.5,1.9-4-3.6-5-9.3-5.3-10.9-.3-1.8-.7-4.3.2-7.3.9-3,2.6-5,3.6-6Z"
            fill={isSelected('right-shoulder') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-shoulder')}
          />
          <Path
            id="left-shoulder"
            d="M80.3,71.3c-1.5.9-6.1,3.3-12.1,2.4-.8-.1-9.5-1.6-13.6-9.7-.5-.9-4.3-8.9-.3-15,4.8-7.4,18.1-7.7,24.5-1.9,4,3.6,5,9.3,5.3,10.9.3,1.8.7,4.3-.2,7.3-.9,3-2.6,5-3.6,6Z"
            fill={isSelected('left-shoulder') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-shoulder')}
          />
          <Path
            id="chest"
            d="M86.2,63.5c2-1.8,4.1-2.2,8.2-2.9,5.3-.9,9.7-1.7,13.1.9,1.9,1.4,2.7,3.3,3.9,6.3,1.6,3.9,3.1,7.6,1.7,10.2-1.7,3.2-7.7,2.9-19.6,2.4-6.5-.3-9.6-1-10.8-3.2-.8-1.3-.6-2.8-.4-4.8.2-1.5.6-5.9,3.9-8.9Z"
            fill={isSelected('chest') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('chest')}
          />
          <Path
            id="right-arm"
            d="M119.2,78.8c1.2-1.4,2.6-2,5.6-3.1,3.2-1.2,8.7-3.2,13.1-1.4,1.8.7,3.8,2.2,7.7,11.7,5.4,13.3,8.2,19.9,5.1,25.7-1,1.9-1.2.9-8.2,7.5-7.1,6.7-8.8,9.5-11.4,9.2-.9-.1-2.8-.7-5.8-7.5-4-9.1-2.6-12.9-5.1-25.7-1.8-9-3.7-13.2-1-16.5Z"
            fill={isSelected('right-arm') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-arm')}
          />
          <Path
            id="left-arm"
            d="M50.4,81.9c.6-2,1.7-5.4,4.8-7.3,4.2-2.6,10.8-1.9,14.5,1.7,1.9,1.9,2.6,4.1,3.1,5.8,2.9,11.1,0,22.3-1.7,27.7-3.5,11.5-5.7,18.5-11.2,19.9-5.2,1.3-11.9-2.6-12.9-3.2-1.3-.7-3.4-2-4.9-3.9-4.5-5.6-.5-12.3,8.5-40.7Z"
            fill={isSelected('left-arm') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-arm')}
          />
          <Path
            id="abdomen"
            d="M76.8,88.7c3.8-4.5,8.7-5.9,12.1-7,3.1-1,12.2-3.7,20.3,1.2,1,.6,3.8,2.4,6,5.8,4,6,.2,10.9,0,24.9-.1,9.5,1.4,10.3-.2,13.1-4.3,7.7-20.5,10.4-31,3.6-7.1-4.7-9.3-12.3-10.4-16.2-.8-3-4.6-16.2,3.2-25.4Z"
            fill={isSelected('abdomen') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('abdomen')}
          />
          <Path
            id="left-upper-leg"
            d="M69.9,171.4c.7.4,4.2,1.6,11.2,3.9,2.3.8,4,1.3,6.1.9,3-.6,4.8-2.9,5.8-4.1,5.8-7.3,9.8-24.9,1.6-33.5-2-2.1-4.7-3.7-4.8-3.8-4.5-2.7-6.2-1.6-11.9-4.4-1.7-.9-9.2-5.1-6.4-3.6h0s-4.5,3.7-5.5,4.6c-5.4,4.9-4.9,15.1-4.8,18.6.2,4.5.8,16.4,8.7,21.4Z"
            fill={isSelected('left-upper-leg') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-upper-leg')}
          />
          <Path
            id="right-upper-leg"
            d="M122.4,177.9c7.2-3.7,8.8-11.9,10.2-19.2,2.3-11.6-.9-20.4-2.7-25.2-1.8-4.8-3.7-9.7-6.8-10-4.1-.4-5.4,7.3-13.6,10.4-5,1.8-7.3,0-9.2,2.2-2.9,3.2.9,8.8,1.5,17.7.6,8.4-4.5,11-2.4,16.5,1.5,4.1,5,6.2,6.3,7,5.1,3.1,11.8,3.2,16.7.7Z"
            fill={isSelected('right-upper-leg') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-upper-leg')}
          />
          <Path
            id="right-hand"
            d="M154.4,154.9c5.5-1.6,8.9-6.9,10-11.4,2.7-10.4-6.6-18.7-7.1-19.2-1.7-1.5-4.8-4.2-9.4-4.4-7.1-.4-14,5.6-15.8,12.3-2.9,10.9,8.3,21.9,17,23.1,2.7.4,4.8-.2,5.3-.3Z"
            fill={isSelected('right-hand') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-hand')}
          />
          <Path
            id="left-hand"
            d="M44.1,158c3.3-1.3,12.5-5.1,13.6-12.9.9-6.1-3.6-11.1-6.3-14.1-2.6-2.9-7.1-8-14.5-8.3-6.2-.3-12.5,2.8-15.8,7.8-6.6,9.9-.5,25.8,9,29.3,5.2,1.9,10.4-.3,14-1.7Z"
            fill={isSelected('left-hand') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-hand')}
          />
          <Path
            id="right-knee"
            d="M99.6,182.8c1.4-1.5,2.5-1,13.3-2,8.6-.8,11-1.5,13.1.3,1.9,1.7,2.3,4.3,2.7,7.1.2,1.5.9,6.1-.9,9.4-3.7,7-18.9,9.7-26,2.4-4.6-4.7-5.8-13.5-2.2-17.2Z"
            fill={isSelected('right-knee') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-knee')}
          />
          <Path
            id="left-knee"
            d="M63.9,184c3.2-5.3,9.4-6.3,13.6-7,6.6-1,12.1.6,15.3,1.9,4.1,7,3.6,15.4-1,20.3-5.5,5.9-14.5,4.1-17.2,3.6-3.2-.6-8.6-1.7-11.2-6.6-2.1-4-1.4-8.8.5-12.1Z"
            fill={isSelected('left-knee') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-knee')}
          />
          <Path
            id="left-lower-leg"
            d="M122.3,240.2c6.1-3.1,6.8-10.8,7.5-19.2.4-4.6,1.2-14-3.1-16.2-3.6-1.8-7,3.7-14.5,2.9-6-.6-8.5-4.7-10.4-3.4-2.2,1.5,1.1,6.9,1.2,17.7,0,7.7-1.6,9.1,0,12.3,2.9,5.7,12.6,9.3,19.2,6Z"
            fill={isSelected('left-lower-leg') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-lower-leg')}
          />
          <Path
            id="right-lower-leg"
            d="M64.9,211.1c3-4.4,7.9-5.6,9.4-6,2.8-1.2,11.4-4.7,15.5-1,2.3,2.1,1.4,4.9,1.4,18.9,0,10.7.6,12.4-1.2,14.6-3.7,4.7-12.8,5.3-18.9,1.9-9.5-5.3-8.6-18.4-8.5-20.4.1-2.1.4-5,2.4-8Z"
            fill={isSelected('right-lower-leg') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-lower-leg')}
          />
          <Path
            id="right-foot"
            d="M123.8,273.7c10.6,0,23.1-7.1,23.1-15.1,0-8.4-13.4-13.9-17.2-15.5-3.7-1.5-18.5-7.6-26.6.2-4.8,4.7-4.3,11.7-4.3,12.1,1,10.5,13.7,18.4,24.9,18.4Z"
            fill={isSelected('right-foot') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('right-foot')}
          />
          <Path
            id="left-foot"
            d="M53.3,247.7c2.8-3.7,9.7-4,23.7-4.4,10.9-.4,12.9.9,13.8,1.7,5.8,4.8,5.6,17.8-1.2,25.7-6,7.1-16.5,9.2-24.7,5.6-12.1-5.2-16.6-21.8-11.6-28.6Z"
            fill={isSelected('left-foot') ? 'red' : 'none'}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onPress={() => toggleArea('left-foot')}
          />
        </Svg>
      </View>
      <Button
        title="Skip"
        onPress={() => {
          console.log(selectedAreas);
          // Handle submission of all data
        
        }}
        color="#f0a500"
      />
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
