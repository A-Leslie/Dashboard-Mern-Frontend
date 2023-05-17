import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      color: 'blue',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: 'blue',
    },
    '& .MuiInputBase-input': {
      backgroundColor: 'white',
      borderRadius: '4px',
      padding: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ddd',
    },
  },
});

const DatePickerComponent: React.FC = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <><h1>Booking page</h1><MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          format="dd/MM/yyyy"
          inputVariant="outlined" />
      </div>
    </MuiPickersUtilsProvider></>
  );
};

export default DatePickerComponent;
