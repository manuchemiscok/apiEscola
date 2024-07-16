import Corpo from "../components/layout/Corpo";
import Menu from "../components/layout/Menu";
import styles from "../styles/Escola.module.css";
import Rodape from "../components/layout/Rodape";
import Logo from "../components/layout/Logo";
import { useRouter } from "next/router";
import ListaAlunos from "../components/Alunos/ListaAlunos";
import Login from "../components/Login/Login";
import { useState } from "react";
import Logout from "../components/Logout/Logout";
import AuthService from "../services/AuthService";
import { useLocalStorage }  from "../data/context/LocalStorageContext";
import { useAppContext } from "../data/context/AppContext";
import Alunos from "../components/Alunos/Alunos";
import Curso from "../components/Alunos/Curso";


export default function escola() {

    const router = useRouter();
    const id = router.query.id;

    const [currentUser, setCurrentUser] = useState(undefined) 
    const localStorageData = useLocalStorage()


    const renderiza = () => {
        if (!id) {
            return (
                <Corpo titulo="Bem vindo!">
                    <div>
                        Cadastro de alunos, cursos e carômetro                      
                    </div>
                </Corpo>
            )
        }
        if (id === "login") {
            return (
                <Login />//renderiza a página caso haja a escolha
            )
        }
        if (id === "logout") {
            return (
                <Logout />
            )
        }
        if (localStorage.getItem("user")) { 

            if (id === "alunos") {
                return (
                    <Corpo titulo="Cadastro de Alunos">
                        <Alunos />
                    </Corpo>
                )
            }
            if (id === "cursos") {
                return (
                    <Corpo titulo="Cadastro de Cursos">
                       <Curso />
                    </Corpo>
                )
            }
            if (id === "carometro") {
                return (
                    <Corpo titulo="Carômetro">
                        <div>
                            Carômetro
                        </div>
                    </Corpo>
                )
            }
        }
        else {
            return (
                <Corpo titulo="Não autorizado">
                    <div>Verifique suas credenciais para usar esse recurso.
                    </div>
                </Corpo>
            )
        }
    }
    return (
        <div className={styles.escola}>
            <Logo />
            <Menu />
            {renderiza()}
            <Rodape />
        </div>
    )
}