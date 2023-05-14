import React, { useState, useEffect } from 'react';
import ResourceForm from './ResourceForm';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';
import useResources from './useResources';

const Resource = () => {
  const [resources, setResources] = useState([]);
  const [selectedResourceId, setSelectedResourceId] = useState(null);
  const loadResources = useResources(setResources);

  // READ: load resources on mount
  useEffect(() => {
    loadResources();
  }, [loadResources]);

  const createResource = (name) => {
    fetch('https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        loadResources();
      })
      .catch(err => {
        console.error(err);
      });
  }

  const updateResource = (id, name) => {
    fetch(`https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1/resources/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        setSelectedResourceId(null);
        loadResources();
      })
      .catch(err => {
        console.error(err);
      });
  }

  const deleteResource = (id) => {
    fetch(`https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1/resources/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setSelectedResourceId(null);
        loadResources();
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <h1>Resources</h1>
      <ResourceForm onCreate={createResource} />
      <ResourceList resources={resources} onResourceSelect={id => setSelectedResourceId(id)} />
      {selectedResourceId !== null && (
        <ResourceDetail
          resource={resources.find(resource => resource.id === selectedResourceId)}
          onUpdate={updateResource}
          onDelete={deleteResource}
        />
      )}
    </div>
  );
}

export default Resource;
