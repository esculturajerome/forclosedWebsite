import { useState, useEffect } from "react";
import axios from "axios";
import InputComponent from "./InputComponent";
import SuggestionsComponent from "./SuggestionsComponent";
import DropdownComponent from "./DropdownComponent";

function SearchWidgets({ userList }) {
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [citiesFiltered, setCitiesFiltered] = useState([]);
  const [regions, setRegions] = useState([]);
  const [regionsFiltered, setRegionsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [cityId, setCityId] = useState("");
  const [region, setRegion] = useState("");
  const [regionId, setRegionId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [nameArray, setNameArray] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setUsers(userList);
  });
  useEffect(() => {
    const loadRegions = async () => {
      const response = await axios.get(
        "https://ph-locations-api.buonzz.com/v1/provinces"
      );
      setRegions(response.data.data);
      setRegionsFiltered(response.data.data);
    };
    loadRegions();
  }, []);
  useEffect(() => {
    const loadCities = async () => {
      const response = await axios.get(
        "https://ph-locations-api.buonzz.com/v1/cities"
      );
      setCities(response.data.data);
      setCitiesFiltered(response.data.data);
    };
    loadCities();
  }, []);

  useEffect(() => {
    setFilters({
      keyword: keyword,
      city: city,
      cityId: cityId,
      region: region,
      regionId: regionId,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minArea: minArea,
      maxArea: maxArea,
      //   nameArray: nameArray,
    });
  }, [keyword, city, region, minPrice, maxPrice, minArea, maxArea]);
  const keywordHandler = (keyword) => {
    console.log(keyword, "keyword");
    let matches = [];
    matches = users.filter((user) => {
      const regex = new RegExp(`${keyword}`, "gi");
      return user.name.match(regex);
    });
    setSuggestions(matches);
    setKeyword(keyword);
  };

  const suggestionHandler = (keyword) => {
    console.log(keyword);
    setKeyword(keyword);

    // console.log(nameArrayList, 'nameArrayList')
    // nameArray.filter ===

    // nameArray.filter((item) => {
    //   if (item !== keyword) {
    //     setNameArray(...nameArray, keyword);
    //   }
    // });

    // nameArray.map((item) => {
    //   console.log(item, "item");
    //     if (item !== keyword) setNameArray([...nameArray, keyword]);
    // });

    setSuggestions([]);
  };

  const handleChange = (e, name) => {
    switch (name) {
      case city:
        setCity(e.target.value);
        break;
      case region:
        setRegion(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearHandler = () => {
    setNameArray([]);
    setKeyword("");
    setCity("");
    setCityId("");
    setRegion("");
    setRegionId("");
    setMinPrice("");
    setMaxPrice("");
    setMinArea("");
    setMaxArea("");
    setCitiesFiltered(cities);
    setRegionsFiltered(regions);
  };

  useEffect(() => {
    console.log(filters, "filters");
  }, [filters]);

  useEffect(() => {
    if (keyword === "") setSuggestions([]);
  }, [keyword]);

  const searchHandler = () => {
    console.log(filters, "filters");
  };

  const resetSuggestion = () => {
    setTimeout(() => {
      setSuggestions([]);
    }, 500);
  };

  const regionHandler = (value) => {
    setRegion(value.name);
    setRegionId(value.id);
  };
  const cityHandler = (item) => {
    setCity(item.name);
    setCityId(item.id);
    setRegionId(item.province_code);
    //
  };

  useEffect(() => {
    if (regionId !== "") {
      const filteredRegion = regions.filter((item) => item.id === regionId);
      setRegion(filteredRegion[0].name);
      const filteredCities = cities.filter(
        (item) => item.province_code === regionId
      );
      setCitiesFiltered(filteredCities);
    }
  }, [regionId]);

  return (
    <div className="bg-gradient-to-r from-mainColor/50 to-mainColor  p-4 rounded-xl">
      <div className="md:mx-4 lg:mx-24">
        <h2 className="text-white text-center text-lg mb-2">
          Instantly compare 5400+ Canstar expert rated loans based on the inputs
          below
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="relative">
            <InputComponent
              keyword={keyword}
              keywordHandler={(e) => keywordHandler(e.target.value)}
              resetSuggestion={resetSuggestion}
            />
            <SuggestionsComponent
              suggestions={suggestions}
              suggestionHandler={(e) => suggestionHandler(e)}
            />
          </div>
          <DropdownComponent
            textButton={region ? region : "Select Province"}
            list={regionsFiltered}
            onDropdownSelect={(e) => regionHandler(e)}
          />
          <DropdownComponent
            textButton={city ? city : "Select City"}
            list={citiesFiltered}
            onDropdownSelect={(e) => cityHandler(e)}
          />
          <input
            className="rounded-lg p-3"
            label="Minimum Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
          <button onClick={clearHandler} className="bg-white text-black p-2">
            clear
          </button>
        </div>
      </div>

      <div>
        <div>
          {/* <input
            className="rounded-lg"
            label="Search Name"
            value={keyword}
            onChange={(e) => keywordHandler(e.target.value)}
          /> */}
          {/* {suggestions && (
            <div className={`${suggestions ? "absolute" : "hidden"} z-50`}>
              {suggestions.map((item, i) => (
                <div key={i} onClick={() => suggestionHandler(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          )} */}
        </div>

        {/* <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={(e) => handleChange(e, city)}
            >
              {cities &&
                cities.map((city, i) => (
                  <MenuItem key={i} value={city.id}>
                    {city.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="Region"
              onChange={(e) => handleChange(e, region)}
            >
              {regions &&
                regions.map((region, i) => (
                  <MenuItem key={i} value={region.id}>
                    {region.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        {nameArray.map((item, i) => (
          <Chip key={i} label={item} variant="outlined" />
        ))}
      </div>
      <div>
        <div>
        
        </div>
        <div>
          <input
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            className="rounded-lg"
            label="Maximum Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            className="rounded-lg"
            label="Minimum Area"
            value={minArea}
            onChange={(e) => setMinArea(e.target.value)}
          />
        </div>
        <div>
          <input
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            label="Maximum Area"
            value={maxArea}
            onChange={(e) => setMaxArea(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <Button startIcon={<ClearAll />} onClick={clearHandler}>
            Clear
          </Button>
        </div>
        <div>
          <Button onClick={searchHandler} startIcon={<Search />}>
            Search
          </Button>
        </div>*/}
      </div>

      {/* <ProTip />
  <Copyright /> */}
    </div>
  );
}

export default SearchWidgets;
