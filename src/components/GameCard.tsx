import type { Game } from "../common/common.types";

interface Props {
    game : Game
}

const GameCard = ({game} : Props) => {
    return <>
    <p>{game.name}</p>
    </>
}

export default GameCard;