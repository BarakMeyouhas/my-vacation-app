import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BarAnimation() {
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const [allLikes, setAllLikes] = useState([]);
  const [allVacations, setAllVacations] = useState([]);

  useEffect(() => {
    if (allLikes.length < 1) {
      axios
        .get('http://localhost:4000/api/v1/admin/getallLikes')
        .then((response) => response.data)
        .then((allLikes) => {
          setAllLikes(allLikes);
          console.log('Likes:', allLikes);
        });
    }
  }, []);

  useEffect(() => {
    if (allVacations.length < 1) {
      axios
        .get('http://localhost:4000/api/v1/admin/getallvacations')
        .then((response) => response.data)
        .then((allVacations) => {
          setAllVacations(allVacations);
          console.log('Vacations:', allVacations);
        });
    }
  }, []);

  // const vacationsDestinations = allVacations.map((vacation) => vacation.destination);
  // const vacationLikes = vacationsDestinations.map((destination) => {
  //   const vacation = allVacations.find((vacation) => vacation.destination === destination);
  //   if (vacation) {
  //     const likesCount = allLikes.filter((like) => like.vacation_id === vacation.id).length;
  //     return likesCount;
  //   }
  // });

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart height={300} series={series.slice(0).map((s) => ({ ...s, data: s.data.slice(0) }))} skipAnimation={skipAnimation} />
      <FormControlLabel
        checked={skipAnimation}
        control={<Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />}
        label="skipAnimation"
        labelPlacement="end"
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global'
};

const series = [
  {
    label: 'series 1',
    data: [2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188, 1879, 626, 1635, 2177, 516, 1793, 1598]
  }
].map((s) => ({ ...s, highlightScope }));
