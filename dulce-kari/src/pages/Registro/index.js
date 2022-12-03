import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserModel } from "../../models/UserModel";
import {postUser} from "../../services"
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


function Registro() {
	const history = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const newUser = new UserModel(
			data.get("name"),
			data.get("email"),
			data.get("password")
		);
		await postUser(newUser);
		history("/tienda");
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
					sx={{ mt: 3 }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								autoComplete="given-name"
								name="name"
								required
								fullWidth
								id="name"
								label="name"
								autoFocus
							/>
						</Grid>
						
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
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
}

export default Registro;