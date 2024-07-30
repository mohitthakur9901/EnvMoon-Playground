import React from "react";
import Select from "react-select";
import { languageOptions } from "../contants/Languages";
interface LanguageProps {

    onSelectChange: (selectedOption: unknown) => void;
}

const LanguagesDropdown: React.FC<LanguageProps> = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;