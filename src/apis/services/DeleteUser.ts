import { API } from "../../utils";

export const DeleteUser = async (userId: number): Promise<void> => {
  try {
    const response = await API.delete(`/users/${userId}`);
    console.log("Usuario eliminado:", response.data);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};