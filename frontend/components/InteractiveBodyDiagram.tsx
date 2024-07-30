// src/components/InteractiveBodyDiagram.tsx
import React from 'react';
import { G, Image, Path, Svg, Rect } from 'react-native-svg';
import imageData from '../assets/imagebodyPaths'; // Adjust the path as needed

interface InteractiveBodyDiagramProps {
  selectedAreas: string[];
  toggleArea: (area: string) => void;
  dimensions: { width: number; height: number };
}

const InteractiveBodyDiagram: React.FC<InteractiveBodyDiagramProps> = ({ selectedAreas, toggleArea, dimensions }) => {
  const isSelected = (area: string) => selectedAreas.includes(area);

  return (
    <Svg width={dimensions.width} height={dimensions.height} viewBox="0 0 300 1000">
      <Path d={imageData.diagram} />

      {Object.keys(imageData).filter(key => key !== 'diagram').map((key) => {
        const { href, width, height, transform } = imageData[key] as any;  // Ensure this matches your data structure
        return (
          <G key={key} id={key} onPress={() => toggleArea(key)}>
            <Image
              href={href}
              width={width}
              height={height}
              opacity={isSelected(key) ? 1 : 0}
              transform={transform}
            />
            {isSelected(key) && (
              <Rect
                width={width}
                height={height}
                fill="transparent"
                fillOpacity="0.5"  // Adjusted for visible selection indication
              />
            )}
          </G>
        );
      })}
    </Svg>
  );
};

export default InteractiveBodyDiagram;
