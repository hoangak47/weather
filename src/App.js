import { faMagnifyingGlass, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import GetWeather from "./Component/GetWeather";
import {
  setDay,
  setInput,
  setLocation,
  setToday,
} from "./features/location/locationSlice";

import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect } from "react";
import { SVGLoading } from "./Component/SVG";
import ChangeLanguageVietnamese from "./Component/ChangeLanguageVietnamese";

function App() {
  const dispatch = useDispatch();
  GetWeather();

  useEffect(() => {
    dispatch(setToday());
    dispatch(setDay());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useSelector((state) => state.location.location);
  const today = useSelector((state) => state.location.today);
  const dayName = useSelector((state) => state.location.day);
  const data = useSelector((state) => state.location.data);
  const input = useSelector((state) => state.location.input);
  const loading = useSelector((state) => state.location.loading);

  return (
    <main className="container">
      <div id="toasts"></div>
      {loading ? (
        <div className="loading">
          <SVGLoading />
        </div>
      ) : (
        <div className="weather">
          <header className="weather__header">
            <h1 className="weather__title">Weather | Nguyen Hoang</h1>
            <div className="weather__search">
              <input
                type="text"
                className="weather__input"
                placeholder="Search in city"
                onChange={(e) => dispatch(setInput(e.target.value))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(setLocation(ChangeLanguageVietnamese(input)));
                  }
                }}
              />
              <FontAwesomeIcon
                className="icon icon-search"
                icon={faMagnifyingGlass}
                onClick={() =>
                  dispatch(setLocation(ChangeLanguageVietnamese(input)))
                }
              />
            </div>
          </header>
          <section className="weather__body">
            <div className="weather__location">
              <div className="weather__city">{location}</div>
              <div className="weather__date">
                {dayName}, {today}
              </div>
            </div>
            <div className="weather__temp">
              <div className="weather__temp--teamplace">
                <div className="weather__temp--spoke"></div>
                <div className="weather__temp--spoke"></div>
                <div className="weather__temp--spoke"></div>
                <div className="weather__temp--spoke"></div>
                <div className="weather__temp--spoke"></div>
                <div className="weather__temp--spoke"></div>
              </div>
              <div className="weather__temp--value">
                <span className="weather__temp--value--number">
                  {!loading ? Math.round(data.main.temp) : null}
                </span>
                <span className="weather__temp--value--unit">°C</span>
              </div>
            </div>
            <div className="weather__status">
              <div className="weather__status--item weather__status--left">
                <FontAwesomeIcon className="icon" icon={faWind} />
                <div className="weather__status--text">
                  {!loading !== 0 ? data.wind.speed : null} m/s
                </div>
              </div>
              <div className="weather__status--item weather__status--right">
                <FontAwesomeIcon
                  className="icon"
                  icon={icon({ name: "droplet" })}
                />
                <div className="weather__status--text">
                  {data.lenght !== 0 ? data.clouds.all : null} %
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
