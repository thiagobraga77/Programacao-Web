'use client';
import { useState } from "react";

export default function MovieForm({ onSearch }) {
    const [idTitleSearch, setIdTitleSearch] = useState('');
    const [idYear, setIdYear] = useState('');
    const [type, setType] = useState('movie');

    function pesquisar(e) {
        e.preventDefault();

        onSearch(idTitleSearch, idYear, type);
    }

    return (
        <form onSubmit={pesquisar}>
            <label htmlFor="idTitleSearch">Título</label>
            <input
                id="idTitleSearch"
                value={idTitleSearch}
                name="titleSearchKey"
                onChange={(e) => setIdTitleSearch(e.target.value)}
            />

            <br />

            <label htmlFor="idYear">Ano</label>
            <input
                id="idYear"
                value={idYear}
                name="year"
                type="number"
                onChange={(e) => setIdYear(e.target.value)}
            />

            <br />

            <label htmlFor="idType">Tipo</label>
            <select
                id="idType"
                value={type}
                name="type"
                onChange={(e) => setType(e.target.value)}
            >
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>
            </select>

            <button type="submit">Pesquisar</button>
        </form>
    );
}