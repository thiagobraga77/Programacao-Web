import Form from "next/form";

export default function MovieForm() {
    return (
        <Form action="/movies">
            <label htmlFor="idTitleSearch">Título</label>
            <input
                id="idTitleSearch"
                name="titleSearchKey"
            />

            <br />

            <label htmlFor="idYear">Ano</label>
            <input
                id="idYear"
                name="year"
                type="number"
            />

            <br />

            <label htmlFor="idType">Tipo</label>
            <select
                id="idType"
                name="type"
                defaultValue="movie"
            >
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>
            </select>

            <button type="submit">Pesquisar</button>
        </Form>
    );
}