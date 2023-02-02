import { useMemo, useRef, useState } from "react";

import { OverlayPanel } from "primereact/overlaypanel";
import { ProgressSpinner } from "primereact/progressspinner";

import { useQuery } from "@tanstack/react-query";

import { QueryAuthors } from "@/models/author";

type AuthorOverlayResult = {
  events: {
    onMouseEnter: (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      recordId: number,
    ) => void;
    onMouseLeave: () => void;
  };
  dataOverlay: JSX.Element;
};

export const useAuthorOverlay = (): AuthorOverlayResult => {
  const dataOverlayRef = useRef<OverlayPanel>(null);
  const event = useRef<React.MouseEvent<HTMLElement, MouseEvent>>();

  const [id, setId] = useState<number>(-1);

  const {
    data: details,
    isLoading,
    isFetched,
  } = useQuery({
    ...QueryAuthors.queryAuthorById(+id),
    enabled: id >= 0,
    onSuccess: () => {
      dataOverlayRef.current?.show(event.current, null);
    },
  });

  const dataOverlay = useMemo(() => {
    if (id > -1) {
      return (
        <OverlayPanel
          ref={dataOverlayRef}
          onHide={() => {
            setId(-1);
          }}
        >
          {isLoading ? (
            <ProgressSpinner className="w-3rem h-3rem" />
          ) : (
            <>
              <div className="grid">
                <div className="col">
                  {details?.firstName} {details?.lastName}
                </div>
              </div>
              <div className="grid">
                <div className="col">{details?.country.name}</div>
              </div>

              {details?.books && (
                <>
                  <h4>Books</h4>

                  <ul className="pl-3">
                    {details?.books.map((element) => (
                      <li key={`book-${element.id}`}>"{element.title}"</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </OverlayPanel>
      );
    } else return <></>;
  }, [id, details, isLoading, isFetched]);

  const events = useMemo(
    () => ({
      onMouseEnter: (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        recordId: number,
      ) => {
        event.current = e;
        setId(recordId);
      },
      onMouseLeave: () => {
        setId(-1);
        dataOverlayRef.current?.hide();
      },
    }),
    [],
  );

  return { events, dataOverlay };
};
