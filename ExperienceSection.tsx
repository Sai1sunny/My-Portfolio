import { ReactNode } from "react";
import Sections from "../../Layouts/Sections";
import { expSection_heading_label } from "../../constants/labels";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { experience } from "../../constants/projectConstants";
import { ExperienceType } from "../../types/common/commonTypes";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

/**
 * This code snippet defines a React functional component called `ExperienceSection`. This component
 * renders a timeline of experiences using the Material-UI Timeline component. Here's a breakdown of
 * what the code is doing
 * @author veerateja
 * @version 1.0.0
 */
export default function ExperienceSection(): ReactNode {
  return (
    <Sections sectionHeading={expSection_heading_label}>
      <>
        <Timeline
          // position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experience.map(
            (item: ExperienceType): ReactNode => (
              <TimelineItem key={item.id}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color="secondary"
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.id}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard
                    id={item.id}
                    companyName={item.companyName}
                    role={item.role}
                    fullTimeOrNot={item.fullTimeOrNot}
                    from={item.from}
                    to={item.to}
                    summary={item.summary}
                    points={item.points}
                    location={item.location}
                    locationUrl={item.locationUrl}
                    isCurrent={item.isCurrent}
                  />
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Timeline>
      </>
    </Sections>
  );
}
