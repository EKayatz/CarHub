"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufactureProps } from "@/types";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";
import Image from "next/image";

const SearchManufacture = ({
  manufacture,
  setManufacture,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacture} onChange={setManufacture}>
        <div className="relative w-full">
          <div className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </div>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacture: string) => manufacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="">
              {filteredManufacturers.map((manufacturer: string) => (
                <Combobox.Option
                  key={manufacturer}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue" : "text-gray-900"
                    }`
                  }
                  value={manufacturer}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    );
                  }}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
