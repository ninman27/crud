import { connectToDB } from "./db";
import { User } from "./models";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users", error);
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("failed to fetch user", error);
  }
};
