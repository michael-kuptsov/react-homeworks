import "./App.css";
import StudentList from "./components/StudentList";
import { students } from "./data/Students";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import DeleteStudentById from "./components/DeleteStudentById";
// import AddStudent from "./components/AddStudent";
function App() {
  return (
    <>
      <Header />
      <StudentList students={students} />
      {/* <DeleteStudentById students={students} id={1} /> Неверное решение,сам себе усложняю жизнь */}
      <Footer />
    </>
  );
}

export default App;
