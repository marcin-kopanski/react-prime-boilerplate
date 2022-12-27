import { Reducer } from "react";

import { Action, FilterConfig, State } from "./types";

export const booksListReducer: Reducer<State, Action> = (
  state: State,
  action: Action,
): State => {
  switch (action.type) {
    case "COUNTRIES_INITIALIZED": {
      const filter = {
        ...state.filters.countries,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, countries: { ...filter } },
      };

      const filtersReady: boolean = areFiltersReady(newState);
      const currentFilter: FilterConfig | undefined =
        filtersReady && !newState.currentFilter
          ? calculateCurrentFilters(newState)
          : newState.currentFilter;

      return {
        ...newState,
        filtersReady,
        currentFilter,
      };
    }

    case "COUNTRIES_CHANGED": {
      const filter = {
        ...state.filters.countries,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, countries: { ...filter } },
      };

      return newState;
    }

    case "AUTHORS_INITIALIZED": {
      const filter = {
        ...state.filters.authors,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, authors: { ...filter } },
      };

      const filtersReady: boolean = areFiltersReady(newState);
      const currentFilter: FilterConfig | undefined =
        filtersReady && !newState.currentFilter
          ? calculateCurrentFilters(newState)
          : newState.currentFilter;

      return {
        ...newState,
        filtersReady,
        currentFilter,
      };
    }

    case "AUTHORS_CHANGED": {
      const filter = {
        ...state.filters.authors,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, authors: { ...filter } },
      };

      return newState;
    }

    case "GENRES_INITIALIZED": {
      const filter = {
        ...state.filters.genres,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, genres: { ...filter } },
      };

      const filtersReady: boolean = areFiltersReady(newState);
      const currentFilter: FilterConfig | undefined =
        filtersReady && !newState.currentFilter
          ? calculateCurrentFilters(newState)
          : newState.currentFilter;

      return {
        ...newState,
        filtersReady,
        currentFilter,
      };
    }

    case "GENRES_CHANGED": {
      const filter = {
        ...state.filters.genres,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, genres: { ...filter } },
      };

      return newState;
    }

    case "YEARS_INITIALIZED": {
      const filter = {
        ...state.filters.years,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, years: { ...filter } },
      };

      const filtersReady: boolean = areFiltersReady(newState);
      const currentFilter: FilterConfig | undefined =
        filtersReady && !newState.currentFilter
          ? calculateCurrentFilters(newState)
          : newState.currentFilter;

      return {
        ...newState,
        filtersReady,
        currentFilter,
      };
    }

    case "YEARS_CHANGED": {
      const filter = {
        ...state.filters.years,
        isInitialized: true,
        selectedElements: action.selectedElements,
      };
      const newState = {
        ...state,
        filters: { ...state.filters, years: { ...filter } },
      };

      return newState;
    }

    case "SET_CURRENT_FILTER": {
      return {
        ...state,
        currentFilter: calculateCurrentFilters(state),
      };
    }
  }
};

const areFiltersReady = (state: State): boolean => {
  return Object.values(state.filters)
    .map((elem) => elem.isInitialized)
    .every((element: boolean | undefined) => element === true);
};

const calculateCurrentFilters = (state: State): FilterConfig => {
  return {
    countries: [...(state.filters.countries?.selectedElements || [])],
    authors: [...(state.filters.authors?.selectedElements || [])],
    genres: [...(state.filters.genres?.selectedElements || [])],
    years: [...(state.filters.years?.selectedElements || [])],
  };
};
