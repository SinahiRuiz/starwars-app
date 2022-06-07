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
} from "@mui/material";
import { CardData } from "../Card";
import { getFetchData } from "../../api/fetchApi";

export const NavBar = () => {
  const [option, setOption] = useState("");
  const [data, setData] = useState();

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleSerch = async () => {
    if (option) {
      try {
        const response = await getFetchData(option);
        const data = await response;
        setData(data);
      } catch (e) {
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
              minWidth: 200,
              background: "#fff",
              justifyContent: "center",
            }}
          >
            <InputLabel id="demo-simple-select-helper-label">
              Select An Option!
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={option}
              label="Select An Option!"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select an option!</em>
              </MenuItem>
              <MenuItem value={"people"}>People</MenuItem>
              <MenuItem value={"planets"}>Planets</MenuItem>
              <MenuItem value={"starships"}>Starships</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={handleSerch}>
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
        {data && <CardData data={data} />}
      </Box>
    </Box>
  );
};
