import axios from "axios";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setLoading,
  setLocation,
} from "~/features/location/locationSlice";

import createToast from "../CreateToast";

function GetWeather() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);

  const api = `https://openweathermap.org/data/2.5/weather?q=${location}&appid=439d4b804bc8187953eb36d2a8c26a02`;

  const getData = async () => {
    dispatch(setLoading(true));
    await axios
      .get(api)
      .then((res) => {
        dispatch(setData(res.data));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setLocation("Hanoi"));
        createToast("error");
      });
  };

  useMemo(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
}

export default GetWeather;
