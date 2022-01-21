import { useState } from 'react';
import data from "../data";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import api from '../services/api';

import styles from '../styles/components/SearchBox.module.css';

const SearchBox = (props) => {
  const [locations, setLocations] = useState([]);


  const handleOnSelect = (location) => {
    props.setLoading(true)

    api
      .get(`/?location=${location.name}`)
      .then((forecast) => { props.setForecast(forecast.data) })
      .catch((error) => { console.error(error) })
      .finally(() => { props.setLoading(false) });
  }

  const handleOnSearch = async (string, results) => {
    const result = data.filter((location) => {
      return location.name.toLowerCase().includes(string.toLowerCase());
    });
    setLocations(result);
  }

  return (
    <div className={styles.content}>
      <ReactSearchAutocomplete
        items = {locations}
        onSearch = {handleOnSearch}
        onSelect = {handleOnSelect}
        autoFocus
        placeholder = "Enter your location..."

        styling = {{ 
          borderRadius: ".5rem",
          placeholderColor: "var(--color-background)",
          fontFamily: "Varela Round",
        }}
      />
    </div>
  );
};

export default SearchBox;