import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, indice) => (
        <Star
          key={indice}
          selected={selectedStars > indice}
          onSelect={() => setSelectedStars(indice + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const ExampleUseStateTres = () => {
  return (
    <>
      <StarRating totalStars={10} />
    </>
  );
};

export default ExampleUseStateTres;
