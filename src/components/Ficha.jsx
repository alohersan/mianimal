import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {CustomButton} from 'milibreria';

function Ficha({ animal, atribute, imageURL, imageSize, description }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <Stack direction="column" spacing={4} sx={{justifyContent: "center", alignItems: "center",minHeight: "100vh",textAlign: "center"}}>
            <Avatar src={imageURL} alt={description} sx={{ width: imageSize, height: imageSize }} />
            <Typography variant="h2">{animal}</Typography>
            <Typography variant="h4">{atribute}</Typography>
            <CustomButton onClick={handleClick}
            sx={{ width: 200, height: 60, fontSize: '1em' }}
            text={'Me diste '+count+' rascaditas'}  bgcolor='black' txtcolor='red'>
            </CustomButton>
        </Stack>
    );
}

export default Ficha;
