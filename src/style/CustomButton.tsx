import { Button, Typography } from "@mui/material";

type ButtonType = {
  desc: string;
  disabled?: boolean;
  width?: number;
  action?: () => void;
  Btype?: "button" | "submit" | "reset" | undefined;
};

const CustomButton = ({
  desc,
  disabled = false,
  width = 100,
  action,
  Btype = "button",
}: ButtonType) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      disableElevation
      onClick={action}
      type={Btype}
      sx={{
        width: `${width}px`,
        height: "34px",
        borderRadius: "80px",
        textTransform: "none",
        ":hover": {
          backgroundColor: "#FFE302",
        },
      }}
    >
      <Typography variant="body1">{desc}</Typography>
    </Button>
  );
};

export default CustomButton;
