import { Route, Routes } from "react-router-dom";
import ColorThemeSet from "./ColorThemeset";
import InstituteForm from "./InstituteForm";
import Payment from "./Payment";
import InstituteList from "./InstituteList";
import BSSideNav from "../../components/BSSideNav";

function AdminDashboard() {
    return <>
        <BSSideNav menuList={([
    {
        name: "Institute List",
        route: "institutelist",
    },
    {
        name: "Institute Form",
        route: "instituteform",
    },
    {
        name: "Color Themeset",
        route: "colorthemeset",
    },
    {
        name: "Payment Details",
        route: "payment",
    },
])} title="Admin Dashboard" Router={<Routes><Route path='colorthemeset' element={<ColorThemeSet />} />
<Route path='instituteform' element={<InstituteForm />} />
<Route path='payment' element={<Payment />} />
<Route path='institutelist' element={<InstituteList />} />
</Routes>} />
        
        
    </>
}

export default AdminDashboard;