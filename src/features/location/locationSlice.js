const { createSlice } = require("@reduxjs/toolkit");

const locationSlice = createSlice({
  name: "location",

  initialState: {
    location: "Ha noi",
    today: "",
    day: "",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    data: [],
    input: "",
    loading: false,
  },

  reducers: {
    setToday: (state) => {
      const date = new Date();
      state.today = `${
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      }/${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }/${date.getFullYear()}`;
    },
    setDay: (state, action) => {
      const date = new Date();
      const day = date.getDay();
      state.day = state.days[day];
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = locationSlice;
export const { setToday, setDay, setLocation, setData, setInput, setLoading } =
  actions;

export default reducer;
