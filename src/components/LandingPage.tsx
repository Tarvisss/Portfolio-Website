
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

function LandingPage() {
  return (
    <Box sx={{
      p: 4,
      pt: 12,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Typography level="h1" sx={{ mb: 4 }}>Welcome</Typography>

      {/* Welcome Card */}
      <Card
        variant="outlined"
        sx={{
          maxWidth: 750,
          width: '100%',
          p: 4,
          borderRadius: 'xl',
          backdropFilter: 'blur(10px)',
          boxShadow: 'lg',
          textAlign: 'center',
        }}
      >
        {/* Profile Photo */}
        <Box
          component="img"
          src="/received_384379397843857.jpeg"
          alt="Travis Souther"
          sx={{
            width: 160,
            height: 160,
            borderRadius: '15%',
            objectFit: 'cover',
            boxShadow: 'lg',
            border: '3px solid',
            borderColor: 'divider',
            mb: 3,
            display: 'block',
            mx: 'auto',
          }}
        />

        {/* Description below */}
        <Typography level="body-lg" sx={{ fontSize: '1.15rem' }}>
          I am committed to continuous learning and have built a strong
          foundation in leadership, project coordination, and team
          collaboration through hands-on experience in maintenance operations
          and related roles. I bring both software and mechanical skills, which
          helps me understand problems from multiple angles and work
          effectively with diverse teams. I enjoy solving practical, complex
          problems and take pride in delivering reliable, well thought out
          solutions. 👨🏼‍💻
        </Typography>
      </Card>

      {/* Certifications Section */}
      <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        {/* Springboard Badge */}
        <Box
          component="img"
          src="/SpringBoard.png"
          alt="Springboard Certificate"
          sx={{
            width: 250,
            height: 'auto',
            borderRadius: 'md',
            boxShadow: 'md',
          }}
        />

        {/* Credly Badge */}
        <Box>
          <Box
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="aae6384c-cbfa-4bbb-991f-b08bba55138a"
            data-share-badge-host="https://www.credly.com"
          />
          <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </Box>
      </Box>

      {/* HitWebCounter Widget - Bottom Center */}
      <Box sx={{ mt: 'auto', pb: 4 }}>
        <Link
          href="https://www.hitwebcounter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src="https://hitwebcounter.com/counter/counter.php?page=21239517&style=0036&nbdigits=5&type=page&initCount=0"
            alt="Visit Counter"
          />
        </Link>
      </Box>
    </Box>
  );
}

export default LandingPage;
