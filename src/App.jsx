
import { useState } from 'react';
import './App.css';

const initialData = [
  { id: 1, user: 'Alice', role: 'Admin', resource: 'Server', access: 'Full' },
  { id: 2, user: 'Bob', role: 'Editor', resource: 'Database', access: 'Read' },
  { id: 3, user: 'Charlie', role: 'Viewer', resource: 'Server', access: 'Read' },
  { id: 4, user: 'Dana', role: 'Admin', resource: 'Database', access: 'Full' },
];

function App() {
  const [roleFilter, setRoleFilter] = useState('');
  const [resourceFilter, setResourceFilter] = useState('');

  const filteredData = initialData.filter(row => {
    return (
      (roleFilter === '' || row.role === roleFilter) &&
      (resourceFilter === '' || row.resource === resourceFilter)
    );
  });

  const roles = [...new Set(initialData.map(row => row.role))];
  const resources = [...new Set(initialData.map(row => row.resource))];

  return (
    <div className="acl-page">
      <h1>Access Control List (ACL)</h1>
      <div className="filters">
        <label>
          Role:
          <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
            <option value="">All</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </label>
        <label>
          Resource:
          <select value={resourceFilter} onChange={e => setResourceFilter(e.target.value)}>
            <option value="">All</option>
            {resources.map(resource => (
              <option key={resource} value={resource}>{resource}</option>
            ))}
          </select>
        </label>
      </div>
      <table className="acl-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Resource</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.user}</td>
              <td>{row.role}</td>
              <td>{row.resource}</td>
              <td>{row.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
