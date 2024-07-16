import AuthService from "../../services/AuthService";
import router from "next/router";
import { useState } from "react";

export default function Login(props) {

    //quando usado, ele retorna dois valores, uma variável e uma função de mudança
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(evento) {
        evento.preventDefault();

        if (!username || !password) {
            setMessage("Preencha o username e a senha para continuar!");
        } else {
            AuthService.login(username, password).then(
                () => {
                    console.log("localStorage: " + localStorage.getItem("user"));
                    
                    router.push("/escola")

                },
                (error) => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage);
                }
            );
        }
    };
    return (
        <div className="text-center p-4 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto h-80 items-center mt-16">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">

                    <label htmlFor="username" className="block text-gray-700">Username:</label>

                    <input
                        type="text"
                        value={username} //forçando a inserção dos dados seja feita pelo react e não pelo navegador || Está entre {} para entender que é uma linguagem javascript, pois todo o retorno está em jsx
                        placeholder="Digite o e-mail"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        //evento onChange precisa ter esse tipo de sintaxe 
                        onChange={({ target }) => {//declarado uma função anônima onde o target está sofrendo a ação de mudança
                            setUsername(target.value);

                            setMessage("");//limpa a mensagem
                        }}
                    />
                </div>
                <div className="mb-4">

                    <label htmlFor="senha" className="block text-gray-700">Senha:</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Digite a senha"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"

                        onChange={({ target }) => {
                            setPassword(target.value);

                            setMessage("");
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
                    Login
                </button>
                <h4 className="mt-2 text-red-500">{message}</h4>
            </form>
        </div>
    )
}