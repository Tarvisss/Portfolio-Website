
import { Link as RouterLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { Box, IconButton, Link, List, ListItem, Typography } from "@mui/joy";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}


function Navbar({isDarkMode, setIsDarkMode}: NavbarProps) {

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Box >
      <Box >
        <Link component={RouterLink} to="/" underline="none">
          <Box >
            <Typography level="body-lg" sx={{ color: 'inherit' }}>Travis Souther</Typography>
          </Box>
        </Link>

        <List orientation="horizontal" >
          <ListItem>
            <IconButton onClick={toggleDarkMode} variant="plain" >
              {isDarkMode === true ? (
                <Box component="img" sx={{height: "32px"}} src="/icons8-sun-50 (1).png" alt="lightMode" />
              ) : (
                <Box component="img" sx={{height: "32px"}} src="/icons8-moon-50 (1).png" alt="darkMode" />
              )}
            </IconButton>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/experience" underline="none">
              Experience
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/projects" underline="none">
              Projects
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/contact" underline="none">
              Contact
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Navbar;
