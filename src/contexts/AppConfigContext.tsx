import { createContext } from "react";
import { AppConfig } from "../types/AppConfig";
import appConfig from "../data/app-config";

// Being fixed values, no context provider is needed

const appConfigContext = createContext<AppConfig>(appConfig);

export default appConfigContext;
