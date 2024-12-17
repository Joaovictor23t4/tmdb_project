function createGenreQueryParams(genres) {
    let query = '';

    for (let genre of genres) {
        if (query == '') {
            query += '?with_genres=' + genre;
        } else {
            query += '%2C' + genre;
        };
    };
    return query;
};

export {
    createGenreQueryParams
};