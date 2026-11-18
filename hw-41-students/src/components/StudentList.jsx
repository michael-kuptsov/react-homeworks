import { useState } from "react";

function StudentList({ students }) {
  const [studentList, setStudentList] = useState(students);
  function deleteStudentById(id) {
    setStudentList(studentList.filter((student) => student.id !== id));
  }
  function AddStudent(student) {
    if (
      !student.name ||
      !student.age ||
      !student.course ||
      student.age <= 0 ||
      student.age > 120
    ) {
      return;
    }
    setStudentList([...studentList, student]);
  }
  return (
    <div className="student-list">
      {studentList.map((student) => (
        <p key={student.id} className="student">
          {student.name} {<br />} {student.age} - {student.course}
        </p>
      ))}
      <div className="form-row">
        <input type="number" placeholder="ID" id="delete-id" />
        <button
          onClick={() =>
            deleteStudentById(
              Number(document.getElementById("delete-id").value),
            )
          }
        >
          Delete Student by ID
        </button>
      </div>
      <div className="form-row">
        <input type="text" placeholder="Name" id="add-name" required />
        <input type="number" placeholder="Age" id="add-age" required />
        <input type="text" placeholder="Course" id="add-course" required />
        {/* required тут по итогу не нужен так как есть проверки заранее(спросить у Матвея по поводу этого) */}
        <button
          onClick={() =>
            AddStudent({
              name: document.getElementById("add-name").value,
              age: Number(document.getElementById("add-age").value),
              course: document.getElementById("add-course").value,
              id: Math.max(0, ...studentList.map((s) => s.id)) + 1,
            })
          }
        >
          Add Student
        </button>
      </div>
    </div>
  );
}

export default StudentList;
