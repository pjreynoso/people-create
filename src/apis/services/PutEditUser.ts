import { API } from "../../utils";
import { PayloadUserEdit } from "../../types";

export const PutEditUser = async (user: PayloadUserEdit) => {
  try {
    const { id, ...payload} = user
    const response = await API.put(`/users/${id}`, payload);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};