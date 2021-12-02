import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorDetails = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ColorPreview = styled(Paper)(({theme, color}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50px',
    background: color.color.syntax
}));

function Color(color) {
    const matches = useMediaQuery('(min-width:600px)');

    return <Grid item xs={2} sm={4} md={4}>
        <ColorPreview color={color}/>
        {matches ? <ColorDetails>
            <Stack direction="row" spacing={1} alignContent={"center"}>
                <Tooltip title={color.color.type + " color"}>
                    <Chip
                        label={color.color.type}
                        color="primary"
                    />
                </Tooltip>
                <Tooltip title="CSS compatible">
                    <Chip
                        label="CSS"
                        color="success"
                    />
                </Tooltip>
                <SyntaxHighlighter language="css" style={github}>
                    {color.color.syntax}
                </SyntaxHighlighter>
            </Stack>
        </ColorDetails> : ""}
    </Grid>
}

export default Color
