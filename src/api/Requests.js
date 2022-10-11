const api_token = '64f44950793a2d828f700801943a1c7f'

const requests = {
    fetchTrending:          `/trending/all/week?api_key=${api_token}&language=en-US`,
    fetchNetflixOriginals:  `/discover/tv?api_key=${api_token}&with_networks=213`,
    fetchTopRated:          `/movie/top_rated?api_key=${api_token}&language=en-US`,
    fetchActionMovies:      `/discover/movie?api_key=${api_token}&with_genres=28`,
    fetchComedyMovies:      `/discover/movie?api_key=${api_token}&with_genres=35`,
    fetchHorrorMovies:      `/discover/movie?api_key=${api_token}&with_genres=27`,
    fetchRomanceMovies:     `/discover/movie?api_key=${api_token}&with_genres=10749`,
    fetchDocumentaries:     `/discover/movie?api_key=${api_token}&with_genres=99`
}

export default requests