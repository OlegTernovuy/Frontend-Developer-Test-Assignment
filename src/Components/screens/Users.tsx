import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import User from "./User";
import CustomButton from "../../style/CustomButton";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../App";
import { StateUser, UserContext } from "../../Context/UsersContext";

export type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: string;
};

export type FetchedUsers = {
  users: TUser[];
  total_users: number;
};

const Users = () => {
  const { users, setUsers } = useContext(UserContext) as StateUser;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    getUsers(1).then((data) => {
      setUsers(data);
    });
  }, []);

  const getUsers = async (currentPage: number) => {
    try {
      setLoading(true);
      const response = await axios.get<FetchedUsers>(
        `${url}/users?page=${currentPage}&count=6`
      );
      setTotalCount(response.data.total_users);
      setLoading(false);
      return response.data.users;
    } catch (error) {
      console.error("Error fetching users: ", error);
      throw error;
    }
  };

  const handleLoadMore = async () => {
    try {
      const newUsers = await getUsers(currentPage);

      setUsers((prevUsers) => {
        if (!prevUsers) return newUsers;
        else return [...prevUsers, ...newUsers];
      });
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error in handleLoadMore: ", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: {
          xs: "0 16px 140px",
          md: "0 32px 140px",
          lg: "0 60px 140px",
          xl: "0 0 140px 0",
        },
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: "50px", textAlign: "center" }}>
        Working with GET request
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          mb: "50px",
          justifyContent: "center",
        }}
      >
        {users.length > 0 ? (
          users?.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <div>Users not found</div>
        )}
      </Grid>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        users?.length !== totalCount && (
          <CustomButton desc="Show more" width={120} action={handleLoadMore} />
        )
      )}
    </Box>
  );
};

export default Users;
