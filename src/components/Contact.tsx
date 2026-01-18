
import { Box, Divider, Link, Stack, Typography } from "@mui/joy"


function Contact() {
  return (
    <Box>
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
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
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

      <Box>
        <Typography level="body-md">
          Please feel free to reach out. I'm always looking to better myself and connect with like minded individuals.
        </Typography>
      </Box>

      <Box component="footer">
        <Typography level="body-sm">Thanks for visiting!</Typography>
      </Box>
    </Box>
  );
}


export default Contact;
