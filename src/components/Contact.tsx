
import { Box, Divider, Link, Stack, Typography } from "@mui/joy"
import Footer from "./footer"

function Contact() {
  return (
    <Box sx={{p: 10}}>
      <Typography level="h1">Contact</Typography>

      <Box  sx={{ mt: 2 }}>
        <Box >
          <Box >
            <Stack spacing={3}>
              <Box>
                <Typography level="h2">Email 📨</Typography>
                <Divider />
                <Typography level="body-md">souther-trav@hotmail.com</Typography>
              </Box>

              <Box>
                <Typography level="h2">Phone 📳</Typography>
                <Divider />
                <Typography level="body-md">405-765-2377</Typography>
              </Box>

              <Box>
                <Typography level="h2">Social Links</Typography>
                <Divider />
                <Stack direction="row" spacing={2} sx={{ mt: 1, justifyContent: 'center' }}>
                  <Link href="https://www.linkedin.com/in/travis-souther" target="_blank">
                    <Box component="img" src="/icons8-linkedin-50 (1).png" sx={{ width: 60 }} alt="LinkedIn" />
                  </Link>
                  <Link href="https://www.facebook.com/tsouther1/" target="_blank">
                    <Box component="img" src="/icons8-facebook-50 (1).png" sx={{ width: 60 }} alt="Facebook" />
                  </Link>
                  <Link href="https://www.instagram.com/tssouther/" target="_blank">
                    <Box component="img" src="/icons8-instagram-50 (1).png" sx={{ width: 60 }} alt="Instagram" />
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
       <Footer/>
    </Box>
  );
}


export default Contact;
