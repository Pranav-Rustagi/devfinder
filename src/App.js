import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import axios from "axios";


const isEmptyObj = obj => {
  for(let i in obj)
    return false;
  return true;
}

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [makeSearch, setMakeSearch] = useState(false);
  const [data, setData] = useState({});

  const fetchData = useCallback(async (query) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setData(response.data);
    }
    catch(e) {
      setData({});
      console.log(e);
    }
  }, []);


  useEffect(() => {
    if(makeSearch) {
      fetchData(searchQuery);
      setMakeSearch(false);
    }
  }, [searchQuery, makeSearch, fetchData]);

  return (
    <div className="container" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
        setMakeSearch={setMakeSearch}
      />
      { 
        !isEmptyObj(data) ?
        <Profile data={data} /> : 
        null 
      }
    </div>
  );
}

export default App;
