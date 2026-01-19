import { Box, Card, Typography, Link } from "@mui/joy"

type ProjectCardProps = {
  title: string;
  image: string;
  url: string;
  description?: string;
}

function ProjectCard({ title, image, url, description }: ProjectCardProps) {
  return (
    <Card
      component={Link}
      href={url}
      target="_blank"
      underline="none"
      variant="outlined"
      sx={{
        width: 350,
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 'xl',
        },
      }}
    >
      <Typography level="title-lg" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {description && (
        <Typography level="body-sm">
          {description}
        </Typography>
      )}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          mt: 1,
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 'sm',
        }}
      />
    </Card>
  );
}

export default ProjectCard;
