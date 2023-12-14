import { Box, Button, FilledInput, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomFileInput = ({ control, errors }: any) => {
  return (
    <Box sx={{ display: "flex", mb: "50px", mt: "47px" }}>
      <Button
        variant="outlined"
        color="black"
        component="label"
        sx={{
          height: "56px",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          borderColor: "#000000",
          right: 0,
          top: 0,
        }}
      >
        Upload
        <Controller
          control={control}
          name="photo"
          render={({ field }) => (
            <FilledInput
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.files?.[0])
              }
              value={field.value?.[0]}
              error={!!errors?.photo}
              style={{ display: "none" }}
            />
          )}
        />
      </Button>
      <TextField
        label="Upload your photo"
        color="secondary"
        error={!!errors?.photo}
        helperText={errors?.photo?.message}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderLeft: "none" },
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          },
        }}
      />
    </Box>
  );
};

export default CustomFileInput;
