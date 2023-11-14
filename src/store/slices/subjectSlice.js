import { createSlice } from "@reduxjs/toolkit";

const initialPrjectState = { projects: [], project: {} };

const projectSlice = createSlice({
  name: "project",
  initialState: initialPrjectState,
  reducers: {
    getAllProjects(state, action) {
      state.projects = action.payload.projects;
    },
    clearProjects(state){
      state.project = []
    },
    getProject(state, action){
        state.project = action.payload.project;
    }
  },
});

export default projectSlice;
