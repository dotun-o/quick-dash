import { useContext } from "react";
import appConfigContext from "../contexts/AppConfigContext";
import { AppConfig } from "../types/AppConfig";

const useAppConfig = () => {
  const context = useContext<AppConfig>(appConfigContext);

  return context;
};

export default useAppConfig;
