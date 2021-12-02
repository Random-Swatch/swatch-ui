import React from 'react'
import {connect} from 'react-redux'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {getSwatch} from "../actions/getSwatch";

const GenerateSwatchButton = ({dispatch}) => {
    return (
        <div>
            <Grid container style={{marginTop: 50}}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" size="large" onClick={() => dispatch(getSwatch())}>
                        Generate swatch
                    </Button>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </div>
    )
}

export default connect()(GenerateSwatchButton)
