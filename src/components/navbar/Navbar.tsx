import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping
          </Typography>

          {/* Pages */}
          <div className="flex justify-around w-[20rem]">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
            <NavLink to="/store">
              <p>Store</p>
            </NavLink>
            {/* Add To Cart */}
            <div className="relative">
              <LocalGroceryStoreIcon className="cursor-pointer" />
              <div className="absolute bottom-4 -right-2 rounded-full bg-red-300 px-1">
                3
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
