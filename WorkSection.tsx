import { ReactNode } from "react";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { projects } from "../../constants/projectConstants";
import Sections from "../../Layouts/Sections";
import { ProjectType } from "../../types/common/commonTypes";
import { Grid } from "@mui/material";

/**
 * This code snippet is defining a React functional component named `WorkSection` that returns JSX elements.
 * @author veerateja
 * @version 1.0.0
 * @function
 * @summary
 */
export default function WorkSection(): ReactNode {
  return (
    <Sections sectionHeading="My Work">
      <Grid container gap={2}>
        <Grid item>
          {/* project cards start*/}
          <Grid container flexDirection={"column"} gap={2}>
            {projects.map((item: ProjectType) => (
              <Grid item key={item.id}>
                <ProjectCards
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  skills={item.skills}
                  imageUrl={item.imageUrl}
                  projectUrl={item.projectUrl}
                  gitHubUrl={item.gitHubUrl}
                />
              </Grid>
            ))}
          </Grid>
          {/* project cards end*/}
        </Grid>
      </Grid>
    </Sections>
  );
}
