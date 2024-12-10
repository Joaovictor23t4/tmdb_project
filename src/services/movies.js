import { api } from "@/plugins/axios";

class MoviesService {
    async getGenresMovies() {
        try {
            const { data } = await api.get('genre/movie/list?language=en-US');
            return data;
        } catch(error) {
            console.error('Error in GET movies: ', error);
            return { error };
        };
    };

    async getMovies() {
        try {
            const { data } = await api.get('discover/movie');
            return data;
        } catch(error) {
            console.error('Error in GET movies: ', error);
            return { error };
        };
    };

    async getMovie(id) {
        try {
            const { data } = await api.get(`movie/${id}`);
            return data;
        } catch(error) {
            console.error('Error in GET movie: ', error);
            return { error };
        };
    };
};

export default new MoviesService();