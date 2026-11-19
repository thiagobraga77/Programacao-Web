"use client"

import { useState, memo } from "react"
import Link from "next/link"

export default function Home() {
    const [resultMovies, setResultMovies] = useState([])

    async function handleSearch(titleSearchKey) {
        const httpRes = await fetch(
            `/api/searchMovies?titleSearchKey=${encodeURIComponent(titleSearchKey)}`
        )

        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/img.avif')" }}
        >
            <div className="text-center">
                <h1 className="mb-6 pt-5 text-3xl font-bold text-white">
                    Tabela de Filmes
                </h1>

                <MovieForm onSearch={handleSearch} />

                <MovieTable movies={resultMovies} />
            </div>
        </div>
    )
}

const MovieForm = memo(function MovieForm({ onSearch }) {
    const [titulo, setTitulo] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleAction(formData) {
        const titleSearchKey = formData.get("titleSearchKey")

        setLoading(true)

        try {
            await onSearch(titleSearchKey)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            action={handleAction}
            className="mx-auto mb-8 flex max-w-xl items-center justify-center gap-3 px-4"
        >
            <label htmlFor="idTitleSearchKey" className="font-bold text-white">
                Título:
            </label>

            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Digite o nome do filme"
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-black"
            />

            <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-800 disabled:bg-gray-400"
            >
                {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </form>
    )
})

export function MovieTable({ movies }) {
    return (
        <div className="grid grid-cols-1 justify-items-center gap-8 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {movies.map((m) => (
                <Link
                    key={m.imdbID}
                    href={`/movies/${m.imdbID}`}
                    className="w-full max-w-[260px] rounded-lg bg-gray-100 p-3 shadow-lg transition-transform hover:scale-105"
                >
                    <img
                        src={m.Poster !== "N/A" ? m.Poster : "/img.avif"}
                        alt={m.Title}
                        className="mx-auto h-[250px] w-[220px] object-cover"
                    />

                    <div className="mt-3 text-center">
                        <h2 className="font-bold text-black">{m.Title}</h2>
                        <p className="mt-1 text-gray-600">{m.Year}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}