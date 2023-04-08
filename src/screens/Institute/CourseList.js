import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFbData } from "../../config/firebasemethods";
import { Grid, Paper, Typography } from "@mui/material";
import BSScreenHeader from "../../components/BSScreenHeader";
import AddIcon from '@mui/icons-material/Add';
import BSIconButton from "../../components/BSIconButton";
import EditIcon from '@mui/icons-material/Edit';


function CourseList() {
  const [listData, setListData] = useState([]);

  let getdata = () => {
    getFbData("CourseList", '').then((res) => {
      setListData([...res]);
      console.log(res)
    })
      .catch((err) => {
        console.log('no data found')
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  let nav = useNavigate();

  let edit = (e) => {
    nav('/courseform', {
      state: e
    })
  }

  return <>

    <BSScreenHeader title="Courses" firstSidebutton={<BSIconButton size="large" icon={<AddIcon />} sx={{ color: 'blue' }}
      onClick={() => nav('/courseform')} arialabel="add" />} />

    <Paper elevation={3} fullwidth="true" sx={{
      height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
      alignItems: 'center'
    }}>
      <Grid container sx={{}} >
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Course Name</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Duration</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Fees</Typography>
        </Grid>
        <Grid item md={1} xs={1}>

        </Grid>
      </Grid>
    </Paper >

    {listData.map((x, i) => {
      return (<Paper elevation={3} fullwidth="true" sx={{
        height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
        alignItems: 'center'
      }}>
        <Grid container >
          <Grid item md={4} xs={3} >
            {x.courseName}
          </Grid>
          <Grid item md={4} xs={3}>
            {x.duration}
          </Grid>
          <Grid item md={3} xs={3}>
            {x.fees}
          </Grid>
          <Grid item md={1} xs={1}>
            {<BSIconButton size="large" icon={<EditIcon />} onClick={() => edit(x)} arialabel="edit" />}
          </Grid>
        </Grid>
      </Paper >)
    })}
  </>
}

export default CourseList;