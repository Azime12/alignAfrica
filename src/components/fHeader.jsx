import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
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
import { MenuBook, ContactMail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { menuItems } from "../data/muiMenuitem";
import { Close } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function HeaderMui() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpenSub, setMobileOpenSub] = useState({});
    const navigate = useNavigate(); // ADD THIS LINE

  const theme = useTheme();
  const handleOpenMainMenu = (e) => {
    setMenuAnchor(e.currentTarget);
    setActiveItem(null);
  };

  const handleCloseMenus = () => {
    setMenuAnchor(null);
    setSubmenuAnchor(null);
    setActiveItem(null);
  };

  const handleOpenSubmenu = (e, item) => {
    setActiveItem(item);
    setSubmenuAnchor(e.currentTarget);
  };
  // Define responsive values at top
  const LOGO_DIMENSIONS = {
    width: { xs: 100, sm: 130, md: 150, lg: 170 },
    height: { xs: 60, sm: 75, md: 85, lg: 100 },
    borderWidth: { xs: 6, sm: 8, md: 10, lg: 10 },
    leftPosition: { xs: 10, sm: 50, md: 50, lg: 150 }
  };

// Then in JSX

  return (
    <>
      <AppBar position="sticky" elevation={1} sx={{ bgcolor: "#8a3d06" }}>
        {/* IMPORTANT CHANGE: flex-start instead of space-between */}
        <Toolbar sx={{ justifyContent: "flex-start", position: "relative" }}>
<Box
  sx={{
    position: "absolute",
    // Top values as percentage of height: -35% for all screens
    top: { xs: -39, sm: -51, md: -59, lg: -67 }, // ≈ -35% of respective heights
    left: { xs: 10, sm: 5, md: 5, lg: 170 },
    width: { xs: 140, sm: 182, md: 210, lg: 238 },
    height: { xs: 112, sm: 146, md: 168, lg: 190 },
    bgcolor: "white",
    border: { xs: "4px solid #953673", sm: "5px solid #953673", md: "9px solid #953673", lg: "10px solid #953673" },
    borderBottom: "none",
    borderTopLeftRadius: "50% 80%",
    borderTopRightRadius: "50% 80%",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
    boxShadow: `
      0 10px 25px rgba(0,0,0,0.7),
      inset 0 10px 30px rgba(255,255,255,0.95),
      0 4px 12px rgba(149, 54, 115, 0.5),
      inset 0 -4px 15px rgba(149, 54, 115, 0.15)
    `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transform: "rotate(180deg)",
    zIndex: 1,
    background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)",
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '15%',
      left: '15%',
      right: '15%',
      height: '30%',
      background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, transparent 70%)',
      borderRadius: '50%',
      opacity: 0.7,
    }
  }}
>
  <Box
    component="img"
    src="/images/alignafrica.png"
    alt="alignafrica logo"
    sx={{
      width: { xs: "75%", sm: "78%", md: "80%", lg: "80%" },
      mt: { xs: -4, sm: -5, md: -6, lg: -7 }, // Adjusted proportionally
      height: { xs: "70%", sm: "68%", md: "65%", lg: "65%" },
      objectFit: "contain",
      transform: "rotate(-180deg)",
      filter: "drop-shadow(4px 4px 5px rgba(0,0,0,0.3)) brightness(1.08)",
      position: "relative",
      zIndex: 1,
    }}
  />
</Box>
 
  
<Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
  <Button
    onClick={handleOpenMainMenu}
    endIcon={<ChevronRightIcon />}
    sx={{
      width: 200,
      height: 70,
      ml: {md:25,lg:55, xl:60},
      mr: 0,
      bgcolor: "#f7bc47",
      color: "#000",
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "0px 10px 10px 0px",
      fontSize: 20,
      lineHeight: "70px",
      boxShadow: "inset 0 0 35px #e89c03",
      "&:hover": {
        bgcolor: "#FCDC9A",
        boxShadow: "inset 0 0 50px #ffb82a",
      },
    }}
  >
    ☰ Menu
  </Button>

