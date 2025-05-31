import { Box, Grid, IconButton, Slide, Typography } from "@mui/material";
import { ReactNode } from "react";
import {
  intro_introMsg_label,
  intro_welcomeMsg_label,
  intro_address_label,
} from "../../constants/labels";
import Sections from "../../Layouts/Sections";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  myYoutubeUrl,
  myGitHubUrl,
  myLinkedInUrl,
  myEmailUrl,
} from "../../constants/url";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { ErrorBoundary } from "react-error-boundary";
// const GoogleMap = lazy(() => import("../../components/GoogleMap/GoogleMap"));
/**
 * The `IntroSection` function returns a React component that displays introductory information, an
 * image, and social media links in a grid layout.
 * @author veerateja
 * @function IntroSection
 * @returns The `IntroSection` function is returning a JSX element that consists of a Grid container
 * with two Grid items. The first Grid item contains nested Grid containers with Typography components
 * displaying text values from `intro_welcomeMsg_label` and `intro_introMsg_label`. Additionally, there
 * are placeholders for an address and social media links. The second Grid item contains an image
 * element with the source set to `myImage
 */
export default function IntroSection(): ReactNode {
  return (
    <Sections sectionHeading="">
      <Grid container flexDirection={["column", "row"]} spacing={3}>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Grid item xs={12} sm={5}>
            <Grid container gap={4} flexDirection={"column"}>
              <Grid item>
                <Grid container flexDirection={"column"}>
                  <Grid item>
                    <Typography gutterBottom variant="h1" color={"textPrimary"}>
                      {intro_welcomeMsg_label}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color={"textPrimary"}>
                      {intro_introMsg_label}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box display={"flex"} gap={1}>
                  <LocationOnIcon color="primary" />{" "}
                  <Typography color={"textPrimary"}>
                    {intro_address_label}
                  </Typography>
                </Box>
              </Grid>
              <Grid item container gap={1} flexDirection={"row"}>
                <IconButton href={myEmailUrl} target="_blank">
                  <EmailIcon sx={{ color: "#0077B5" }} />
                </IconButton>
                <IconButton href={myGitHubUrl} target="_blank">
                  <GitHubIcon sx={{ color: "#2b3137" }} />
                </IconButton>
                <IconButton href={myLinkedInUrl} target="_blank">
                  <LinkedInIcon sx={{ color: "#0077B5" }} />
                </IconButton>
                <IconButton href={myYoutubeUrl} target="_blank">
                  <YouTubeIcon sx={{ color: "#FF0000" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
        {/* <Grid item xs={12} md={7} sx={{ minHeight: 500 }}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Card elevation={4} sx={{ width: "100%", height: [300, "", "100%"] }}>
              <CardContent sx={{ width: "100%", height: "100%" }}>
                <ErrorBoundary fallback={<div>Failed to load Google map.</div>} >
                  <Suspense fallback={<div>loading map.</div>}>
                    <GoogleMap />
                  </Suspense>
                </ErrorBoundary>
              </CardContent>
            </Card>
          </Slide>
        </Grid> */}
      </Grid>
    </Sections>
  );
}
