import React, { useState } from 'react';
import './App.css';
import ResourceList from './ResourceList';
import ResourceForm from './ResourceForm'; // add this line to import ResourceForm

function App() {
  const [resources, setResources] = useState([
    { id: 1, name: 'Resource 1', description: 'Description 1' },
    { id: 2, name: 'Resource 2', description: 'Description 2' },
    { id: 3, name: 'Resource 3', description: 'Description 3' },
  ]);

  const [selectedResource, setSelectedResource] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleResourceSelect = (resource) => {
    setSelectedResource(resource);
    setEditing(false);
  };

  const handleEditClick = (resource) => {
    setSelectedResource(resource);
    setEditing(true);
  };

  const handleResourceDelete = (resource) => {
    setResources(resources.filter((res) => res.id !== resource.id));
    setSelectedResource(null);
    setEditing(false);
  };

  const handleResourceUpdate = (resource) => {
    const updatedResources = resources.map((res) =>
      res.id === resource.id ? resource : res
    );
    setResources(updatedResources);
    setSelectedResource(null);
    setEditing(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ResourceList
          resources={resources}
          selectedResource={selectedResource}
          onResourceSelect={handleResourceSelect}
          onEditClick={handleEditClick}
          onDeleteClick={handleResourceDelete}
        />
        {editing && (
          <ResourceForm
            resource={selectedResource}
            onSave={handleResourceUpdate}
            onCancel={() => setEditing(false)}
          />
        )}
      </header>
    </div>
  );
}

export default App;
