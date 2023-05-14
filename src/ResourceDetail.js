import React, { useState } from 'react';

const ResourceDetail = ({ resource, onUpdate, onDelete }) => {
  const [updatedResourceName, setUpdatedResourceName] = useState('');

  const handleUpdate = () => {
    fetch(`https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1/resources/${resource.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: updatedResourceName })
    })
      .then(res => {
        if (res.ok) {
          onUpdate(resource.id, updatedResourceName);
          setUpdatedResourceName('');
        } else {
          throw new Error('Failed to update resource');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  const handleDelete = () => {
    fetch(`https://6444048f466f7c2b4b5fbc96.mockapi.io/api/v1/resources/${resource.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          onDelete(resource.id);
        } else {
          throw new Error('Failed to delete resource');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <label htmlFor="updated-resource-name">Updated Resource Name:</label>
      <input id="updated-resource-name" type="text" value={updatedResourceName} onChange={e => setUpdatedResourceName(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ResourceDetail;
