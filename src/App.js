import React, { useState } from 'react';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [insertIndex, setInsertIndex] = useState(0); // position to insert at

  // Insert ingredient at chosen index
  const addIngredient = (type) => {
    const updated = [...ingredients];
    updated.splice(insertIndex, 0, type); // insert at index
    setIngredients(updated);
  };

  // Remove last ingredient
  const removeLast = () => {
    const updated = [...ingredients];
    updated.pop();
    setIngredients(updated);
  };

  const renderLayer = (type, index) => {
    switch (type) {
      case 'tomato':
        return <div key={index} className="layer tomato">Tomato</div>;
      case 'meat':
        return <div key={index} className="layer meat">Meat</div>;
      case 'lettuce':
        return <div key={index} className="layer lettuce">Lettuce</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>ACA Burger</h1>

      <div className="burger">
        <div className="layer top-bread">Top Bread</div>
        {ingredients.map((type, index) => renderLayer(type, index))}
        <div className="layer base-bread">Bottom Bread</div>
      </div>

      <div className="controls">
        <h3>Add Ingredient at Position</h3>
        <input
          type="number"
          min="0"
          max={ingredients.length}
          value={insertIndex}
          onChange={(e) => setInsertIndex(Number(e.target.value))}
        />
        <button onClick={() => addIngredient('tomato')}>Add Tomato</button>
        <button onClick={() => addIngredient('meat')}>Add Meat</button>
        <button onClick={() => addIngredient('lettuce')}>Add Lettuce</button>

        <h3>Actions</h3>
        <button onClick={removeLast}>Remove Last Ingredient</button>
        <button onClick={() => setIngredients([])}>Clear Burger</button>
      </div>
    </div>
  );
}

export default App;
