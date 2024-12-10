import { defineStore } from "pinia";
import { ref } from "vue";
import { ProgramsTvService } from "@/services";

export const useProgramTvStore = defineStore('tv', () => {
    const genresTp = ref([]);
    const programsTv = ref([]);
    const programTv = ref({});

    async function getGenresTp() {
        const data = await ProgramsTvService.getGenresTp();

        if (!("error" in data)) {
            genresTp.value = data;
        };
    };

    async function getProgramsTv() {
        const data = await ProgramsTvService.getProgramsTv();

        if(!("error" in data)) {
            programsTv.value = data;
        };
    };

    async function getProgramTv(id) {
        const data = await ProgramsTvService.getProgramTv(id);

        if (!("error" in data)) {
            programTv.value = data;
        };
    };

    async function initializeApp() {
        await getGenresTp();
        await getProgramsTv();
    };

    function searchGenreName(id) {
        for (let genre of genresTp.value.genres) {
            if (genre.id == id) {
                return genre.name
            };
        };
    };

    return { genresTp, programsTv, programTv, getGenresTp, getProgramsTv, getProgramTv, initializeApp, searchGenreName };
});