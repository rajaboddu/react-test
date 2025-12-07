import type { asideProps } from "@/common/common.types";
import useGenre from "../hooks/useGenre";

const GenreList = ({genre, handleGenreChange} : asideProps) => {
    let {genres, error} = useGenre();

    return <>
    {error && <div>{error}</div>}
    <div>
        {genres.map(genre => 
        <button 
            onClick={() => handleGenreChange({id : genre.id, name : genre.name})} 
            key={genre.id}>
                {genre.name}
        </button>)}
    </div>
    </>
}

export default GenreList;