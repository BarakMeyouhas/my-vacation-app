import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Card, Typography, CardMedia, CardContent, Button } from '@mui/material';

const VacationDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const vacationId = parseInt(searchParams.get('params'), 10);
  const [vacationDetails, setVacationDetails] = useState(null);

  const handleBookNow = () => {
    // Implement your booking logic here
    console.log('Booking vacation:', vacationDetails);
  };

  useEffect(() => {
    const fetchVacationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/user/vacationById/${vacationId}`);
        setVacationDetails(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching vacation details:', error);
      }
    };

    if (!isNaN(vacationId)) {
      fetchVacationDetails();
    }
  }, [vacationId]);

  if (!vacationDetails) {
    return <div>Loading...</div>;
  }

  function formatDateWithoutTime(dateString) {
    const [date] = dateString.split('T');
    return date;
  }

  return (
    <>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2, marginLeft: 2 }}>
        <CardMedia component="img" alt={vacationDetails.destination} height="300" image={vacationDetails.img} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {vacationDetails.destination}
          </Typography>
          <Typography variant="body1" paragraph>
            {vacationDetails.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: ${vacationDetails.price}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Start: {formatDateWithoutTime(vacationDetails.start)} | End: {formatDateWithoutTime(vacationDetails.end)}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleBookNow}>
            Book Now
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default VacationDetails;
