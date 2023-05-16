import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import  Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import {useState} from 'react'


function FormSignUp ({handleSubmit}) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [promo, setPromo] = useState(true)
    const [nove, setNove] = useState(true)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'al menos 3 caracteres'
        },
        lastName: {
            error: false,
            message: 'al menos 3 caracteres'
        },
        email: {
            error: false,
            message: 'email invalido'
        }

    }) 

    const validarNombre = (nombre)=>{
        if(nombre.length < 3){
            setErrors({...errors, name: {error: true, message: 'al menos 3 caracteres'}})
        }
        else{
            setErrors({...errors, name: {error: false, message: ''}})
        }
    }

    const validarApellido = (apellido)=>{
        if(apellido.length < 3){
            setErrors({...errors, lastName: {error: true, message: 'al menos 3 caracteres'}})
        }
        else{
            setErrors({...errors, lastName: {error: false, message: ''}})
        }
    }

    const validarEmail = (email)=>{
        if(email.includes('@')){
            setErrors({...errors, email: {error: false, message: ''}})
        }
        else{
            setErrors({...errors, email: {error: true, message: 'email invalido debe contener @'}})

        }
    }

    return <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit({
            name, 
            lastName, 
            email, 
            promo, nove})
    }}>

        <TextField 
            id='name' 
            label='Nombre' 
            variant='outlined' 
            color='secondary' 
            fullWidth 
            margin='normal'
            onChange={(e)=> {
                setName(e.target.value)
            }} 
            onBlur={(e)=>{
                validarNombre(e.target.value)
            }}
            value={name}
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.message : ''}
        />
        <TextField 
            id='lastname' 
            label='Apellido' 
            variant='outlined' 
            color='secondary' 
            fullWidth 
            margin='normal'
            onChange={(e)=> {
                setLastName(e.target.value)
            }} 
            onBlur={(e)=>{
                validarApellido(e.target.value)
            }}
            value={lastName}
            error={errors.lastName.error}
            helperText={errors.lastName.error ? errors.lastName.message : ''}
        />
        <TextField 
            id='email' 
            label='e-mail' 
            variant='outlined' 
            type='email' 
            color='secondary' 
            fullWidth 
            margin='normal'
            onChange={(e)=> {
                setEmail(e.target.value)
            }} 
            onBlur={(e)=>{
                validarEmail(e.target.value)
            }}
            value={email}
            error={errors.email.error}
            helperText={errors.email.error ? errors.email.message : ''}
            
        />
        <FormGroup> 
            <FormControlLabel control={<Switch 
                color='secondary' 
                defaultChecked
                onChange={(e)=> {
                    setPromo(!promo)
                }} 
                />} label='Promociones' />
            <FormControlLabel control={<Switch 
                color='secondary' 
                defaultChecked
                onChange={(e)=> {
                    setNove(!nove)
                }} 
                />} label='Novedades' />
        </FormGroup>
        <Button type='submit' variant='contained' color='secondary'>Registrarse</Button>
    </form>
}

export default FormSignUp