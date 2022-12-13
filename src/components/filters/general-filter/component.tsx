import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";

const cities = [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
];

export const GeneralFilter = () => {
  const [selectedCities1, setSelectedCities1] = useState([]);

  return (
    <MultiSelect
      className="mr-2"
      value={selectedCities1}
      options={cities}
      onChange={(e) => setSelectedCities1(e.value)}
      optionLabel="name"
      placeholder="Select a City"
      maxSelectedLabels={0}
      selectedItemsLabel={`Selected {0} of ${cities.length}`}
    />
  );
};
