import { Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BSSwitch from "../../components/BSSwitch";
import { fbCustonPost } from "../../config/firebasemethods";
import BSButton from "../../components/BSButton";

function RegistrationControl() {
    const [model, setModel] = useState({})


    let save = () => {
        fbCustonPost("coursecontrol", model)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Typography>Registration Control</Typography>
            <Box>
                <Box>
                    <BSSwitch label="Course Open" onChange={(e) => setModel({ ...model, registrationOpen: e.target.checked })} />
                </Box>
                <Box>
                    <BSButton onClick={save} title="Course form switch" variant="contained" />
                </Box>
            </Box>
        </>
    )
}

export default RegistrationControl;