import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../screens/AdminScreens/AdminDashboard";
import InstituteForm from "../screens/AdminScreens/InstituteForm";
import Payment from "../screens/AdminScreens/Payment";
import AddQuiz from "../screens/Institute/AddQuiz";
import CourseForm from "../screens/Institute/CourseForm";
import CourseList from "../screens/Institute/CourseList";
import InstituteDashboard from "../screens/Institute/InstituteDashboard";
import Quiz from "../screens/Institute/Quiz";
import RegistrationControl from "../screens/Institute/RegistrationControl";
import StudentForm from "../screens/Institute/StudentForm";
import StudentList from "../screens/Institute/StudentList";
import StudentDetails from "../screens/Institute/StudentsDetails";
import Login from "../screens/Login";
import InstituteList from "../screens/AdminScreens/InstituteList";
import StudentDashboard from "../screens/StudentScreens/StudentDashboard";
import CourseRegistration from "../screens/CourseRegistration";
import Result from "../screens/Result";
import Resultinstitute from "../screens/Institute/Resultinstitute";
import CourseSubmission from "../screens/CourseSubmission";

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="adminportal/*" element={<AdminDashboard />} />
                    <Route path="/" element={<Login />} />
                    <Route path="institutedashboard/*" element={<InstituteDashboard />} />
                    <Route path="studentdashboard/*" element={<StudentDashboard />} />
                    <Route path="courseregistration" element={<CourseRegistration />} />
                    <Route path="result" element={<Result />} />
                    <Route path="formsubmit" element={<CourseSubmission />} />
                    <Route path="courseform" element={<CourseForm />} />
                    <Route path="studentform" element={<StudentForm />} />
                    <Route path="studentdetails" element={<StudentDetails />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;