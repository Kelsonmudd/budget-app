import React, {useState} from 'react';
import './App.css';

function App() {
  const [totalBudget, setTotalBudget] = useState('')

  return (
    <div className="App">
      <h1>{totalBudget !== '' ? `Your Total Budget:  $${totalBudget}` : `Set your budget below`}</h1>
      <input
      type="text"
      name="budgetInput"
      placeholder="Enter Budget Amount"
      value={totalBudget}
      onChange={event => setTotalBudget(event.target.value.replace(/[^\d]/,''))}
      />
    </div>
  );
}

export default App;
//document.body.innerHTML = number.toLocaleString();
//MyNumberAsString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
