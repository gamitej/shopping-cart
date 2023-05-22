import { NavLink } from "react-router-dom";

// mui
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";

// icons
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const navLinkArr = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/store", name: "Store" },
];

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
            {navLinkArr?.map(({ to, name }, index) => (
              <NavLink to={to} key={index}>
                <p>{name}</p>
              </NavLink>
            ))}
            {/* Add to cart */}
            <div className="relative">
              <LocalGroceryStoreIcon className="cursor-pointer" />
              <div className="absolute bottom-4 -right-2 rounded-full bg-red-400 px-1">
                3
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
