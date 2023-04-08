import { Route, Routes } from "react-router-dom";
import BSSideNav from "../../components/BSSideNav";
import AddQuiz from "./AddQuiz";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import Quiz from "./Quiz";
import RegistrationControl from "./RegistrationControl";
import Resultinstitute from "./Resultinstitute";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentDetails from "./StudentsDetails";

function InstituteDashboard() {
    return <>
        <BSSideNav menuList={([
            {
                name: "Course List",
                route: "courselist",
            },
            {
                name: "Registration Control",
                route: "registrationcontrol",
            },
            {
                name: "Result",
                route: "result",
            },
            {
                name: "Student List",
                route: "studentlist",
            },
            {
                name: "Quiz",
                route: "quiz",
            },
        ])} title="Institute Dashboard" Router={<Routes>
            <Route path="courselist/*" element={<CourseList />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="registrationcontrol" element={<RegistrationControl />} />
            <Route path="studentlist" element={<StudentList />} />
            <Route path="addquiz" element={<AddQuiz />} />
            <Route path="resultinstitute" element={<Resultinstitute />} />
            <Route path="studentform" element={<StudentForm />} />
            <Route path="studentsdetails" element={<StudentDetails />} />
        </Routes>} />


    </>
}

export default InstituteDashboard;