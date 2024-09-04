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

export const followUser = async (username) => {
  try {
    const res = await api.put("/FollowUser", username, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const addJokeToFavorite = async (jokeId) => {
  try {
    const res = await api.put("/addToFavorite", jokeId, {
      withCredentials: true,
    });
    if (res.status === 200) {
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

export const likeJoke = async (id) => {
  try {
    const res = await api.put(`/likeJokeById`, id, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getUserFavoriteJokes = async () => {
  try {
    const res = await api.get("/getUserFavoriteJokes", {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getUserPostedJokes = async (id) => {
  try {
    const res = await api.get(`/getPostedJokes/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const logoutRes = await api.get("/logout", { withCredentials: true });
    if (logoutRes.status === 200) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

//--------------------------------------shopRequests

export const getAllItems = async (category) => {
  try {
    const res = await api.get(`/getItems/${category}`);
    return res.data;
  } catch (error) {
    return [];
  }
};
