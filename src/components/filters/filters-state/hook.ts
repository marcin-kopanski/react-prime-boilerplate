import { useLocalStorage } from "usehooks-ts";

export const useFiltersState = <T> (key: string, defaultValue: T) => {
  const [] = useLocalStorage<T>(key, defaultValue)
};
