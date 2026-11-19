import MovieForm from "../movieSearch/page";

export default async function Home({ searchParams }) {
    const { titleSearchKey = 'city', year = '', type = 'movie' } = await searchParams;

    const res = await fetch(
        `http://www.omdbapi.com/?apikey=70f59c2a&s=${titleSearchKey}&type=${type}&y=${year}`
    );
    const data = await res.json();

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

                <MovieForm />

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