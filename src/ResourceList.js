import React from 'react';

const ResourceList = ({ resources, onResourceSelect, onResourceEdit, onResourceDelete }) => {
  return (
    <div>
      <h2>Resources:</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <span onClick={() => onResourceSelect(resource)}>{resource.name}</span>
            <button onClick={() => onResourceEdit(resource)}>Edit</button>
            <button onClick={() => onResourceDelete(resource)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
