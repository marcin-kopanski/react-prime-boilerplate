import { FC } from "react";

import { Button } from "primereact/button";

type FilterActionsProps = {
  onApply?: () => void;
  onSelectAll?: () => void;
  onUnselectAll?: () => void;
};

export const FilterActions: FC<FilterActionsProps> = ({
  onApply,
  onSelectAll,
  onUnselectAll,
}) => {
  return (
    <div className="flex flex-row gap-2">
      {onApply && (
        <Button label="Apply" className="p-button-success" onClick={onApply} />
      )}

      {onSelectAll && <Button label="Select all" onClick={onSelectAll} />}

      {onUnselectAll && <Button label="Unselect all" onClick={onUnselectAll} />}
    </div>
  );
};
