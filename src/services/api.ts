import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://Brunops52.pythonanywhere.com/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("Token expirado. Tentando renovar com refresh token...");
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("Nenhum refresh token disponível");
        }

        console.log("Enviando refresh token para renovação:", refreshToken);
        const response = await axios.post(
          `${api.defaults.baseURL}token/refresh/`,
          { refresh: refreshToken }
        );

        if (!response.data.access) {
          throw new Error(
            "Resposta de refresh inválida - token de acesso não recebido"
          );
        }

        console.log("Novo token de acesso recebido");
        localStorage.setItem("accessToken", response.data.access);

        // Atualiza o header de autorização com o novo token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        }

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Falha ao renovar token:", refreshError);

        // Limpa todos os dados de autenticação
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        // Redireciona para login
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
