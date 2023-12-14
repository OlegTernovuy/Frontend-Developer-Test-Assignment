import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import axios from "axios";
import { url } from "../../App";
import { useContext, useEffect, useState } from "react";
import { IState, IsAuthenticatedContext } from "../../Context/TokenContext";
import CustomButton from "../../style/CustomButton";
import { StateUser, UserContext } from "../../Context/UsersContext";
import { FetchedUsers } from "./Users";
import CustomFileInput from "../../style/CustomFileInput";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationsSchema } from "../../features/Schema";
import { ModalContext, StateModal } from "../../Context/ModalContext";

type TPos = {
  id: number;
  name: string;
};

interface IUser {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File | any;
}

const formData = new FormData();

const Form = () => {
  const { setUsers } = useContext(UserContext) as StateUser;

  const { handleOpen } = useContext(ModalContext) as StateModal;

  const { isAuthenticated } = useContext(IsAuthenticatedContext) as IState;

  const [positions, setPositions] = useState<TPos[] | null>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position_id: undefined,
      photo: undefined,
    },
    resolver: yupResolver(ValidationsSchema),
  });

  useEffect(() => {
    getPosition().then((data) => {
      setPositions(data);
    });
  }, []);

  const getPosition = async () => {
    try {
      const response = await axios.get(`${url}/positions`);
      return response.data.positions;
    } catch (error) {
      console.error("Error fetching users: ", error);
      throw error;
    }
  };

  const checkIsUser = (formValues: IUser) => {
    Object.entries(formValues).forEach(([key, value]) => {
      if (typeof value === "undefined") return;
      formData.append(key, value);
    });
  };

  const onSubmit: SubmitHandler<IUser> = async (user) => {
    try {
      checkIsUser(user);
      await axios.post(`${url}/users`, formData, {
        headers: { Token: isAuthenticated?.access },
      });
      reset();
      handleOpen();
      const response = await axios.get<FetchedUsers>(
        `${url}/users?page=${1}&count=6`
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error post user: ", error);
      throw error;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "380px" },
      }}
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextField
            label="Your name"
            color="secondary"
            error={!!errors?.name}
            helperText={errors?.name?.message}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            sx={{ mb: "50px" }}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            label="Email"
            color="secondary"
            error={!!errors?.email}
            helperText={errors?.email?.message}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            sx={{ mb: "50px" }}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <TextField
            label="Phone"
            color="secondary"
            error={!!errors?.phone}
            helperText={
              errors.phone ? errors.phone?.message : "+38 (XXX) XXX - XX - XX"
            }
            onChange={(e) => field.onChange(e)}
            value={field.value}
            sx={{ mb: "29px" }}
          />
        )}
      />
      <FormControl error={!!errors?.position_id}>
        <FormLabel color="secondary">Select your position</FormLabel>
        <RadioGroup>
          {positions?.map((position) => {
            return (
              <Controller
                control={control}
                name="position_id"
                key={position.id}
                render={({ field }) => (
                  <FormControlLabel
                    value={position.id}
                    control={
                      <Radio
                        color="secondary"
                        onChange={(e) => field.onChange(e)}
                      />
                    }
                    label={position.name}
                  />
                )}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <CustomFileInput control={control} errors={errors} />
      <Box sx={{ margin: "0 auto" }}>
        <CustomButton
          desc="Sign up"
          disabled={!isAuthenticated?.isAuthenticated}
          Btype="submit"
        />
      </Box>
    </Box>
  );
};

export default Form;
