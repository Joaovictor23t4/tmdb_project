import { api } from "@/plugins/axios";

class ProgramsTvService {
    async getGenresTp() {
        try {
            const { data } = await api.get('genre/tv/list?language=en-US');
            return data;
        } catch(error) {
            console.error('Error in GET genres tp: ', error);
            return { error };
        };
    };
    async getProgramsTv() {
        try {
            const { data } = await api.get('discover/tv');
            return data;
        } catch(error) {
            console.error('Error in GET programs tv: ', error);
            return { error };
        };
    };

    async getProgramTv(id) {
        try {
            const { data } = await api.get(`tv/${id}`);
            return data;
        } catch(error) {
            console.error('Error in GET program tv: ', error);
            return { error };
        };
    };
};

export default new ProgramsTvService();