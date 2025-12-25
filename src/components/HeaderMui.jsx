import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItems";

function HeaderMui() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop menu
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [submenuAnchorMap, setSubmenuAnchorMap] = useState({}); // track multiple open submenus

  // Mobile menu
  const [mobileOpenSub, setMobileOpenSub] = useState({});

  const handleOpenMainMenu = (e) => {
    setMenuAnchor(e.currentTarget);
    setSubmenuAnchorMap({});
  };

  const handleCloseMenus = () => {
    setMenuAnchor(null);
    setSubmenuAnchorMap({});
  };

  const handleOpenSubmenu = (e, itemId) => {
    setSubmenuAnchorMap((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? null : e.currentTarget,
    }));
  };

  // function to extract color from bg-[#XXXXXX]
  const getBgColor = (colorString) => {
    if (!colorString) return "transparent";
    const match = colorString.match(/#([0-9a-fA-F]{6})/);
    return match ? match[0] : "transparent";
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Box display="flex" alignItems="center" gap={1}>
            <VolunteerActivismIcon color="primary" fontSize="large" />
            <Typography variant="h6" fontWeight="bold">
              YourLogo
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button endIcon={<ChevronRightIcon />} onClick={handleOpenMainMenu}>
              Menu
            </Button>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleCloseMenus}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={(e) =>
                    item.submenu?.length
                      ? handleOpenSubmenu(e, item.id)
                      : handleCloseMenus()
                  }
                  sx={{ backgroundColor: getBgColor(item.bgColor) }}
                >
                  <Box
                    style={{ backgroundColor: getBgColor(item.bgColor) }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={220}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      {item.icon}
                      {item.title}
                    </Box>
                    {item.submenu?.length && <ChevronRightIcon />}
                  </Box>

                  {item.submenu && (
                    <Menu
                      anchorEl={submenuAnchorMap[item.id]}
                      open={Boolean(submenuAnchorMap[item.id])}
                      onClose={() =>
                        setSubmenuAnchorMap((prev) => ({
                          ...prev,
                          [item.id]: null,
                        }))
                      }
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      {item.submenu.map((sub) => (
                        <MenuItem
                          key={sub.path}
                          component={Link}
                          to={sub.path}
                          onClick={handleCloseMenus}
                          sx={{ backgroundColor: getBgColor(sub.bgColor) }}
                        >
                          <Box display="flex" alignItems="center" gap={1}>
                            {sub.icon}
                            {sub.title}
                          </Box>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP ACTION BUTTONS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button component={Link} to="/get-involved">
              Get Involved
            </Button>
            <Button component={Link} to="/contact">
              Contact
            </Button>
            <Button component={Link} to="/resources">
              Resources
            </Button>
            <Button variant="contained">Donate</Button>
          </Box>

          {/* MOBILE ICON */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 280 }}>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      setMobileOpenSub((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id],
                      }))
                    }
                    sx={{ backgroundColor: getBgColor(item.bgColor) }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      width="100%"
                      alignItems="center"
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        {item.icon}
                        <ListItemText primary={item.title} />
                      </Box>
                      {item.submenu?.length && (
                        <ExpandMoreIcon
                          sx={{
                            transform: mobileOpenSub[item.id]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "0.2s",
                          }}
                        />
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>

                {item.submenu && (
                  <Collapse in={mobileOpenSub[item.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.submenu.map((sub) => (
                        <ListItemButton
                          key={sub.path}
                          sx={{ pl: 4, backgroundColor: getBgColor(sub.bgColor) }}
                          component={Link}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                        >
                          <Box display="flex" alignItems="center" gap={1}>
                            {sub.icon}
                            <ListItemText primary={sub.title} />
                          </Box>
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
          <Box p={2}>
            <Typography variant="caption">
              80% goes directly to recipients
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default HeaderMui;
