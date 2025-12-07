export interface Genre{
    name : string,
    id : number
}


export interface FetchGamesResponse {
    count :Number,
    results : Game[]
}

export interface Game {
    id : number,
    name : string
}

export interface asideProps {
    genre : Genre | null,
    handleGenreChange : (genre : Genre) => void
}

export interface platformProps {
    platform : number,
    handlePlatformChange : (platform : number) => void
}

export interface gamesProp {
    genre : Genre | null,
    handlePlatformChange : (platform : number) => void,
    platform : number
}

export interface Genre{
    id : number,
    name : string
}

export interface FetchGenresResponse {
    count : number,
    results : Genre[]
}

export interface Platform {
    id: number,
    name : string
}

export interface PlatformResponse{
    count : number,
    results : Platform[]
}
