import { createContext } from "react";

const authContext = createContext({ accessToken: null, expiresAt: null });

export default authContext;
