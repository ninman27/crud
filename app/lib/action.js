"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./db";
import { User } from "./models";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const { username, email, password, isAdmin } = Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });
    await newUser.save();
  } catch (error) {
    throw new Error("Failed to create new user", error);
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete a user", error);
  }

  revalidatePath("/");
};

export const updateUser = async (formData) => {
  const { id, username, email } = Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = { username, email };
    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === undefined && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed to update a user", error);
  }

  revalidatePath("/");
  redirect("/");
};
