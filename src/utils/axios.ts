import axios from "axios";
import Cookies from "js-cookie";
import i18n from "i18next"; // Import your i18n instance

// Factory function to create Axios instances for different versions
const createAxiosInstance = (version: string) => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_URL}/${i18n.language || "en"}/api/${version}`, // Include version dynamically
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // Add CSRF token to headers if available
      const csrftoken = Cookies.get("csrftoken");
      if (csrftoken) {
        config.headers["X-CSRFToken"] = csrftoken;
      }

      // Update baseURL dynamically based on language and version
      config.baseURL = `${process.env.REACT_APP_URL}/${i18n.language || "en"}/api/${version}`;

      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

// Create Axios instances for v1 and v2
export const axiosV1 = createAxiosInstance("v1");
export const axiosV2 = createAxiosInstance("v2");
export const axiosV3 = createAxiosInstance("v3");

// Default export (optional, usually one of the versions)

