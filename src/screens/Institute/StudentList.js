import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFbData } from "../../config/firebasemethods";
import BSGrid from "../../components/BSGrid";
import { Grid, Paper, Typography } from "@mui/material";
import BSButton from "../../components/BSButton";
import BSScreenHeader from "../../components/BSScreenHeader";
import BSIconButton from "../../components/BSIconButton";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


function StudentList() {
  const [listData, setListData] = useState([]);

  let getdata = () => {
    getFbData("StudentsList", '').then((res) => {
      setListData([...res]);
    })
      .catch((err) => {
        console.log('no data found')
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  console.log(listData)

  let nav = useNavigate();
  let details = (e) => {
    nav('/studentdetails')
  }
  let edit = (x) => {
    console.log(x);
    x.nativeEvent.preventDefault();
    nav('/studentform', {
      state: x
    })
  }

  return <>
<BSScreenHeader title="Students List" firstSidebutton={<BSIconButton size="large" icon={<AddIcon />} sx={{ color: 'blue' }}
      onClick={() => nav('/studentform')} arialabel="add" />} />

    <Paper elevation={3} fullwidth="true" sx={{
      height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
      alignItems: 'center'
    }}>
      <Grid container sx={{}} >
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Student Name</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Father Name</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Course</Typography>
        </Grid>
        <Grid item md={1} xs={1}>

        </Grid>
      </Grid>
    </Paper >

    {listData.map((x, i) => {
      return (<Paper elevation={3} fullwidth="true" onClick={() => details(x)} sx={{
        height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
        alignItems: 'center', cursor: 'pointer'
      }}>
        <Grid container >
          <Grid item md={4} xs={3} >
            {x.studentName}
          </Grid>
          <Grid item md={4} xs={3}>
            {x.fatherName}
          </Grid>
          <Grid item md={3} xs={3}>

          </Grid>
          <Grid item md={1} xs={1}>
            {<BSIconButton size="large" icon={<EditIcon />} onClick={() => edit(x)} arialabel="edit" />}
          </Grid>
        </Grid>
      </Paper >)
    })}
  </>
}

export default StudentList;