{/* Main Menu */}
<Menu
  anchorEl={menuAnchor}
  open={Boolean(menuAnchor)}
  onClose={handleCloseMenus}
  PaperProps={{ 
    sx: { 
      backgroundColor: "#fff", 
      minWidth: 260,
      maxHeight: "100vh", // Increased height
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      border: "1px solid rgba(0,0,0,0.1)",
      overflow: "hidden",
      
    } 
  }}
  MenuListProps={{
    onMouseLeave: () => {
      setTimeout(() => {
        if (!submenuAnchor) {
          handleCloseMenus();
        }
      }, 100);
    },
    sx: { 
      p: 1,
      maxHeight: "85vh", // Allow scrolling
      overflowY: "auto",
    }
  }}
>
 {menuItems.map((item) => (
  <MenuItem
    key={item.id}
    onMouseEnter={(e) => {
      e.stopPropagation();
      // Only open submenu if it has items
      if (item.submenu && item.submenu.length > 0) {
        setActiveItem(item);
        setSubmenuAnchor(e.currentTarget);
      }
    }}
    onClick={(e) => {
      // If no submenu, close menu and navigate
      if (!item.submenu || item.submenu.length === 0) {
        handleCloseMenus();
        navigate(item.path);
      }
    }}
    sx={{
      borderRadius: "8px",
      py: 1.5,
      px: 2,
      mb: 0.5,
      backgroundColor: activeItem?.id === item.id ? item.bgColor : "transparent",
      color: activeItem?.id === item.id ? "white" : "#333",
      transition: "all 0.2s ease",
      cursor: (!item.submenu || item.submenu.length === 0) ? "pointer" : "default",
      "&:hover": {
        backgroundColor: item.bgColor,
        color: "white",
        transform: "translateX(4px)",
        boxShadow: `0 4px 12px ${item.bgColor}50`,
        // Don't open submenu on click if no submenu
        ...((!item.submenu || item.submenu.length === 0) && {
          cursor: "pointer",
        }),
      },
    }}
  >
    <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
      <Box display="flex" gap={1.5} alignItems="center">
        <Box sx={{ 
          color: activeItem?.id === item.id ? "white" : item.bgColor,
          transition: "color 0.2s",
        }}>
          {item.icon}
        </Box>
        <Box sx={{ fontWeight: 500, fontSize: 14 }}>{item.title}</Box>
      </Box>
      {/* Show arrow ONLY if submenu exists and has items */}
      {item.submenu && item.submenu.length > 0 && (
        <ChevronRightIcon sx={{ 
          fontSize: 18, 
          opacity: 0.6,
          transition: "transform 0.2s",
        }} />
      )}
    </Box>
  </MenuItem>
))}
</Menu>

{/* Sub Menu - Compact with Large Scroll Area */}
<Menu
  anchorEl={submenuAnchor}
  open={Boolean(submenuAnchor)}
  onClose={() => setSubmenuAnchor(null)}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
  transformOrigin={{ vertical: "top", horizontal: "left" }}
  PaperProps={{
    sx: { 
      backgroundColor: activeItem?.bgColor || "#fff", 
      minWidth: 260,
      maxHeight: '80vh',
      borderRadius: "14px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      border: "1px solid rgba(255,255,255,0.2)",
      ml: 0.5,
      mt: -0.5,
      overflow: "hidden",
      display: 'flex',
      flexDirection: 'column',
    },
  }}
  MenuListProps={{
    onMouseLeave: () => setTimeout(() => { setSubmenuAnchor(null); setActiveItem(null); }, 150),
    sx: { 
      p: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }
  }}
