import React from "react";
import Image from "../Image/Image";

type Props = {
  value: string;
  placeholder: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputSearch = ({ handleOnChange, placeholder }: Props) => {
  return (
    <div className="input-search">
      <input
        onChange={handleOnChange}
        placeholder={placeholder}
        name="search"
      />

      <div className="input-search__icon">
        <div className="input-search__icon-container">
          <Image src="/icons/search.svg" alt="icon search" />
        </div>
      </div>
    </div>
  );
};

InputSearch.defaultProps = {
  placeholder: "Search by author",
  value: "",
};

export default InputSearch;
