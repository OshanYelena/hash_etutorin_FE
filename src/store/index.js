import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";
// import notificationSlice from "./slices/notificationSlice";
// import subjetSlice from "./slices/subjectSlice";
// import educatorSlice from "./slices/educatorSlice";
// import userSlice from "./slices/userSclice";
// import searchSlice from "./slices/searchYearSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  // notification: notificationSlice.reducer,
  // project: projectSlice.reducer,
  // evaluator: evaluatorSlice.reducer,
  // user: userSlice.reducer,
  // searchYear: searchSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
