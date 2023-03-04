import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserModel } from "../../models/UserModel";
import { post } from "../../services"
import {
	Container,
	CssBaseline,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";


const Register = () => {
  const [values, setValues] = useState({
    nombre: "",
		apellido: "",
		correo: "",
		password: "",
		tipoUsuario: "", 		
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
		
		setValues({
      ...values,
      [name]: value,
    });		
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
		const data = await post("registro", values);
		console.log(data);
    if (data.ok) {
      Swal.fire({
        icon: "success",
        text: data.message,
      });
      setValues({
        nombre: "",
				apellido: "",
				correo: "",
				password: "",
				tipoUsuario: "",        
      });
    } else {
      Swal.fire({
        icon: "error",
        text: data.message,
      });
    }
  };
	
	return (
		<Container component="main" maxWidth="xs">
            <div className='text-center pt-5'>
                <span>
                <a className="text-decoration-none" href='/'>Inicio</a> / Registrarse
                </span>
            </div>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				
				<Typography component="h1" variant="h5">
					Registrarse
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit}
					method="post"
					sx={{ mt: 3 }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								autoComplete="given-name"
								name="nombre"
								value={values.nombre}
								onChange={handleInputChange}
								label="Nombre"								
								fullWidth
								required	
								autoFocus					
							/>
						</Grid>
						
						<Grid item xs={12} >
							<TextField
								name="apellido"
								value={values.apellido}
								onChange={handleInputChange}
								label="Apellido"
								fullWidth								
								required								
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								name="correo"
								value={values.correo}
								onChange={handleInputChange}
								label="Email Address"
								fullWidth
								required							
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								name="password"
								value={values.password}
								onChange={handleInputChange}
								type="password"
								label="Password"
								fullWidth
								required									
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								name="tipoUsuario"
								value={values.tipoUsuario}
								onChange={handleInputChange}
								type="tipoUsuario"
								label="Tipo Usuario"
								fullWidth
								required																
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, backgroundColor: "#C99DB4" }}
					>
						Registrarse
					</Button>
					<Grid container justifyContent="center">
						<Grid item>
							<Link to="/login">
								¿Ya tienes una cuenta? Acceder
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default Register;