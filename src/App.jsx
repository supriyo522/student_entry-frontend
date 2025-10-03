import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "", grade: "" });
  const [students, setStudents] = useState([]);

  // Handle input/select change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.grade) return;

    setStudents([...students, formData]);
    setFormData({ name: "", age: "", grade: "" });
  };

  // Remove student
  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px", fontFamily: "Arial" }}>
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginLeft: "5px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>
            Age
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={{ marginLeft: "5px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>
            Grade
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              style={{ marginLeft: "5px" }}
            >
              <option value="">Grade</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>

        <button type="submit">Add Student</button>
      </form>

      {students.length === 0 && <p>No students added yet.</p>}

      {students.length > 0 && (
        <table
          border="1"
          style={{ margin: "0 auto", borderCollapse: "collapse", minWidth: "300px" }}
        >
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
                <td>{`Class ${student.grade}`}</td>
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
