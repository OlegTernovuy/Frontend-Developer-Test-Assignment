import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

interface SingleUser {
  user: TUser;
}

import userLogo from "../../assets/photoCover.svg";
import { TUser } from "./Users";

const User = ({ user }: SingleUser) => {
  function isDefaultImage(url: string) {
    try {
      new URL(url);
    } catch (_) {
      return true;
    }
    return url.includes("placeholders/placeholder.png");
  }

  const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgba(0, 0, 0, 0.87)",
      color: "#FFFFFF",
      height: "32px",
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      position: "absolute",
    },
  }));

  return (
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <CardMedia sx={{ paddingBottom: "20px" }}>
          <img
            src={isDefaultImage(user.photo) ? userLogo : user.photo}
            alt="User photo"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </CardMedia>
        <CardContent
          sx={{
            padding: 0,
            "&:last-child": {
              pb: 0,
            },
          }}
        >
          <Typography sx={{ pb: "20px" }}>{user.name}</Typography>
          <Typography>
            {user.position} <br />{" "}
            <DarkTooltip title={user.email} enterDelay={500} leaveDelay={200}>
              <Box>{user.email}</Box>
            </DarkTooltip>
            <br /> {user.phone}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default User;
