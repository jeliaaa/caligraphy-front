import axios from "axios";
import Cookies from "js-cookie";
import i18n from "i18next"; // Import your i18n instance

const initial = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/${i18n.language || 'en'}/api/v1`, // Dynamically include the language code
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

initial.interceptors.request.use(
  (config: any) => {
    // Add CSRF token to headers if available
    const csrftoken = Cookies.get('csrftoken');
    if (csrftoken) {
      config.headers['X-CSRFToken'] = csrftoken;
    }

    // Update the base URL dynamically based on language
    config.baseURL = `${process.env.REACT_APP_URL}/${i18n.language || 'en'}/api/v1`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default initial;
