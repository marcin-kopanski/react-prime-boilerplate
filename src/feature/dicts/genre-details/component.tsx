import { useGenresLoaderDetails } from "./loader-details-hook";

export const GenreDetails = () => {
  const { details, isLoading, isFetched } = useGenresLoaderDetails();
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
