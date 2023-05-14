import React, { useState } from 'react';
import './App.css';
import ResourceList from './ResourceList';

function App() {
  const [resources, setResources] = useState([
    { id: 1, name: 'Resource 1', description: 'Description 1' },
    { id: 2, name: 'Resource 2', description: 'Description 2' },
    { id: 3, name: 'Resource 3', description: 'Description 3' },
  ]);

  const handleEditClick = (resource) => {
    console.log(`Edit button clicked for resource with id ${resource.id}`);
    // handle edit logic here
  };

  const handleDeleteClick = (resource) => {
    console.log(`Delete button clicked for resource with id ${resource.id}`);
    setResources(resources.filter((res) => res.id !== resource.id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ResourceList
          resources={resources}
          onResourceSelect={(resource) => console.log(`Selected resource with id ${resource.id}`)}
          onResourceEdit={handleEditClick}
          onResourceDelete={handleDeleteClick}
        />
      </header>
    </div>
  );
}

export default App;
