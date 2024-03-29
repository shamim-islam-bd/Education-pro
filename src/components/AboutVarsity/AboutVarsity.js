import React from 'react';
import './AboutVarsity.css';
import { FiNavigation } from 'react-icons/fi';
import { GiEarthAmerica } from 'react-icons/gi';
import { GiMissilePod } from 'react-icons/gi';
import { BsCompass } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

const AboutVarsity = () => {
   return (
   <div className="container pt-5 pb-5">

   <Box sx={{ flexGrow: 1 }} className="">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={5}>
          <div className="left-img">
            <img className="about-img" src="https://i.ibb.co/vXBDv3t/Screeeee.png" alt="" srcset="" />
          </div>
        </Grid>
        <Grid item xs={12} md={7} className="left-main">
           <div className="university-content pt-5 p-4">
             <h2 className="about-hero-text">About the University! </h2>
             <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias molestias, id similique nihil eaque explicabo quibusdam veritatis ratione deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eveniet quis impedit consequatur deserunt quia odit deleniti nostrum non id!</p>
             <Button className="btn" style={{backgroundColor:"#FF7B4B"}}>University Overview<FiNavigation style={{marginLeft: '8px'}}/></Button>
           </div>
        </Grid>
      </Grid>
    </Box>

      <Box sx={{ flexGrow: 1 }} className="">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }} className="mt-5">
        <Grid item xs={6} md={4}>
         <div className="about-box box-1"> 
           <div className="d-flex">
            <span className="icon icon-1"><GiEarthAmerica/></span>
            <span className="p-2"><h4>History</h4></span>
         </div>
         <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box box-2"> 
        <div className="d-flex">
          <span className="icon icon-2"><GiMissilePod/></span>
          <span className="p-2"><h4>Mission</h4></span>
        </div>
        <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
      </Grid>
      <Grid item xs={6} md={4}>
        <div className="about-box box-3"> 
        <div className="d-flex">
          <span className="icon icon-3"><BsCompass/></span>
          <span className="p-2"><h4>History</h4></span>
        </div>
        <div>
          <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi optio rem neque assumenda magni.</p>
        </div>
          <span className="d-flex align-items-start"><AiOutlineArrowRight/></span>
        </div> 
       </Grid>
      </Grid>
     </Box>

      </div>
    );
};

export default AboutVarsity;