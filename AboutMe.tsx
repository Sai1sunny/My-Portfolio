import Sections from "../../Layouts/Sections";
import { Typography } from "@mui/material";

/**
 * The AboutMe function in TypeScript React renders a section with information about the developer's
 * career transition and expertise in technology and finance.
 * @author veerateja
 * @version 1.0.0
 * @returns The `AboutMe` function is returning a JSX element that represents a section with the
 * heading "About Me". Inside this section, there is a `Typography` component that contains information
 * about the individual's recent transition to an Analyst role at DBS Bank and their expertise in
 * React.js and Node.js. The commented out `Card` and `CardContent` components suggest that there might
 * have been a design or
 */

export default function AboutMe() {
  return (
    <Sections sectionHeading="About Me">
      {/* <Card> */}
      {/* <CardContent> */}
      <Typography variant="body1" color="textSecondary" textAlign="center">
        My recent transition to an Analyst role at DBS Bank marked a pivotal
        milestone in my career. With a solid foundation in Computer Science and
        expertise in React.js and Node.js, I create scalable and robust
        applications while merging technology with finance to drive innovation.
      </Typography>
      {/* </CardContent> */}
      {/* </Card> */}
    </Sections>
  );
}
