import React from 'react';

const RubiksCubeLoader = () => {
  return (
    <div className="w-52 h-52 perspective-1000 mx-auto my-24">
      <div className="relative w-full h-full transform-style-3d animate-rotateCube">
        {/* Define the six faces of the Rubik's Cube */}
        <Face className="front" />
        <Face className="back" />
        <Face className="left" />
        <Face className="right" />
        <Face className="top" />
        <Face className="bottom" />
      </div>
    </div>
  );
};

const Face = ({ className }) => {
  const colors = ['#ff3d00', '#ffeb3b', '#4caf50', '#2196f3', '#ffffff', '#ffeb3b', '#4caf50', '#2196f3', '#ff3d00'];

  return (
    <div className={`absolute w-full h-full grid grid-cols-3 grid-rows-3 ${className}`}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="w-full h-full border border-black box-border"
        ></div>
      ))}
    </div>
  );
};

export default RubiksCubeLoader;
