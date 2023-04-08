import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginInstitute, loginStudent, loginUser } from "../config/firebasemethods";
// import '../App.css';

function Login() {
  const [model, setModel] = useState({});

  let signIn = () => {
    loginInstitute(model)
      .then((res) => {
        console.log(res);
        nav('institutedashboard')
      })
      .catch((err) => {
        console.log(err);
        loginUser(model)
        .then((reso) => {
          console.log(reso);
          nav('adminportal')
        })
        .catch((erro) => {
          console.log(erro);
          loginStudent(model)
          .then((resol) => {
            console.log(resol);
            nav('studentdashboard')
          })
          .catch((error) => {
            console.log(error);
          })
        })
      });
  };

  let nav = useNavigate()

  return (
    <>
    
      <div className="login" >
        <Box
          sx={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center "
        >
          <Box>
            <Typography variant="h3">Login</Typography>
            <Box className="p-2">
              <TextField
                onChange={(e) => setModel({ ...model, email: e.target.value })}
                variant="standard"
                label="Email"
                type="email"
              />
            </Box>
            <Box className="p-2">
              <TextField
                onChange={(e) => setModel({ ...model, password: e.target.value })}
                variant="standard"
                label="Password"
                type="password"
              />
            </Box>
            <Box className="p-4">
              <Button onClick={signIn} variant="contained">
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default Login;