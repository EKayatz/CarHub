"use client";
import React from "react";
import { useState } from "react";
import { SearchManufacture } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button className={`search__btn ml-3 z-10 ${otherClasses}`} type="submit">
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const Router = useRouter();
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacture === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacture.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacture: string) => {
    const params = new URLSearchParams(window.location.search);
    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }
    if (manufacture) {
      params.set("manufacture", manufacture);
    } else {
      params.delete("manufacture");
    }
    const newPathname = `${window.location.pathname}?${params.toString()}`;
    Router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
