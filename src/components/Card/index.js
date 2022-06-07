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
  console.log("option", props )
  return (
    <Box sx={{display: "flex", gap:'10px', height:'110px', textAlign:'center'}}>
      {
        results.map((item, index)=>(
          <Card sx={{ width: '110px', background:'rgba(255,200,255,0.5)'}} key={index}>
          <CardContent>
            <Typography sx={{color:'rgba(255,200,255,0.5)', textShadow:'0 0 3px purple, 0 0 3px purple, 0 0 3px purple', fontSize:20}}>Name</Typography>
            <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
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
