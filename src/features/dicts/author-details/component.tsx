import { useAuthorsLoaderDetails } from "./loader-details-hook";

export const AuthorDetails = () => {
  const { details, isLoading, isFetched } = useAuthorsLoaderDetails();
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && isFetched && (
        <>
          <p>id: {details?.id}</p>
          <p>firstName: {details?.firstName}</p>
          <p>lastName: {details?.lastName}</p>
          <p>dateOfBirth: {`${details?.dateOfBirth}`}</p>
          <p>dateOfDeath: {`${details?.dateOfDeath}`}</p>
          <p>country: {details?.country?.name}</p>
        </>
      )}
    </>
  );
};
