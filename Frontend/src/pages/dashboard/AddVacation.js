import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, TextField, Button, Container, Grid, CardMedia, Typography } from '@mui/material';

const AddVacation = () => {
  const [vacation, setVacation] = useState({
    destination: '',
    description: '',
    start: '',
    end: '',
    price: '',
    img: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let sanitizedValue = '';

    if (name === 'price') {
      // Convert the input to a non-negative number
      const numericValue = parseFloat(value);
      sanitizedValue = isNaN(numericValue) ? '' : Math.max(0, Math.min(10000, numericValue)).toString();
    } else {
      sanitizedValue = value;
    }

    if (name === 'start') {
      // Compare start and end dates
      const endDate = vacation.end;
      if (endDate && value > endDate) {
        // Reset the end date if it's earlier than the new start date
        setVacation((prevVacation) => ({
          ...prevVacation,
          end: ''
        }));
      }
    } else if (name === 'end') {
      // Compare start and end dates
      const startDate = vacation.start;
      if (startDate && value < startDate) {
        // Reset the start date if it's later than the new end date
        setVacation((prevVacation) => ({
          ...prevVacation,
          start: ''
        }));
      }
    }

    setVacation((prevVacation) => ({
      ...prevVacation,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/api/v1/admin/addVacation', vacation)
      .then((response) => {
        console.log('Vacation added successfully:', response.data);
      })
      .catch((error) => {
        console.log('Failed to add vacation:', error);
      });
  };

  return (
    <>
      <Container>
        <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'center' }}>
          <Card id="form" sx={{ maxWidth: 600, margin: 'auto', marginTop: 2, marginLeft: 2 }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div>
                  <TextField
                    type="text"
                    name="destination"
                    value={vacation.destination}
                    onChange={handleInputChange}
                    label="Destination"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    name="description"
                    value={vacation.description}
                    onChange={handleInputChange}
                    label="Description"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    name="start"
                    type="date"
                    value={vacation.start}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    label="Start Date"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      min: new Date().toISOString().split('T')[0] // Restrict past dates
                    }}
                  />
                  <TextField
                    name="end"
                    type="date"
                    value={vacation.end}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    label="End Date"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      min: vacation.start // Restrict earlier dates than start date
                    }}
                  />
                  <TextField
                    type="number"
                    name="price"
                    value={vacation.price}
                    onChange={handleInputChange}
                    label="Price"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    type="text"
                    name="img"
                    value={vacation.img}
                    onChange={handleInputChange}
                    label="Image URL"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Update Vacation
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card id="vacation" sx={{ maxWidth: 600, margin: 'auto', marginTop: 2, marginLeft: 2 }}>
            <CardMedia component="img" alt={vacation.destination} height="300" image={vacation.img} />
            <CardContent>
              <div>
                <Typography variant="h5">{vacation.destination}</Typography>
                <Typography variant="body1">{vacation.description}</Typography>
                <Typography variant="subtitle1">
                  Start: {vacation.start} | End: {vacation.end}
                </Typography>
                <Typography variant="h6">Price: ${vacation.price}</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default AddVacation;
