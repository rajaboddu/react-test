import type { gamesProp } from "../common/common.types";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";


const GamesGrid = ({genre, platform} : gamesProp) => {
    const {games, error} = useGames(genre, platform,
        {params : {genres : genre?.id, 
            parent_platforms : platform == -1 ? undefined : platform}});

    return <>
    {error && <div>{error}</div>}
    <ul>
        {games.map(game => <GameCard key={game.id} game={game}/>)}
    </ul>
    </>
}

export default GamesGrid;