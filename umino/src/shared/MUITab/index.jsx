import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardSlider from "../CardSlider";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", border: "none",width:'100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
  scrollButtons="auto"
   allowScrollButtonsMobile
            aria-label="basic tabs example"
            
            
            
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",

              },
              "& .MuiTab-root": {
      fontFamily: "jost",
      fontSize:'13px',
      lineHeight:'25px',
      color: "#111111",
      padding: "9.5px 20px",
      minWidth: "0px",
      minHeight: "0px",
      maxWidth:"500px",
      borderRadius: "50px",
      transition: "background-color 0.3s ease",
      display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // Mobilde 2 sütun
            sm: "repeat(2, 1fr)", // Tablette 3 sütun
            md: "repeat(1, 1fr)", // Büyük ekranda 5 sütun
          },
      
    },
    "& .Mui-selected": {
      backgroundColor: "#f5f5f5",
    },
            }}
          >
            <Tab disableRipple  label="ALL" {...a11yProps(0)} />
            <Tab disableRipple  label="LIGHTING" {...a11yProps(1)} />
            <Tab disableRipple  label="OURDOOR" {...a11yProps(2)} />
            <Tab disableRipple  label="DECOR" {...a11yProps(3)} />
            <Tab disableRipple  label="ACCESSORIES" {...a11yProps(4)} />

          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} style={{width:"100%"}}>
          <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
                      <CardSlider/>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
                      <CardSlider/>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
                      <CardSlider/>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
                      <CardSlider/>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
         <div className="container mx-auto px-[55px] py-[21px] flex justify-between font-[jost]">
                      <CardSlider/>

          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
