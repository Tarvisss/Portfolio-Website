import { Box, Typography } from "@mui/joy"

export default function Footer(){
    return (
        <>
        <Box>
        <Typography level="body-md">
          Please feel free to reach out. I'm always looking to better myself and connect with like minded individuals.
        </Typography>
      </Box>

      <Box component="footer">
        <Typography level="body-sm">Thanks for visiting!</Typography>
      </Box>
      </>
    )
}

