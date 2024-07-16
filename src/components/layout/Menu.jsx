import Link from "next/link";
import styles from "../../styles/Escola.module.css";
import { useLocalStorage } from "../../data/context/LocalStorageContext";

export default function Menu(props) {

    const localStorageData = useLocalStorage()

    console.log("menu localStorageData => " + localStorageData)

    return (
        <nav className={styles.menu}>
            <Link href="/escola?id=alunos">
                Alunos
            </Link>
            <Link href="/escola?id=cursos">
                Cursos
            </Link>
            <Link href="/escola?id=carometro">
                Carômetro
            </Link>

            {localStorageData ? //se retornar true aparece logout, caso não login | Renderização opcional
                <Link href="/escola?id=login">
                    Login
                </Link>
                :
                <Link href="/escola?id=logout">
                    Logout
                </Link>


            }
        </nav>
    )
}