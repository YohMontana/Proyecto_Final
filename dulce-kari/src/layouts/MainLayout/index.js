import { useState, useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import logo from "../../asset/img/logo.jpg";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
import { isAuth, signOut } from "../../services";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ProductContext } from "../../context/ProductContext";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./styles.css";


const MainLayout = () => {
  const isAuthenticated = isAuth();

  const history = useNavigate();
  
  const { cartProducts } = useContext(ProductContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
    // if (!isAuthenticated) return <history to="/"/>;

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#ED719F",
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <a className="navbar-brand" href="/">
              <img className="logo" src={logo} alt="" width="50" />
            </a>

            {/* MENU COMPRIMIDO ---------------------------------*/}
            <Typography
              variant="h6"
              noWrap
              component="a"
              className="tittle"
              href="/"
              sx={{
                mr: 3,
                padding: "8px",
                display: { xs: "none", md: "flex" },
                fontFamily: " 'Comfortaa', cursive",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Dulces Kari
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography className="menuComprimido" textAlign="center">
                    <Link to="/" className="menuComprimido">
                      Inicio
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography>
                    <Link to="/about" className="menuComprimido">
                      Nosotros
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography>
                    <Link to="/tienda" className="menuComprimido">
                      Tienda
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography>
                    <Link to="/contactanos" className="menuComprimido">
                      Contáctanos
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* MENU FULL SCREAM ---------------------------------*/}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              className="tittle"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: " 'Comfortaa', cursive",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Dulces Kari
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                component="button"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
                to="/"
                className="menu"
              >
                Inicio
              </Link>
              <Link
                component="button"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
                to="/about"
                className="menu"
              >
                Nosotros
              </Link>
              <Link
                component="button"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
                to="/tienda"
                className="menu"
              >
                Tienda
              </Link>
              <Link
                component="button"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
                to="/contactanos"
                className="menu"
              >
                Contáctanos
              </Link>
            </Box>

            {/* PERFIL sesion iniciada------------------------*/}

            {/* <Box sx={{  flexGrow: 0, }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="#" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Perfil</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Carrito</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
              </Menu>
            </Box> */}
            {/* PERFIL sin iniciar sesion comprimido------------------------*/}

            <Box sx={{ flexGrow: 0, display: { xs: "flex", lg: "none" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="#" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px", display: { xs: "flex", md: "none" } }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Iniciar sesión</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Registrarse</Typography>
                </MenuItem>
              </Menu>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cartProducts.length} color="error">
                  <AddShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </Box>
            {/* PERFIL sin iniciar sesion full scream------------------------*/}

            <Box sx={{ flexGrow: 0, display: { xs: "none", lg: "flex" } }}>
              <MenuItem
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <button class="btn btn-outline me-2 btnmenu" type="button">
                  <a href="/login">Iniciar sesión</a>
                </button>
              </MenuItem>

              <MenuItem
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <button class="btn btn-outline me-2 btnmenu2" type="button">
                  <a href="/registro">Registrarse</a>
                </button>
              </MenuItem>
                
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography className="menuComprimido" textAlign="center">
                  Jhancarlo Esteban                                
                </Typography>
              </MenuItem>
                                               

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                
                <Badge badgeContent={cartProducts.length} color="error">
                <Link to="/carrito">
                  <AddShoppingCartRoundedIcon />
                </Link>
                </Badge>       
              </IconButton>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={signOut}
              >
                <Link to="/">
                <LogoutRoundedIcon />
                </Link>
                
                
              </IconButton>    


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default MainLayout;
