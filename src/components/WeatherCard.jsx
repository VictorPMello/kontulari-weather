import { useState } from "react";

import styles from "../styles/components/WeatherCard.module.css";

const WeatherCard = (props) => {
  const [forecast] = useState(props.forecast);


  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>Min Temperature</h2>

        <div className={styles.temp}>
          <span>{forecast.consolidated_weather[0].min_temp.toFixed(1)}</span>
        </div> {/* .temp */}
      </div> {/* .content */}

      <div className={styles.content}>
        <h1>{forecast.title}</h1>

        <div className={styles.temp}>
          <span>{forecast.consolidated_weather[0].the_temp.toFixed(1)}</span>
        </div> {/* .temp */}
      </div> {/* .content */}

      <div className={styles.content}>
        <h2>Max Temperature</h2>
        
        <div className={styles.temp}>
          <span>{forecast.consolidated_weather[0].max_temp.toFixed(1)}</span>
        </div> {/* .temp */}
      </div> {/* .content */}
    </div>
  )
}

export default WeatherCard;