import { useState } from "react";
import Nav from "./components/Nav";
import Aside from "./components/aside";
import Body from "./components/body";
import type { Genre } from "./common/common.types";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState(-1);

  const handleGenreChange = (genre : Genre) => {
    setSelectedGenre(genre);
  }

  const handlePlatformChange = (platform : number) => {
    setSelectedPlatform(platform);
  }

  return <>
    <div className="container">
      <div className="row">
        <div className="col bg-primary">
          <Nav/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 bg-secondary d-none d-md-block">
          <Aside genre={selectedGenre} handleGenreChange={handleGenreChange}/>
        </div>
        <div className="col bg-success">
          <Body genre={selectedGenre} platform={selectedPlatform} 
            handlePlatformChange={handlePlatformChange}/>
        </div>
      </div>
    </div>
  </>;
}

export default App;
