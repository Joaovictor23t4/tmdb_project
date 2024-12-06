function formatDurationMovie(time) {
    return `${Math.floor(time / 60)}h ${time % 60}min`;
}

export {
    formatDurationMovie
}