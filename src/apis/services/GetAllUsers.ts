import { API } from "../../utils";
import { ResponseGetAllUser } from '../../types'

export const GetAllUsers = async () => {
  try {
    const response = await API.get<ResponseGetAllUser>("/users");
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};