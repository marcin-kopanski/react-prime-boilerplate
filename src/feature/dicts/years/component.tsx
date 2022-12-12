import { useYearsLoaderData } from "./loader-data-hook";
import { YearsTable } from "./table";

export const YearsList = () => {
  const { data, isLoading } = useYearsLoaderData();
  return <YearsTable data={data} isLoading={isLoading} />;
};
