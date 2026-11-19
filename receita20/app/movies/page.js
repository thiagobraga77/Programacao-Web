'use client';
import { useState } from "react";
import MovieForm from "../movieSearch/page";

export default function Home() {
    const [data, setData] = useState({ Search: [] });

    async function fazerPesquisa(titleSearchKey, year, type) {
        const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=70f59c2a&s=${titleSearchKey}&type=${type}&y=${year}`
        );
        const result = await res.json();
        setData(result);
    }

    return (
        <div
            style={{
                backgroundImage: "url('/img.avif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                padding: 0
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'white', marginTop: '5px' }}>
                    Tabela de Filmes
                </h1>

                <MovieForm onSearch={fazerPesquisa} />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 260px)',
                        gap: '50px',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                >
                    {data.Search?.map((m) => (
                        <div key={m.imdbID} style={{ background: '#eee', padding: '22px 10px 10px 10px' }}>
                            <img src={m.Poster} alt={m.Title} height="250" width="220" />
                            <div>
                                <span style={{ color: 'black' }}>{m.Title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}