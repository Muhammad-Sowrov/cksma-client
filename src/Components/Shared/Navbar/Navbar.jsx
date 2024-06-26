import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <SchoolIcon></SchoolIcon>
      </Typography>
      <Divider />
      <ul className="items-center p-2">
        <li className="text-base">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-base">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="text-base">
          <NavLink to="donate">Donate</NavLink>
        </li>
        <li className="text-base">
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  const container =
    typeof window !== "undefined" ? window.document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <SchoolIcon></SchoolIcon>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="flex gap-5">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="donate">Donate</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
