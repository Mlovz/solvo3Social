import React from "react";
import cls from "./search.module.scss";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className={cls.search}>
      <input type="text" onChange={handleChange} placeholder="Search..." />
      {search && <span>&times;</span>}
    </form>
  );
};

export default Search;
