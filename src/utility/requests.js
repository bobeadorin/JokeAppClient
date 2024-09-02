/* eslint-disable no-useless-catch */
import api from "./axiosConfig/axiosConfig";

export const postJoke = async (jokePost) => {
  // eslint-disable-next-line no-useless-catch
  if (jokePost.category === "" || jokePost.joke === "") return;
  try {
    const res = await api.post(
      "/postJoke",
      { Text: jokePost.joke, Category: jokePost.category },
      { withCredentials: true }
    );
    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const res = await api.get("/getUser", { withCredentials: true });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const res = await api.get(`/getUserByUsername/${username}`, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
