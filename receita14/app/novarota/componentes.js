export function MariaPrea({ mensagem }) {
    return(
        <h2>{mensagem}</h2>
    )
}

export function TabelaBebidas() {
    return(
        <table border="1">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Skol</td>
                <td>R$6,00</td>
            </tr>
            <tr>
                <td>Brahma</td>
                <td>R$5,50</td>
            </tr>
        </tbody>
        </table>
    )
}

export function Subtitulo(){
    return(
        <h2>Novas Bebidas</h2>
    )
}