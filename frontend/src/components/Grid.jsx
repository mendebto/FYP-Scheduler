import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styling

const Grid = () => {
  const [selectedCells, setSelectedCells] = useState([]);

  // Function to handle cell selection
  const handleCellClick = (row, col) => {
    const cell = `${row}-${col}`;
    setSelectedCells(prevSelectedCells => {
      if (prevSelectedCells.includes(cell)) {
        return prevSelectedCells.filter(selectedCell => selectedCell !== cell);
      } else {
        return [...prevSelectedCells, cell];
      }
    });
  };

  // Generate grid cells
  const renderGrid = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) { // Change 5 to desired number of rows
      const cols = [];
      for (let j = 0; j < 5; j++) { // Change 5 to desired number of columns
        const cellKey = `${i}-${j}`;
        const isSelected = selectedCells.includes(cellKey);
        cols.push(
          <div
            key={cellKey}
            className={`cell ${isSelected ? 'selected' : ''}`}
            onClick={() => handleCellClick(i, j)}
          >
            {/* You can put content or styles for cell here */}
          </div>
        );
      }
      rows.push(<div key={i} className="row">{cols}</div>);
    }
    return rows;
  };

  return (
    <div className="grid">
      {renderGrid()}
    </div>
  );
};

export default Grid;
