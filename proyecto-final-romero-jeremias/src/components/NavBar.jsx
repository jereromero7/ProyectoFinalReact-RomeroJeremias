import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Button, Tab, Tabs } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <a>
            <Typography variant="h6">CaliforniaSport</Typography>
          </a>
          <Button>
            <Badge badgeContent={55} color="error">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="secondary">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={4}
            onChange={4}
            aria-label="nav tabs example"
            role="navigation"
            centered
          >
            <Tab label="HOMBRES" />
            <Tab label="MUJERES" />
            <Tab label="NIÑOS" />
          </Tabs>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
