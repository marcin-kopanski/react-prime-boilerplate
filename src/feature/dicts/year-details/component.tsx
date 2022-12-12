import { useYearsLoaderDetails } from "./loader-details-hook";

export const YearDetails = () => {
  const { details, isLoading, isFetched } = useYearsLoaderDetails();
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && isFetched && (
        <>
          <p>id: {details?.id}</p>
          <p>year: {details?.year}</p>
        </>
      )}
    </>
  );
};
