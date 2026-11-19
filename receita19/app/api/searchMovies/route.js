export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey");

    const httpRes = await fetch(
        `https://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`
    );

    const jsonRes = await httpRes.json();

    return Response.json({ ...jsonRes });
}


/* 
| Método | Função | Exemplo |
|---|---|---|
| **GET** | Buscar dados | Consultar filmes. |
| **POST** | Enviar dados para criar algo | Cadastrar um filme. |
| **PUT** | Substituir um recurso existente | Atualizar todos os dados de um filme. |
| **PATCH** | Atualizar parcialmente | Alterar apenas o título de um filme. |
| **DELETE** | Excluir um recurso | Excluir um filme. |

*/