>
  {/* Compact Header */}
  <Box sx={{ 
    p: 1.5, 
    backgroundColor: 'rgba(0,0,0,0.1)', 
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0,
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
      <Box sx={{ 
        color: 'white', 
        opacity: 0.9,
        fontSize: 18
      }}>
        {activeItem?.icon}
      </Box>
      <Box sx={{ 
        fontWeight: 600, 
        fontSize: 14, 
        color: 'white',
      }}>
        {activeItem?.title}
      </Box>
    </Box>
  </Box>

  {/* Scrollable Content */}
  <Box sx={{ 
    flex: 1,
    overflowY: 'auto',
    p: 1,
    maxHeight: 'calc(80vh - 60px)', // Account for header
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '3px',
      '&:hover': {
        background: 'rgba(255,255,255,0.3)',
      }
    },
  }}>
    {activeItem?.submenu?.map((sub) => (
      <MenuItem
        key={sub.path}
        component={Link}
        to={sub.path}
        onClick={handleCloseMenus}
        sx={{
          color: "#fff",
          borderRadius: "8px",
          py: 1.25,
          px: 2,
          mb: 0.5,
          transition: "all 0.2s ease",
          "&:hover": { 
            backgroundColor: "rgba(255,255,255,0.15)",
            transform: "translateX(4px)",
          },
        }}
      >
        <Box display="flex" gap={1.5} alignItems="center">
          <Box sx={{ opacity: 0.9, width: 20 }}>
            {sub.icon}
          </Box>
          <Box sx={{ fontWeight: 400, fontSize: 13 }}>{sub.title}</Box>
        </Box>
      </MenuItem>
    ))}
  </Box>
</Menu>
</Box>

   
          {/* Desktop Buttons Container */}
   <Box sx={{ height: 70, px: 2, overflow: "hidden", ml: -4 }}>
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      height: 400,
      pl: 3,
      mt: -20,
      borderRadius: "50%",
      alignItems: "center",
      fontSize: 14,
      background: "linear-gradient(to right, #36a3bc, #1e7e9e)",
      boxShadow: "inset 0 5px 20px rgba(255,255,255,0.1)",
    }}
  >
    <Button
      component={Link}
      to="/faqs"
      startIcon={<VolunteerActivismIcon sx={{ fontSize: 16 }} />}
      sx={{
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        borderRadius: '20px',
        textTransform: "none",
        whiteSpace: "nowrap",
        px: 2,
        py: 0.8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transition: 'all 0.2s ease',
        "&:hover": { 
          backgroundColor: 'rgba(255,255,255,0.25)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      Get Involved
    </Button>

    <Button
      component={Link}
      to="/contactsUs"
      startIcon={<ContactMail sx={{ fontSize: 16 }} />}
      sx={{
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        borderRadius: '20px',
        textTransform: "none",
        px: 2,
        py: 0.8,
        ml: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transition: 'all 0.2s ease',
        "&:hover": { 
          backgroundColor: 'rgba(255,255,255,0.25)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      Contact
    </Button>

    <Button
      component={Link}
      to="/resource"
      startIcon={<MenuBook sx={{ fontSize: 16 }} />}
      sx={{
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        borderRadius: '20px',
        textTransform: "none",
        px: 2,
        py: 0.8,
        ml: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transition: 'all 0.2s ease',
        "&:hover": { 
          backgroundColor: 'rgba(255,255,255,0.25)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      Resources
    </Button>

    <Box
      sx={{
        height: 72,
        width: 220,
        mt: -1,
        mr: -2,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        component={Link}
        to="/donate"
        sx={{
          width: 300,
          height: 190,
          mt: -3.5,
          borderRadius: "50%",
          backgroundColor: "#91bc36",
          color: "white",
          border: "10px solid #b0624c",
          boxShadow: "inset 0 0 80px #759e1e, 0 8px 25px rgba(145, 188, 54, 0.3)",
          fontWeight: 900,
          fontSize: 36,
          textTransform: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#a7d447",
            borderColor: "#CF7E67",
            transform: "scale(1.03)",
            boxShadow: "inset 0 0 90px #759e1e, 0 12px 35px rgba(145, 188, 54, 0.5)",
          },
        }}
      >
        Donate
        <Box
          component="span"
          sx={{
            fontFamily: "'EB Garamond', serif",
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1,
            mt: -1.5,
            whiteSpace: "nowrap",
          }}
        >
          <strong>80%+</strong> goes to recipients
        </Box>
      </Button>
    </Box>
  </Box>
</Box>


{/* Mobile Donate Button */}
<Box sx={{ 
  display: { xs: "flex", md: "none" },
  ml: "auto", 
  alignItems: "center", 
  gap: 1 
}}>
  <Button
    component={Link}
    to="/donate"
    sx={{
      borderRadius: "14px",
      backgroundColor: "#91bc36",
      color: "white",
      fontWeight: "800",
      display:{xs:'none'},
      fontSize: 15,
      textTransform: "uppercase",
      boxShadow: "0 6px 0 #759e1e, 0 8px 20px rgba(145, 188, 54, 0.4)",
      px: 2.2,
      py: 0.9,
      minWidth: 105,
      height: 42,
      whiteSpace: "nowrap",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
        backgroundColor: "#a7d447",
        transform: "translateY(2px)",
        boxShadow: "0 4px 0 #759e1e, 0 6px 16px rgba(145, 188, 54, 0.5)",
      },
      "&:active": {
        transform: "translateY(6px)",
        boxShadow: "0 0 0 #759e1e, 0 3px 10px rgba(145, 188, 54, 0.4)",
      },
      "&::before": {
        content: '"❤️"',
        position: "absolute",
        left: 8,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: 18,
        animation: "heartBeat 1.5s infinite",
        "@keyframes heartBeat": {
          "0%": { transform: "translateY(-50%) scale(1)" },
          "5%": { transform: "translateY(-50%) scale(1.2)" },
          "10%": { transform: "translateY(-50%) scale(1)" },
          "15%": { transform: "translateY(-50%) scale(1.2)" },
          "20%": { transform: "translateY(-50%) scale(1)" },
          "100%": { transform: "translateY(-50%) scale(1)" },
        },
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "left 0.7s ease",
      },
      "&:hover::after": {
        left: "100%",
      },
    }}
  >
    <Box sx={{ pl: 2.5, fontWeight: 900 }}>DONATE</Box>
  </Button>

  <IconButton
    onClick={() => setMobileOpen(true)}
    sx={{ 
      color: "white",
      backgroundColor: "rgba(255,255,255,0.12)",
      width: 42,
      height: 42,
      borderRadius: "10px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.25)",
        transform: "scale(1.05)",
      },
    }}
  >
    <MenuIcon sx={{ fontSize: 22 }} />
  </IconButton>
</Box>
        </Toolbar>
      </AppBar>

  <Drawer
  anchor="left"
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
  PaperProps={{
    sx: {
      width: 280,
      backgroundColor: "#333",
      color: "white",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden", // Prevent overall drawer scrolling
    },
  }}
  ModalProps={{
    keepMounted: true,
    disableScrollLock: true,
  }}
>
  {/* MAIN CONTAINER WITH FLEX COLUMN LAYOUT */}
  <Box sx={{ 
    width: 280,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden"
  }}>
    {/* HEADER - FIXED AT TOP */}
    <Box
      sx={{
        flexShrink: 0, // Prevent header from shrinking
        px: 2,
        pt: 1,
        pb: 0.5,
        background: "linear-gradient(135deg, #8a3d06 0%, #6b2d04 100%)",
        borderBottom: "3px solid #953673",
      }}
    >
      {/* CLOSE BUTTON */}
      <IconButton
        onClick={() => setMobileOpen(false)}
        sx={{
          position: "absolute",
          right: 8,
          top: 6,
          color: "white",
        }}
      >
        <Close sx={{ fontSize: 30 }} />
      </IconButton>

      {/* LOGO + TITLE ROW */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: { xs: 44, sm: 56 },
            height: { xs: 44, sm: 56 },
            borderRadius: "50%",
            p: 0.2,
            background: "linear-gradient(135deg, #fff 0%, #f3f3f3 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/images/alignafrica.png"
            alt="Align Africa"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* TITLE */}
        <Box
          component="h2"
          sx={{
            fontSize: { xs: 18, sm: 22 },
            fontWeight: 800,
            m: 0,
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            background: "linear-gradient(to right, #f7bc47, #ffffff, #91bc36)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ALIGN AFRICA
        </Box>
      </Box>

      {/* TAGLINE */}
      <Box
        component="p"
        sx={{
          ml: { xs: 0, sm: 7 },
          fontSize: 12,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Transforming Lives Together
      </Box>
    </Box>

    {/* SCROLLABLE CONTENT AREA */}
    <Box
      sx={{
        flex: 1, // Take up all available space
        overflowY: "auto", // Enable vertical scrolling
        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
      }}
    >
      <List sx={{ py: 0 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding sx={{ p: 0 }}>
              <ListItemButton
                onClick={() =>
                  setMobileOpenSub((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                }
                sx={{
                  backgroundColor: item.bgColor,
                  py: 0.5,
                  px: 3,
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: item.bgColor,
                    filter: 'brightness(0.9)'
                  },
                }}
              >
                <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                  <Box display="flex" gap={1} alignItems="center">
                    {item.icon}
                    <ListItemText 
                      primary={item.title} 
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </Box>
                  {item.submenu && (
                    mobileOpenSub[item.id] ? <ExpandMoreIcon /> : <ChevronRightIcon />
                  )}
                </Box>
              </ListItemButton>
            </ListItem>

            <Collapse in={mobileOpenSub[item.id]} unmountOnExit>
              <List disablePadding sx={{ backgroundColor: `${item.bgColor}80` }}>
                {item.submenu?.map((sub) => (
                  <ListItemButton
                    key={sub.path}
                    component={Link}
                    to={sub.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{ 
                      pl: 4, 
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: `${item.bgColor}80`,
                        filter: 'brightness(0.9)'
                      },
                    }}
                  >
                    <Box display="flex" gap={1} alignItems="center">
                      {sub.icon}
                      <ListItemText primary={sub.title} />
                    </Box>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      {/* MOBILE ACTION BUTTONS (INSIDE SCROLLABLE AREA) */}
      <Box sx={{ px: 1, py: 0.4, pb: 1 }}>
        <Button
          component={Link}
          to="/faqs"
          startIcon={<VolunteerActivismIcon />}
          onClick={() => setMobileOpen(false)}
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
            textTransform: "none",
            borderRadius: "10px",
            justifyContent: "flex-start",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": { 
              backgroundColor: "rgba(255,255,255,0.2)" 
            },
            mb: 0.5,
            pl:3,
            width: "100%",
          }}
        >
          Get Involved
        </Button>

        <Button
          component={Link}
          to="/contactsUs"
          startIcon={<ContactMail />}
          onClick={() => setMobileOpen(false)}
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
            textTransform: "none",
            borderRadius: "10px",
            justifyContent: "flex-start",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": { 
              backgroundColor: "rgba(255,255,255,0.2)" 
            },
            mb: 0.5,
            pl:3,
            width: "100%",
          }}
        >
          Contact
        </Button>

        <Button
          component={Link}
          to="/resource"
          startIcon={<MenuBook />}
          onClick={() => setMobileOpen(false)}
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
            pl:3,
            textTransform: "none",
            borderRadius: "10px",
            justifyContent: "flex-start",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": { 
              backgroundColor: "rgba(255,255,255,0.2)" 
            },
            width: "100%",
          }}
        >
          Resources
        </Button>
      </Box>
    </Box>

    {/* FIXED DONATE BUTTON AT BOTTOM - OUTSIDE SCROLLABLE AREA */}
    <Box
      sx={{
        flexShrink: 0, // Prevent shrinking
        px: 2,
        pt:0.3,
        pb:8,
        // mb:2,
        background: "linear-gradient(to right, #36a3bc, #1e7e9e)",
        borderTop: "3px solid #953673",
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Button
        component={Link}
        to="/donate"
        onClick={() => setMobileOpen(false)}
        fullWidth
        sx={{
          borderRadius: "16px",
          background: "linear-gradient(135deg, #91bc36 0%, #a7d447 100%)",
          color: "white",
          fontWeight: 900,
          fontSize: "18px",
          textTransform: "uppercase",
          boxShadow: `
            0 8px 0 #759e1e,
            0 15px 30px rgba(145, 188, 54, 0.4),
            inset 0 4px 15px rgba(255, 255, 255, 0.3)
          `,
          py: 1.2,
          px: 0,
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          letterSpacing: "1px",
          transition: "all 0.2s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #a7d447 0%, #b8e05c 100%)",
            transform: "translateY(2px)",
            boxShadow: `
              0 6px 0 #759e1e,
              0 12px 25px rgba(145, 188, 54, 0.5),
              inset 0 4px 15px rgba(255, 255, 255, 0.4)
            `,
          },
          "&:active": {
            transform: "translateY(8px)",
            boxShadow: `
              0 0 0 #759e1e,
              0 5px 15px rgba(145, 188, 54, 0.4),
              inset 0 4px 15px rgba(255, 255, 255, 0.3)
            `,
          },
          "&::before": {
            content: '"❤️"',
            position: "absolute",
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 20,
            animation: "heartBeat 1.5s infinite",
            "@keyframes heartBeat": {
              "0%": { transform: "translateY(-50%) scale(1)" },
              "5%": { transform: "translateY(-50%) scale(1.2)" },
              "10%": { transform: "translateY(-50%) scale(1)" },
              "15%": { transform: "translateY(-50%) scale(1.2)" },
              "20%": { transform: "translateY(-50%) scale(1)" },
              "100%": { transform: "translateY(-50%) scale(1)" },
            },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transition: "left 0.7s ease",
          },
          "&:hover::after": {
            left: "100%",
          },
        }}
      >
        <Box sx={{ pl: 2 }}>DONATE NOW</Box>
      </Button>
    </Box>
  </Box>
</Drawer>
    </>
  );
}

export default HeaderMui;
