
import { Box, Card, Divider, Link, Stack, Typography } from "@mui/joy"
import Footer from "./footer"

type ContactProps = {
  isDarkMode: boolean;
};

function Contact({ isDarkMode }: ContactProps) {
  return (
    <Box sx={{ p: 4, pt: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Typography level="h1" sx={{ mb: 2, textShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.8)' : '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Contact</Typography>
        <Divider sx={{ width: 400 }} />
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ width: '100%', maxWidth: 900, justifyContent: 'center' }}>
        {/* Contact Info Card */}
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            maxWidth: 400,
            p: 4,
            borderRadius: 'xl',
            backdropFilter: 'blur(10px)',
            boxShadow: 'lg',
          }}
        >
          <Typography level="h3" sx={{ mb: 2, textAlign: 'center' }}>Get In Touch</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography level="title-lg" sx={{ mb: 1 }}>Email 📨</Typography>
              <Divider />
              <Link
                href="mailto:souther-trav@hotmail.com"
                underline="hover"
                sx={{ mt: 1, display: 'block' }}
              >
                <Typography level="body-md">souther-trav@hotmail.com</Typography>
              </Link>
            </Box>

            <Box>
              <Typography level="title-lg" sx={{ mb: 1 }}>Phone 📳</Typography>
              <Divider />
              <Link
                href="tel:405-765-2377"
                underline="hover"
                sx={{ mt: 1, display: 'block' }}
              >
                <Typography level="body-md">405-765-2377</Typography>
              </Link>
            </Box>
          </Stack>
        </Card>

        {/* Social Links Card */}
        <Card
          variant="outlined"
          sx={{
            flex: 1,
            maxWidth: 400,
            p: 4,
            borderRadius: 'xl',
            backdropFilter: 'blur(10px)',
            boxShadow: 'lg',
          }}
        >
          <Typography level="h3" sx={{ mb: 2, textAlign: 'center' }}>Social Links</Typography>
          <Divider sx={{ mb: 3 }} />
          <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Link href="https://www.linkedin.com/in/travis-souther" target="_blank">
              <Box
                component="img"
                src="/icons8-linkedin-50 (1).png"
                alt="LinkedIn"
                sx={{
                  width: 60,
                  transition: 'transform 0.2s',
                  filter: isDarkMode ? 'none' : 'invert(1)',
                  '&:hover': { transform: 'scale(1.15)' }
                }}
              />
            </Link>
            <Link href="https://www.facebook.com/tsouther1/" target="_blank">
              <Box
                component="img"
                src="/icons8-facebook-50 (1).png"
                alt="Facebook"
                sx={{
                  width: 60,
                  transition: 'transform 0.2s',
                  filter: isDarkMode ? 'none' : 'invert(1)',
                  '&:hover': { transform: 'scale(1.15)' }
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/tssouther/" target="_blank">
              <Box
                component="img"
                src="/icons8-instagram-50 (1).png"
                alt="Instagram"
                sx={{
                  width: 60,
                  transition: 'transform 0.2s',
                  filter: isDarkMode ? 'none' : 'invert(1)',
                  '&:hover': { transform: 'scale(1.15)' }
                }}
              />
            </Link>
          </Stack>
        </Card>
      </Stack>

      <Box sx={{ mt: 5 }}>
        <Footer/>
      </Box>
    </Box>
  );
}


export default Contact;
