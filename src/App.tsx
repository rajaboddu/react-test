import { useEffect } from "react";

function App() {
  useEffect(() => {
    "https://api.rawg.io/api/games?key=1411a17ff5564ac1aea73aa383ae8c4d";
  }, []);

  return <button>test</button>;
}

export default App;
