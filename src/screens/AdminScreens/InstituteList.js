import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFbData } from "../../config/firebasemethods";
import { Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import BSIconButton from "../../components/BSIconButton";
import BSScreenHeader from "../../components/BSScreenHeader";

function InstituteList() {
  const [listData, setListData] = useState([]);
  let nav = useNavigate();

  let getdata = () => {
    getFbData("Institute", '')
      .then((res) => {
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

  let edit = (e) => {
    nav('/adminportal/instituteform', {
      state: e
    })
  }

  return <>
  <BSScreenHeader title="Institute List" />
    <Paper elevation={3} fullwidth="true" sx={{
      height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
      alignItems: 'center'
    }}>
      <Grid container sx={{}} >
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Institute Name</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Institute Short Name</Typography>
        </Grid>
        <Grid item md={4} xs={3}>
          <Typography variant="h6">Active / InActive</Typography>
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
            {x.instituteName}
          </Grid>
          <Grid item md={4} xs={3}>
            {x.instituteShortName}
          </Grid>
          <Grid item md={3} xs={3}>
            {x.active ? <BSIconButton size="large" icon={<CircleIcon />} sx={{ color: 'green' }} arialabel='active' /> : 
            <BSIconButton size="large" icon={<CircleIcon />} sx={{ color: 'red' }} arialabel="inactive" /> }
          </Grid>
          <Grid item md={1} xs={1}>
            {<BSIconButton size="large" icon={<EditIcon />} onClick={() => edit(x)} arialabel="edit" />}
          </Grid>
        </Grid>
      </Paper >)
    })}
  </>
}

export default InstituteList;