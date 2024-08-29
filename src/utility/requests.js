import api from "./axiosConfig/axiosConfig";

export const postJoke = async (jokePost) => {
  // eslint-disable-next-line no-useless-catch
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
