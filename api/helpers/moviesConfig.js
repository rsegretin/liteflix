const getMoviesConfig = async () => {
    const res = await fetch('https://api.themoviedb.org/3/configuration?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        .then(res => res.json())

    return res.images;
}

export default getMoviesConfig;