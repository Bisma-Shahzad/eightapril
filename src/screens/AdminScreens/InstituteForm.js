import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BSButton from "../../components/BSButton";
import BSInput from "../../components/BSInput";
import BSSelect from "../../components/BSSelect";
import { getFbData, postFbData, signUpInstitute, signUpUser } from "../../config/firebasemethods";
import BSSwitch from "../../components/BSSwitch";
import { useLocation } from 'react-router-dom';


function InstituteForm() {
    const [model, setModel] = useState({
        // instituteName: "",
        // instituteShortName: "",
        // noOfCampus: "",
        // instituteType: "",
        // category: "",
        // campusDetails: [],
    });
    const [campusDetails, setCampusDetails] = useState({});
    const [campus, setCampus] = useState([]);
    const [count, setCount] = useState(0);
    const [listData, setListData] = useState([]);

    const location = useLocation();
    const data = location.state;

    let add = () => {
        console.log(campusDetails)
        setCampus([...campus, campusDetails])

        setModel({ ...model, campusesDetails: campus })
        console.log(model)
    }

    let nav = useNavigate();

    let createUser = () => {
        console.log(model);
        console.log(campus)

        if (!model.instituteName || !model.instituteShortName || !model.noOfCampus || !model.instituteType || !model.category
            || !campusDetails.contact || !model.email || !model.password || !campusDetails.address
            || !campusDetails.city || !campusDetails.ownerContact || !campusDetails.ownerEmail) {
            alert("Please fill all the required inputs");
        }
        else {
            signUpInstitute(model)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            postFbData("Institute", model)
                .then((res) => {
                    console.log(res);
                    nav('../')
                })
                .catch((err) => {
                    console.log(err);
                });
            // signUpUser("Institutelogin")
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
        }
    };
    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        createUser();
    }, [count]);

    return <> <Box>
        <Container>

            <Box style={{ textAlign: 'center', margin: '5px' }}>
                <Typography variant="h3">Institute Form</Typography>
            </Box>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, instituteName: e.target.value })}
                            variant="outlined"
                            label="Institute Name"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, instituteShortName: e.target.value })}
                            variant="outlined"
                            label="Institute Short Name"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, noOfCampus: e.target.value })}
                            variant="outlined"
                            label="No. of Campus"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
            </Grid>


            <Box style={{ textAlign: 'center', margin: '5px' }}>
                <Typography variant="h4">Campus Details</Typography>
            </Box>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setCampusDetails({ ...campusDetails, city: e.target.value })}
                            variant="outlined"
                            label="City"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setCampusDetails({ ...campusDetails, address: e.target.value })}
                            variant="outlined"
                            label="Address"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setCampusDetails({ ...campusDetails, contact: e.target.value })}
                            variant="outlined"
                            label="Contact No"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setCampusDetails({ ...campusDetails, ownerContact: e.target.value })}
                            variant="outlined"
                            label="Owner Contact"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setCampusDetails({ ...campusDetails, ownerEmail: e.target.value })}
                            variant="outlined"
                            label="Owner Email"
                            type='email'
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
            </Grid>

            <Box className="p-3" style={{ margin: '5px', marginBottom: '20px' }} align="center">
                <BSButton title="Add Campus" variant="contained" onClick={add} size="normal" />
            </Box>

            <ul>
                {campus.map((x, i) => {
                    return (<li key={i}>
                        <Typography>City: {x.city}</Typography>
                        <Typography>Address: {x.address}</Typography>
                        <Typography>Contact: {x.contact}</Typography>
                        <Typography>Owner Contact: {x.ownerContact}</Typography>
                        <Typography>Owner Email: {x.ownerEmail}</Typography>
                    </li>
                    )
                })}
            </ul>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSSelect label="Select Institute Type" fullWidth={true}
                            searchList={
                                [
                                    {
                                        displayName: "School",
                                        key: "school",
                                    },
                                    {
                                        displayName: "College",
                                        key: "college",
                                    },
                                    {
                                        displayName: "University",
                                        key: "university",
                                    }, {
                                        displayName: "Institute",
                                        key: "institute",
                                    },
                                ]}
                            selectedval={(selectVal) => {
                                setModel({ ...model, instituteType: selectVal })
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                            variant="outlined"
                            label="Institute Email"
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
                        <BSSelect label="Category" fullWidth={true}
                            searchList={
                                [
                                    {
                                        displayName: "Institute",
                                        key: "institute",
                                    },
                                ]}
                            selectedval={(selectVal) => {
                                setModel({ ...model, category: selectVal })
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSSwitch label="Active" onChange={(e) => setModel({ ...model, active: e.target.checked })} />
                    </Box>
                </Grid>
            </Grid>

            <Box className="p-3" style={{ margin: '5px', marginBottom: '20px' }} align="center">
                <BSButton title="Register" variant="contained" size="normal"
                    onClick={handleClick}
                />
            </Box>
        </Container>
    </Box>
    </>
}

export default InstituteForm;