import { Box, Card, CardCover, Typography, Link } from "@mui/joy"

type ProjectCardProps = {
  title: string;
  image: string;
  url: string;
  description?: string;
}

function ProjectCard({ title, image, url, description }: ProjectCardProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography level="h3" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      {description && (
        <Typography level="body-md" sx={{ mb: 1 }}>
          {description}
        </Typography>
      )}
      <Card
        component={Link}
        href={url}
        target="_blank"
        underline="none"
        sx={{
          width: 320,
          height: 240,
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 'lg',
          },
        }}
      >
        <CardCover>
          <img src={image} alt={title} style={{ objectFit: 'cover' }} />
        </CardCover>
      </Card>
    </Box>
  );
}

export default ProjectCard;
