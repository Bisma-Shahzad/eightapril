import { useLocation } from "react-router-dom";

function StudentDetails () {
    const location = useLocation();
    const data = location.state;
    console.log(data)

    return <>
        <h1>StudentDetails</h1>
    </>
}

export default StudentDetails;