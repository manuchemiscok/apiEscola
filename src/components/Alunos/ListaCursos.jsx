import { useEffect, useState } from "react"
import styles from "./Curso.module.css"
import { IconeEdicao, IconeLixo } from "../Icones"
import AuthService from "../../services/AuthService"
import axios from "axios"

export default function ListaCursos(props) {
    const urlAPI = AuthService.API_URL + "api/Curso/"
    const [lista, setLista] = useState([])
    const user = AuthService.getCurrentUser();
    //console.log("USER: " + user)

    if (user) {
        useEffect(() => {
            /*fetch('http://localhost:3000/api/curso')
            .then(resp => resp.json())
            .then(cursos => setLista(cursos))
            .catch(error => console.log("ERRO FETCH"));*/
            axios(urlAPI).then(resp => {
                setLista(resp.data)
            })
        }, [])
        const renderTable = () => {
            return (
                <table className={styles.tabCurso}>
                    <thead>
                        <tr className={styles.cabecTabela}>
                            <th className={styles.tabTituloCodigo}>Codigo do Curso</th>
                            <th className={styles.tabTituloNome}>Nome</th>
                            <th>Curso</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((curso, i) => {
                            return <tr key={curso.id}>
                                <td> {curso.nome} </td>
                                <td> {curso.codCurso} </td>
                                <td>
                                    <button
                                        className={styles.linhaButton}

                                        style={{ color: 'blue' }}

                                        onClick={() => props.carregar(curso)}
                                    >
                                        {IconeEdicao}
                                    </button>
                                    <button
                                        className={styles.linhaButton}

                                        style={{ color: 'red' }}

                                        onClick={() => props.remover(curso)}
                                    >
                                        {IconeLixo}
                                    </button>
                                </td>
                            </ tr>
                        })}
                    </tbody>
                </table>
            )
        }
        return (
            <div>
                {renderTable()}
            </div >
        )
    }
    else {
        return (
            <div>
                Não autorizado
            </div>
        )
    }
}