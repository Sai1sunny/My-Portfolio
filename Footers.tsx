import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import routes, { RoutesType } from "../../routes";
import { Link } from "react-router-dom";
import {
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_SITEMAP_HEADING,
  FOOTER_SUBSCRIBE_HEADING,
} from "./labels";
import myImage from "../../assets/user.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CopyRight from "../../components/CopyRight/CopyRight";

/**
 * This function will render the footer of the application
 * @author veerateja
 * @version 1.0.0
 * @function Footers
 */
export default function Footers(): ReactNode {
  const theme = useTheme();
  const NavLinks = (): ReactNode => (
    <Stack direction={"column"} spacing={1}>
      {routes.map(
        (item: RoutesType): ReactNode => (
          <Link
            to={item.path}
            style={{ color: theme.palette.text.primary }}
            key={item.path}
          >
            {item.navLabel}
          </Link>
        )
      )}
    </Stack>
  );

  return (
    <>
      <Divider sx={{ mt: 3 }} />
      <Box
        component={"footer"}
        sx={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ mb: 1 }}
              color={"TextPrimary"}
              variant="h6"
              gutterBottom
            >
              {FOOTER_SUBSCRIBE_HEADING}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ mb: 1 }}
              color={"TextPrimary"}
              variant="h6"
              gutterBottom
            >
              {FOOTER_SITEMAP_HEADING}
            </Typography>
            {NavLinks()}
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction={"column"} spacing={2} alignItems={"left"}>
              <Avatar
                sx={{ width: 60, height: 60 }}
                src={myImage}
                alt="Footer Logo Image"
                title="Chinthu Kiran"
              />
              <Typography color={"textPrimary"} variant="body2">
                Chinthu Kiran
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <PhoneIcon />
                <Typography color={"textPrimary"} variant="body2">
                  {FOOTER_PHONE}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <EmailIcon />
                <Typography color={"textPrimary"} variant="body2">
                  {FOOTER_EMAIL}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <CopyRight />
      </Box>
    </>
  );
}
