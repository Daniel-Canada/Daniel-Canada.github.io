import { Image } from '@mui/icons-material'
import { AppBar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ContactPage() {


  return (
    <div>
     <Card sx={{maxWidth: "579px" , justifyContent: "center"}} >
      <CardHeader titleTypographyProps={{fontSize: "16px", textAlign: "center", fontWeight: "bold"}} title = "Send me a message"></CardHeader>
      <Divider></Divider>
      <CardContent>
        <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            required
            label="First Name"
            variant="outlined"
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            required
            label="Last Name"
            variant="outlined"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
            fullWidth
            required
            label="Email"
            variant="outlined"
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
            fullWidth
            required
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            ></TextField> 
          </Grid>
        </Grid>
          
      
        <Button variant="contained" sx={{margin: "10px", fontWeight:300}}
        type="submit"
        >Send</Button>
        </form>
      </CardContent>
     </Card>

    </div>
  )
}

export default ContactPage