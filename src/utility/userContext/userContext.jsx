import { createContext } from "react";

const userDataContext = createContext({ loading: false, data: {} });

export default userDataContext;
