import axios from "axios";

const API_URL = "http://localhost:5290/";

const login = (username, senha) => {
    return axios
        .post(API_URL + "api/home/login", {
            username,
            senha,
        })
        .then((response) => {
            console.log("response: " + JSON.stringify(response.data.token))
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data)); 
                //Local Storage é uma área de memória com armazenamento temporário na máquina do usuário, administrada pelo navegador, sendo um recurso do navegador
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
// tornar visível para a aplicação, de um acerta forma exportando as constantes
const AuthService = {
    API_URL,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;