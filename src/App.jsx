import Hello from "./components/Hello";
import CourseInfo from "./components/CourseInfo";
import StudentCard from "./components/StudentCard";
import PrimaryButton from "./components/PrimaryButton";
import Card from "./components/Card";
import Layout from "./components/Layout";
import StudentList from "./components/StudentList";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import CourseDetails from "./components/CourseDetails";
import LivePreview from "./components/LivePreview";
import TodoApp from "./components/TodoApp/TodoApp";
import StudentFilter from "./components/StudentFilter";

const students = [
  { id: 1, name: "Aida", group: "SE-101", track: "Front-end" },
  { id: 2, name: "Nurlan", group: "SE-102", track: "Back-end" },
  { id: 3, name: "Dastan", group: "SE-103", track: "DevOps" },
];

export default function App() {
  return (
    <Layout>
      <Hello />
      <CourseInfo />

      <StudentCard name="Aida" group="SE-101" track="Front-end" />
      <StudentCard name="Nurlan" group="SE-102" track="Back-end" />
      <StudentCard name="Dastan" group="SE-103" track="DevOps" />

      <PrimaryButton label="Login" />
      <PrimaryButton label="Register" type="secondary" />
      <PrimaryButton label="Submit" />

      <Card>
        <h3>Important Notice</h3>
        <p>Classes are online this Friday.</p>
      </Card>

      <StudentList students={students} />
      <Menu />

      <Counter />
      <CourseDetails />
      <LivePreview />
      <TodoApp />
      <StudentFilter students={students} />
    </Layout>
  );
}