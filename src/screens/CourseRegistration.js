import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BSButton from "../components/BSButton";
import BSInput from "../components/BSInput";
import BSDatePicker from "../components/BSDatePicker";
import BSRadio from "../components/BSRadio";
import BSSelect from "../components/BSSelect"
import { getData, postFbData } from "../config/firebasemethods";

function CourseRegistration() {
    const [model, setModel] = useState({});
    const [loader, setLoader] = useState(false)
    const [registrationStatus, setRegistrationStatus] = useState({
        registrationOpen: false,
    })

    let nav = useNavigate();

    let createUser = () => {
        console.log(model);

        if(!model.studentName || !model.fatherName || !model.contact || !model.cnic || !model.lastQualification
            || !model.section || !model.email || !model.password || !model.address
           || !model.city || !model.country || !model.gender){
           alert("Please fill all the required inputs")
       }else{
        postFbData("CourseRegistration", model)
            .then((res) => {
                console.log(res);
                nav('/formsubmit');
            })
            .catch((err) => {
                console.log(err);
            });
        }
    };

    const getStatus = () => {
        setLoader(true)
        getData("coursecontrol")
            .then((res) => {
                console.log(res)
                setLoader(false)
                setRegistrationStatus({ ...res })
            })
            .catch((err) => {
                setLoader(false)
                console.log(err)
            })
    }

    useEffect(() => {
        getStatus()
    }, [])
    return (<>
        {loader ? <h1>Loading...</h1> : registrationStatus.registrationOpen ?
            <Box>
                <Container>


                    <Box style={{ textAlign: 'center', margin: '5px' }}>
                        <Typography variant="h3">Registration Form</Typography>
                    </Box>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, studentName: e.target.value })}
                                    variant="outlined"
                                    label="Student Name"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, fatherName: e.target.value })}
                                    variant="outlined"
                                    label="Father Name"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, contact: e.target.value })}
                                    variant="outlined"
                                    label="Contact"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, cnic: e.target.value })}
                                    variant="outlined"
                                    label="CNIC"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSSelect label="Last Qualification" fullWidth={true}
                                    searchList={
                                        [
                                            {
                                                displayName: "Matric",
                                                key: "matric",
                                            },
                                            {
                                                displayName: "Intermediate",
                                                key: "intermediate",
                                            },
                                            {
                                                displayName: "Undergraduate",
                                                key: "undergraduate",
                                            }, {
                                                displayName: "Graduate",
                                                key: "graduate",
                                            },
                                            {
                                                displayName: "Masters",
                                                key: "masters",
                                            },
                                        ]}
                                    selectedval={(selectVal) => {
                                        setModel({ ...model, lastQualification: selectVal })
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSSelect label="Course" fullWidth={true}
                                    searchList={[]}
                                    selectedval={(selectVal) => {
                                        setModel({ ...model, course: selectVal })
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSSelect label="Section" fullWidth={true}
                                    searchList={
                                        [
                                            {
                                                displayName: "A (Morning)",
                                                key: "a",
                                            },
                                            {
                                                displayName: "B (Evening)",
                                                key: "b",
                                            },
                                        ]}
                                    selectedval={(selectVal) => {
                                        setModel({ ...model, section: selectVal })
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, email: e.target.value })}
                                    variant="outlined"
                                    label="Email"
                                    type="email"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, password: e.target.value })}
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSInput
                                    onChange={(e) => setModel({ ...model, address: e.target.value })}
                                    variant="outlined"
                                    label="Address"
                                    fullWidth={true}
                                    size="Normal"
                                    required={true} />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSSelect label="City" fullWidth={true}
                                    searchList={
                                        [
                                            {
                                                displayName: "Karachi",
                                                key: "karachi",
                                            },
                                            {
                                                displayName: "Lahore",
                                                key: "lahore",
                                            },
                                        ]}
                                    selectedval={(selectVal) => {
                                        setModel({ ...model, city: selectVal })
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box className="p-3">
                                <BSSelect label="Country" fullWidth={true}
                                    searchList={
                                        [
                                            {
                                                displayName: "Pakistan",
                                                key: "pakistan",
                                            },
                                        ]}
                                    selectedval={(selectVal) => {
                                        setModel({ ...model, country: selectVal })
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <BSDatePicker label="Date of Birth" />
                    <Box className="p-3">
                        <BSRadio title="Gender" options={
                            [
                                {
                                    displayName: "Female",
                                    key: "female",
                                },
                                {
                                    displayName: "Male",
                                    key: "male",
                                },
                            ]} onChange={(e) => setModel({ ...model, gender: e.target.value })} />
                    </Box>


                    <Box className="p-3" style={{ margin: '5px', marginBottom: '20px' }} align="center">
                        <BSButton title="Register" variant="contained" size="normal"
                        onClick={createUser}
                        />
                    </Box>

                </Container>
            </Box>
            : <h1>No data found</h1>}
    </>)
}

export default CourseRegistration;