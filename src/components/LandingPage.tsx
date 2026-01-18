
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function LandingPage() {
  return (
    <Box>
      <Box>
        <Stack spacing={3}>
          <Typography level="body-md">
            I am committed to continuous learning and have built a strong
            foundation in leadership, project coordination, and team
            collaboration through hands-on experience in maintenance operations
            and related roles. I bring both software and mechanical skills, which
            helps me understand problems from multiple angles and work
            effectively with diverse teams. I enjoy solving practical, complex
            problems and take pride in delivering reliable, well thought out
            solutions. 👨🏼‍💻
          </Typography>

          <Button>
            Checking Button
          </Button>

          <Typography level="body-sm" fontWeight="lg">
            Thanks for visiting!
          </Typography>

          {/* HitWebCounter Widget */}
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
        </Stack>
      </Box>
    </Box>
  );
}

export default LandingPage;
