import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type ExperimentPayload = { [key: string]: any };
export type ExperimentVariant = { key: string; payload: ExperimentPayload; value?: string };

type ExperimentState = {
  variants: Record<string, ExperimentVariant>;
  isLoaded: boolean;
  lastFetched: number | null;
};

const initialState: ExperimentState = {
  variants: {},
  isLoaded: false,
  lastFetched: null,
};

export const experimentSlice = createSlice({
  name: 'experiment',
  initialState,
  reducers: {
    setVariants: (state, action: PayloadAction<Record<string, ExperimentVariant>>) => {
      state.variants = action.payload;
      state.isLoaded = true;
      state.lastFetched = Date.now();
    },
    updateVariant: (state, action: PayloadAction<{ key: string; variant: ExperimentVariant }>) => {
      state.variants[action.payload.key] = action.payload.variant;
    },
    clearVariants: (state) => {
      state.variants = {};
      state.isLoaded = false;
      state.lastFetched = null;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const selectExperimentVariants = (s: RootState) => s.experiment.variants;
export const selectExperimentIsLoaded = (s: RootState) => s.experiment.isLoaded;
export const selectExperimentLastFetched = (s: RootState) => s.experiment.lastFetched;
export const selectExperiment = (key: string) =>
  createSelector([selectExperimentVariants], (variants) => variants[key]?.payload ?? null);
export const selectExperimentKeys = createSelector([selectExperimentVariants], (v) => Object.keys(v));
export const selectAllExperimentPayloads = createSelector([selectExperimentVariants], (variants) =>
  Object.fromEntries(Object.entries(variants).map(([k, v]) => [k, v.payload]))
);
export const selectExperimentExists = (key: string) =>
  createSelector([selectExperimentVariants], (variants) => key in variants);

export const { setVariants, updateVariant, clearVariants, setLoaded } = experimentSlice.actions;
export default experimentSlice.reducer;