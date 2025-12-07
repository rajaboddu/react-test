import { useEffect, useState } from "react";
import axios from "../services/api-client";
import type { FetchGenresResponse, Genre } from "../common/common.types";


const useGenre = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get<FetchGenresResponse>('/genres').then(res => {
            setGenres(res.data.results);
        }).catch(err => setError(err));
    }, []);

    return {genres, error};
}

export default useGenre;