import { Box} from '@mui/material'
import React from 'react'
import AddressForm from './payment/AddressForm'
import Checkout from './payment/Checkout'
import PaymentForm from './payment/PaymentForm'
import Review from './payment/Review'
function BookProperty() {
  return (
    <Box
            ml={"200px"}
            
            sx={{
                p: { xs: 1, md: 2, lg: 3 },
                flexGrow: 1,
                bgcolor:"#e2e2e2",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: "100vh",
                
                
            }}>
    <div>
      <h2 style={{color:"black"}}>Booking details</h2>
      {/* <AddressForm/> */}
      <Checkout/>
      {/* <Review/> */}
      {/* <PaymentForm/> */}


    </div>
    </Box>
  )
}

export default BookProperty


