import { Box, Card, CardContent, Typography, Stack, Link } from "@mui/joy"

type ExperienceCardProps = {
  company: string;
  role: string;
  descriptions: string[];
  image?: string;
  url?: string;
  isDarkMode: boolean;
}

function ExperienceCard({ company, role, descriptions, image, url, isDarkMode }: ExperienceCardProps) {
  return (
    <Card
      variant="outlined"
      component={url ? Link : 'div'}
      href={url}
      target="_blank"
      underline="none"
      sx={{
        maxWidth: 600,
        backgroundColor: isDarkMode
          ? '#000000'
          : 'rgba(255, 255, 255, 0.9)',
        boxShadow: isDarkMode
          ? '0 0 3px 0px rgba(255, 255, 255, 1)'
          : '0 0 3px 0px rgba(0, 0, 0, 0.3)',
        border: 'none',
        cursor: url ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.3s',
        '&:hover': url ? {
          transform: 'scale(1.01)',
          boxShadow: isDarkMode
            ? '0 0 20px 8px rgba(255, 255, 255, 0.3)'
            : '0 0 20px 8px rgba(0, 0, 0, 0.2)',
        } : {},
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
          <Box>
            <Typography level="h3">{company}</Typography>
            <Typography level="title-md" sx={{ color: 'text.secondary' }}>
               :{role}
            </Typography>
          </Box>
          {image && (
            <Box
              component="img"
              src={image}
              alt={company}
              sx={{ width: 80, height: 80, objectFit: 'contain', flexShrink: 0 }}
            />
          )}
        </Box>
        <Stack spacing={1} sx={{ mt: 2 }}>
          {descriptions.map((desc, index) => (
            <Typography key={index} level="body-md">
              {desc}
            </Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
