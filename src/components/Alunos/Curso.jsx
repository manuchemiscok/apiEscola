import { useState } from "react";
import CrudCurso from "./CrudCurso";
import ListaCurso from "./ListaCursos";
import AuthService from "../../services/AuthService";
import axios from "axios";

export default function Curso() {

    const urlAPI = AuthService.API_URL + "api/Curso/"
    const CursoIni = {
        'id': 0,
        'nome': '',
        'codCurso': 0
    }
    const [curso, setCurso] = useState(CursoIni);
    function carregar(cursoForm) {
        setCurso(cursoForm);
    }
    const remover = (cursoForm) => {
        const url = urlAPI + cursoForm.id;
        console.log(url)
        if (window.confirm("Confirma remoção do curso: " + cursoForm.codCurso)) {
            console.log("entrou no confirm");
            axios['delete'](url, cursoForm)
                .then(resp => {
                    console.log(resp.data);
                })
        }
    }
    return (
        <>
            <CrudCurso cursoForm={curso} cursoSet={setCurso} />
            <ListaCurso carregar={setCurso} remover={remover} />
        </>
    )
}