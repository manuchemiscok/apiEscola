import { useState } from "react";
import CrudAlunos from "./CrudAluno";
import ListaAlunos from "./ListaAlunos";
import AuthService from "../../services/AuthService";
import axios from "axios";

export default function Alunos() {

    const urlAPI = AuthService.API_URL + "api/Aluno/"
    const alunoIni = {
        'id': 0,
        'ra': '',
        'nome': '',
        'codCurso': 0
    }
    const [aluno, setAluno] = useState(alunoIni);
    function carregar(alunoForm) {
        setAluno(alunoForm);
    }
    const remover = (alunoForm) => {
        const url = urlAPI + alunoForm.id;
        console.log(url)
        if (window.confirm("Confirma remoção do aluno: " + alunoForm.ra)) {
            console.log("entrou no confirm");
            axios['delete'](url, alunoForm)
                .then(resp => {
                    console.log(resp.data);
                })
        }
    }
    return (
        <>
            <CrudAlunos alunoForm={aluno} alunoSet={setAluno} />
            <ListaAlunos carregar={setAluno} remover={remover} />
        </>
    )
}