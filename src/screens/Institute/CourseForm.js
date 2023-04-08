import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BSButton from "../../components/BSButton";
import BSInput from "../../components/BSInput";
import { postFbData } from "../../config/firebasemethods";
// import BSDatePicker from "../components/BSDatePicker";
// import BSRadio from "../components/BSRadio";
// import BSSelect from "../components/BSSelect"

function CourseForm() {
    const [model, setModel] = useState({});

    let nav = useNavigate();

    let createUser = () => {
        console.log(model);

        if(!model.courseName || !model.duration || !model.fees || !model.teacher){
           alert("Please fill all the required inputs")
       }else{
        postFbData("CourseList", model)
            .then((res) => {
                console.log(res);
                nav('../institutedashboard/courselist')
            })
            .catch((err) => {
                console.log(err);
            });
        }
    };

    return <> <Box>
        <Container>

            <Box style={{ textAlign: 'center', margin: '5px' }}>
                <Typography variant="h3">Course Form</Typography>
            </Box>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, courseName: e.target.value })}
                            variant="outlined"
                            label="Course Name"
                            fullWidth={true}
                            size="Normal"
                            required={true}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, duration: e.target.value })}
                            variant="outlined"
                            label="Duration"
                            fullWidth={true}
                            size="Normal" 
                            required={true}/>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, fees: e.target.value })}
                            variant="outlined"
                            label="Fees in rupees"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, teacher: e.target.value })}
                            variant="outlined"
                            label="Teacher"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
            </Grid>

            <Box className="p-3" style={{ margin: '5px' }} align="center">
                <BSButton title="Register" variant="contained" size="normal"
                onClick={createUser} 
                />
            </Box>
        </Container>
    </Box>
    </>
}

export default CourseForm;