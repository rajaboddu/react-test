import { useEffect, useState } from "react";
import axios from '../services/api-client'
import type { FetchGamesResponse, Game, Genre } from "../common/common.types";
import type { AxiosRequestConfig } from "axios";

const useGames = (genre : Genre | null, platform : number, requestConfig ?: AxiosRequestConfig) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get<FetchGamesResponse>('/games', requestConfig)
        .then(res => {
            setGames(res.data.results)
        })
        .catch(error => setError(error.message))
    }, [genre, platform]);

    return {games, error};

}

export default useGames;