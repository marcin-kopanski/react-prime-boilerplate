import { useCountriesLoaderDetails } from "./loader-details-hook";

export const CountryDetails = () => {
  const { details, isLoading, isFetched } = useCountriesLoaderDetails();
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && isFetched && (
        <>
          <p>id: {details?.id}</p>
          <p>name: {details?.name}</p>
        </>
      )}
    </>
  );
};
