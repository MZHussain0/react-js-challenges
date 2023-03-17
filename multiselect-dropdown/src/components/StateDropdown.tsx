import { useEffect, useRef, useState } from "react";
import { states } from "../data/states";

type Props = {};

const StateDropdown = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStates, setselectedStates] = useState<string[]>([]);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target !== ref.current) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (option: string) => {
    if (selectedStates.includes(option)) {
      setselectedStates(
        selectedStates.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setselectedStates([...selectedStates, option]);
    }
  };

  const numberOfSelectedStates = selectedStates.length;
  return (
    <div ref={ref} className="state-dropdown">
      <button
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
        className="state-dropdown">
        {numberOfSelectedStates > 0
          ? numberOfSelectedStates + " state selected"
          : `-- select your state --`}
      </button>
      {showDropdown && (
        <div className="panel">
          {states.map((state) => (
            <div
              className={`panel-items ${
                selectedStates.includes(state.name) ? "selected" : ""
              }`}
              key={state.name}>
              <input
                checked={selectedStates.includes(state?.name)}
                onChange={() => handleCheckboxChange(state?.name)}
                type="checkbox"
                id={`${state.name}`}
              />
              <label htmlFor={`${state.name}`}>{state.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateDropdown;
