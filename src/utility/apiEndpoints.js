export const apiEndpoints = {
  baseUrl: "https://localhost:5003",
  getAllUsers: "/getAllUsers",
  getUserById: "/getUserById/{id}",
  register: "/register",
  login: "/login",
  refresh: "/refresh",
  likeJokeById: "/likeJokeById/{id}",
  dislikeJokeById: "/dislikeJokeById/{id}",
  getAllJokesByPageNumber: "/getAllJokesByPagination{pageNumber},{pageSize}",
  postJoke: "/postJoke",
  deleteJoke: "/deleteJokeById/{Id}",
};
