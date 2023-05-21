import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

interface BookingFormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      backgroundColor:'#e2e2e2'
    }}
    > 
    <h1 style={{
      color:"black"
    }}>Booking Details</h1>
    <form onSubmit={handleSubmit}>
     
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="checkIn"
            label="Check-in Date"
            type="date"
            variant="outlined"
            fullWidth
            value={formData.checkIn}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="checkOut"
            label="Check-out Date"
            type="date"
            variant="outlined"
            fullWidth
            value={formData.checkOut}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="guests"
            label="Adults"
            type="number"
            variant="outlined"
            fullWidth
            value={formData.guests}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="children"
            label="Children"
            type="number"
            variant="outlined"
            fullWidth
            value={formData.guests}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Pay 
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
 
  );
};

export default BookingForm;
