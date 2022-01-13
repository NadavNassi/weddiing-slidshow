import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

export function CardUI({ img, txt1, txt2, txt3, btn }) {


    return (
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#ffffff57' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {txt1}
                </Typography>
                <Typography variant="subtitle2">
                    {txt2}
                </Typography>
                <Typography variant="subtitle2">
                    {txt3}
                </Typography>
            </CardContent>
            {btn && <CardActions>
                <Button size="small"><DeleteForeverTwoToneIcon fontSize={'large'} /></Button>
            </CardActions>}
        </Card>
    );
}