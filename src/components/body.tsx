import type { gamesProp } from "../common/common.types";
import GamesGrid from "./GamesGrid"
import Platform from "./Platform";


const Body = ({genre, platform, handlePlatformChange} : gamesProp) => {

    return <>
    <Platform platform={platform} 
        handlePlatformChange={handlePlatformChange}/>
    <GamesGrid genre={genre} platform={platform} handlePlatformChange={handlePlatformChange}/>
    </>
}

export default Body;