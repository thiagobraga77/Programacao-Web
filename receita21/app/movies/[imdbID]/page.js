import Link from "next/link"

export async function generateStaticParams() {
    try {
        const res = await fetch("http://www.omdbapi.com/?apikey=f1cbc41e&s=city")
        const data = await res.json()

        if (!data.Search) return []

        return data.Search.map((m) => ({
            imdbID: m.imdbID
        }))
    } catch (err) {
        return [
            { imdbID: "tt0095801" },
            { imdbID: "tt0033467" }
        ]
    }
}

export default async function MovieDetail({ params }) {
    const { imdbID } = await params
    let movie = {
        Title: "Filme",
        Year: "",
        Poster: "N/A",
        Genre: "",
        Director: "",
        Actors: "",
        Plot: "",
        imdbRating: ""
    }

    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&i=${imdbID}`)
        movie = await res.json()
    } catch (err) {
        movie.Title = `ID: ${imdbID}`
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed p-6"
            style={{ backgroundImage: "url('/img.avif')" }}
        >
            <div className="mx-auto max-w-2xl rounded-lg bg-gray-100 p-6 shadow-lg">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                    <img
                        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/img.avif"}
                        alt={movie.Title}
                        className="h-[320px] w-[220px] rounded object-cover shadow"
                    />

                    <div className="text-left text-black">
                        <h1 className="text-2xl font-bold">{movie.Title}</h1>
                        <p className="mt-1 text-gray-600"><strong>Ano:</strong> {movie.Year}</p>
                        <p className="mt-1 text-gray-600"><strong>Gênero:</strong> {movie.Genre}</p>
                        <p className="mt-1 text-gray-600"><strong>Diretor:</strong> {movie.Director}</p>
                        <p className="mt-1 text-gray-600"><strong>Atores:</strong> {movie.Actors}</p>
                        <p className="mt-1 text-gray-600"><strong>Nota IMDb:</strong> {movie.imdbRating}</p>
                        <p className="mt-3 text-gray-800"><strong>Sinopse:</strong> {movie.Plot}</p>

                        <div className="mt-6">
                            <Link
                                href="/clientMovies1"
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
                            >
                                Voltar para Pesquisa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
