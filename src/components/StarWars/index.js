import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Typography
} from "@mui/material";
import { CardData } from "../Card";
import { getFetchData } from "../../api/fetchApi";
import Yoda from "../../assets/img/yoda.png";

export const StarWars = () => {
  const [option, setOption] = useState("");
  const [data, setData] = useState();
  const [toSearch, setToSearch] = useState("")
  const [disabledButton, setDisabledButton] = useState(false)

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleSearch = async () => {
    if (option) {
      setDisabledButton(true)
      try {
        const response = await getFetchData(option);
        const data = await response;
        setData(data);
        setToSearch(option);
        setDisabledButton(false)

      } catch (e) {
        setDisabledButton(false)

        console.error(e);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#000",
          borderBottom: "1px solid #FFDE06",
          height: 130,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <FormControl
            sx={{
              m: 1,
              minWidth: 230,
              background: "#fff",
              justifyContent: "center",
            }}
          >
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={option}
              label="Select An Option!"
              onChange={handleChange}
              sx={{
                fontSize:18,
                color:'black'}}
            >
              <MenuItem value="" sx={{fontSize:16,  color:'black'}}>
                <em>Select an option!</em>
              </MenuItem>
              <MenuItem sx={{fontSize:16,  color:'black'}} value={"people"}>People</MenuItem>
              <MenuItem sx={{fontSize:16,  color:'black'}} value={"planets"}>Planets</MenuItem>
              <MenuItem sx={{fontSize:16,  color:'black'}} value={"starships"}>Starships</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" sx={{width:80, height:40}} onClick={handleSearch} disabled={disabledButton} disableElevation>
            Search
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          marginTop: "70px",
          height: "60vh",
          borderRadius: "30px",
          padding: "15px",
          marginLeft: "30px",
          marginRight: "30px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {data ? 
        <Box sx={{textAlign:'center'}}>
         <Typography sx={{color:'rgba(200,255,200,0.5)', textShadow:'0 0 5px green, 0 0 5px green, 0 0 5px green', fontSize:45, pb:2, textTransform:'capitalize'}}>{toSearch}</Typography>
          <CardData data={data} />
          </Box>
        :<Box sx={{textAlign:'center'}}>
           <Typography sx={{ fontSize: 60, color:'rgba(200,255,200,0.5)', textShadow:'0 0 5px green, 0 0 5px green, 0 0 5px green' }}>
             Search something! 
             </Typography>
             <img src={Yoda} width='300px'/>
             </Box>
        }
      </Box>
    </Box>
  );
};
