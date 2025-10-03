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

  return (
    <div style={{ textAlign: "center", marginTop: "30px", fontFamily: "Arial" }}>
      <h1>Student Entry Form</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Enter grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>

      {students.length > 0 && (
        <table border="1" style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
