import { Link as RouterLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { Box, IconButton, Link, Sheet, Typography, Button, Drawer, List, ListItemButton } from "@mui/joy";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Sheet
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: 1.5,
          px: { xs: 2, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(12px)",
          backgroundColor: isDarkMode
            ? "rgba(10, 10, 26, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
          borderBottom: "1px solid",
          borderColor: isDarkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
          boxShadow: "sm",
        }}
      >
        {/* Logo / Name */}
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Typography
            level="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "Agamtoh",
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              background: isDarkMode
                ? "linear-gradient(135deg, #eeeeeeff 0%, #282742ff 100%)"
                : "linear-gradient(135deg, #3561c0ff 0%, #7b90a5ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Travis Souther
          </Typography>
        </Link>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Dark Mode Toggle */}
          <IconButton
            onClick={toggleDarkMode}
            variant="soft"
            size="sm"
            sx={{
              mr: 1,
              borderRadius: "50%",
              transition: "all 0.3s ease",
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.08)",
              "&:hover": {
                transform: "rotate(180deg)",
                backgroundColor: isDarkMode
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                height: "25px",
                width: "25px",
                filter: isDarkMode ? "none" : "invert(1)",
              }}
              src={isDarkMode ? "/icons8-sun-50 (1).png" : "/icons8-moon-50 (1).png"}
              alt={isDarkMode ? "Light mode" : "Dark mode"}
            />
          </IconButton>

          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              variant="plain"
              color="neutral"
              sx={{
                fontWeight: 500,
                fontFamily: 'Neuropol',
                px: 2,
                borderRadius: "lg",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.06)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
          {/* Dark Mode Toggle - Mobile */}
          <IconButton
            onClick={toggleDarkMode}
            variant="soft"
            size="sm"
            sx={{
              borderRadius: "50%",
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "20px",
                width: "20px",
                filter: isDarkMode ? "none" : "invert(1)",
              }}
              src={isDarkMode ? "/icons8-sun-50 (1).png" : "/icons8-moon-50 (1).png"}
              alt={isDarkMode ? "Light mode" : "Dark mode"}
            />
          </IconButton>

          {/* Hamburger Menu */}
          <IconButton
            onClick={() => setMobileMenuOpen(true)}
            variant="soft"
            size="sm"
            sx={{
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Box sx={{ width: 18, height: 2, backgroundColor: isDarkMode ? '#fff' : '#000' }} />
              <Box sx={{ width: 18, height: 2, backgroundColor: isDarkMode ? '#fff' : '#000' }} />
              <Box sx={{ width: 18, height: 2, backgroundColor: isDarkMode ? '#fff' : '#000' }} />
            </Box>
          </IconButton>
        </Box>
      </Sheet>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        anchor="right"
        size="sm"
        sx={{
          '& .MuiDrawer-content': {
            backgroundColor: isDarkMode ? '#0a0a1a' : '#e8f4fc',
          },
        }}
      >
        <Box sx={{ p: 2, pt: 4 }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  py: 2,
                  borderRadius: 'md',
                  fontFamily: 'Neuropol',
                  color: isDarkMode ? '#fff' : '#1a1a2e',
                  '&:hover': {
                    backgroundColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.06)",
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
