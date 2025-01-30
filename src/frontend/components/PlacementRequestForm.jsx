import { useState } from 'react';
import axios from 'axios';

const PlacementRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/placements', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Request submitted!');
    } catch (error) {
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default PlacementRequestForm;