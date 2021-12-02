import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Color from './Color'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import {GET_SWATCH, RECEIVE_ERROR, RECEIVE_SWATCH} from "../actions/getSwatch";
import Alert from '@mui/material/Alert';

const Swatch = ({colors, status, message}) => (
    <Grid container style={{marginTop: 30}}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {
                        status === GET_SWATCH ?
                            <Box sx={{width: '100%', marginTop: 15}}>
                                <LinearProgress style={{}}/>
                            </Box> : ""
                    }
                    {
                        status === RECEIVE_SWATCH ? colors.map(color => {
                            if (color.isCssCompatible === true) {
                                return <Color color={color} key={color.syntax}/>
                            }
                        }) : ""
                    }
                    {
                        status === RECEIVE_ERROR ?
                            <Stack sx={{width: '100%', margin: '20px'}} spacing={2}>
                                <Alert severity="error">{message}</Alert>
                            </Stack> : ""

                    }
                </Grid>
            </Box>
        </Grid>
        <Grid item xs={3}>
        </Grid>
    </Grid>
)

export default Swatch
