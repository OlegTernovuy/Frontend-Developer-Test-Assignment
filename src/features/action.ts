import axios from "axios";
import { url } from "../App";

export async function loginUser() {
  try {
    const response = await axios.get(`${url}/token`);
    return response.data.token;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}

export function getInitialState() {
  const expiresIn = localStorage.getItem("dc-expires") ?? null;

  if (expiresIn && new Date() > new Date(expiresIn)) {
    return {
      isAuthenticated: false,
      access: "",
    };
  }

  return {
    isAuthenticated: Boolean(localStorage.getItem("dc-access") ?? ""),
    access: localStorage.getItem("dc-access") ?? "",
  };
}

export async function login() {
  const loginToken = await loginUser();
  localStorage.setItem("dc-access", loginToken);
  const tokenExpires = new Date(new Date().getTime() + 40 * 60 * 1000);
  localStorage.setItem("dc-expires", tokenExpires.toString());
}
