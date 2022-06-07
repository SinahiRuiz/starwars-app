import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export const CardData = (props) => {
  const {data}=props
  const {results}=data
  console.log("results", results )
  return (
    <Box sx={{display: "flex", gap:'20px', height:'130px'}}>
      {
        results.map((item, index)=>(
          <Card sx={{ width: '130px'}} key={index}>
          <CardContent>
            <h1>Name:</h1>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              {item.name}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        ))
      }
    </Box>
  );
}
