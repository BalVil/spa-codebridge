import {
  Box,
  Typography,
  Link,
  CardMedia,
  CardContent,
  Container,
  Card,
} from "@mui/material";

import RightArrow from "../assets/right-arrow.svg";

function FullArticle({ item }) {
  console.log(item);
  return (
    <Box
      sx={{
        backgroundImage: `url(${item.imageUrl})`,
        height: "220px",
      }}
    >
      <Container maxWidth={false} sx={{ px: "75px" }} disableGutters>
        <Card sx={{ p: 6, mt: 6, mb: "35px" }}>
          <CardContent sx={{ flexGrow: "1" }}>
            <Typography variant="h3" component="h1" mb={"50px"}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.summary}</Typography>
          </CardContent>
        </Card>
        <Link href="/" underline="hover" color="inherit">
          <img src={RightArrow} style={{ marginRight: "6px" }} />
          Back to homepage
        </Link>
      </Container>
    </Box>
  );
}

export default FullArticle;
