import { useState } from "react"
import styles from '../../styles/CrudCurso.module.css'
import axios from "axios"
import AuthService from "../../services/AuthService"
export default function CrudCurso(props) {

    const urlAPI = AuthService.API_URL + "api/Curso/"

    const [curso, setCurso] = useState(props.cursoForm);
    const [lista, setLista] = useState([]);

    const initialState = { id: 0, nome: '', codcurso: 0}

    const limpar = () => { setCurso(initialState) };

    const salvar = () => {
        const dadosCurso = props.cursoForm;
        dadosCurso.c = Number(dadosCurso.codcurso);
        const metodo = 'post'
        
        axios[metodo](urlAPI, dadosCurso)
            .then(resp => {
                const dadosLista = getListaAtualizada(resp.data);
                setLista(dadosLista);
                limpar();
            })
    }

    const atualizar = () => {
        const dadosCurso = props.cursoForm;
        dadosCurso.c = Number(dadosCurso.codcurso);
        const metodo = 'put';
    
        axios[metodo](urlAPI + dadosCurso.id, dadosCurso) // Append curso.id to the URL for the specific resource
            .then(resp => {
                const dadosLista = getListaAtualizada(resp.data);
                setLista(dadosLista);
                limpar();
            })
            .catch(error => {
                console.error("Error updating data:", error);
                // Handle error if needed
            });
      }
    
    
        const getListaAtualizada = () => {
            const listaAtual = lista.filter(a => a.id !== curso.id);
            listaAtual.unshift(curso);
            return listaAtual;
        }
    
        const atualizaCampo = (evento) => {
            //clonar usuário a partir do state, para não alterar o state diretamente
            const cursoAtual = { ...props.cursoForm }
            //usar o atributo NAME do input para identificar o campo a ser atualizado
            cursoAtual[evento.target.name] = evento.target.value;
            //atualizar o state
            props.cursoSet(cursoAtual);
        }

    return (
        <div className={styles.incluiContainer}>
            <label> Nome: </label>
            <input
                type="text"
                id="nome"
                placeholder="Nome do Curso"
                className={styles.formInput}
                name="nome"
                value={props.cursoForm.nome}
                onChange={e => atualizaCampo(e)}
            />
            <label> Código do Curso: </label>
            <input
                type="text"
                id="codCurso"
                placeholder="0"
                className={styles.formInput}
                name="codCurso"
                value={props.cursoForm.codcurso}
                onChange={e => atualizaCampo(e)}
            />
            <button className={styles.btnSalvar}
                onClick={e => (props.cursoForm.id !== 0 ? atualizar(e) : salvar(e))} >
                {props.cursoForm.id !== 0 ? 'Atualizar' : 'Salvar'}
            </button>
            <button className={styles.btnCancelar}
                onClick={e => limpar(e)} >
                Cancelar
            </button>
        </div>
    )
}