import React from 'react'
import { useField } from 'formik'
import { Grid } from '@mui/material'
import {TextField} from '@mui/material'

const InputField = ({name, placeholder}) => {
    const [fields, {error}] = useField(name)
    const type = name === 'password' ? 'password' : name === 'email' ? 'email' : 'text'
    return (
        <Grid mb={1}>
            <TextField
                {...fields}
                type={type}
                error={!!error}
                helperText={error}
                hiddenLabel
                id={name}
                name={name}
                variant="filled"
                placeholder={placeholder}
                sx={{bgcolor: 'white'}}
                fullWidth
            />
        </Grid>
    )
}

export default InputField