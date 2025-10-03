import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "", grade: "" });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.grade) return;

    setStudents([...students, formData]);
    setFormData({ name: "", age: "", grade: "" });
  };

  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px", fontFamily: "Arial" }}>

      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
   
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

     
        <select name="grade" value={formData.grade} onChange={handleChange}>
          <option value="">Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <button type="submit">Add Student</button>
      </form>


      {students.length === 0 && <p>No students added yet.</p>}

      {students.length > 0 && (
        <table border="1" style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>
            
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
