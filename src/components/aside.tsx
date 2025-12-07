import type { asideProps } from "../common/common.types";
import GenreList from "./GenreList";

const Aside = ({genre, handleGenreChange} : asideProps) => {
    return <>
    <GenreList genre={genre} handleGenreChange={handleGenreChange}/>
    </>
}

export default Aside;