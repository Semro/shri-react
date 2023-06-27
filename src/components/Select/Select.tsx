"use client";

import classNames from "classnames";
import { FunctionComponent, useState } from "react";

import ArrowSvg from "@/public/assets/icons/arrow.svg";

import styles from "./Select.module.css";

interface Option {
  id: string | null;
  value: string;
}

interface Props {
  name: string;
  placeholder: string;
  valueId: string | null;
  options: Option[];
  onSelected: Function;
}

export const Select: FunctionComponent<Props> = ({
  name = "Select name",
  placeholder = "Placeholder value",
  valueId,
  options,
  onSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionOnClick = (id: Option["id"]) => {
    onSelected(id);
    setIsOpen(false);
  };

  const optionsWithNull = [
    { id: null, value: "Не выбрано" },
    ...(options ?? []),
  ];

  const value = options.find((option) => option.id === valueId)?.value;

  const optionElements = optionsWithNull.map(({ id, value }) => {
    return (
      <li
        key={id}
        className={styles.dropdownItem}
        onClick={() => handleOptionOnClick(id)}
      >
        {value}
      </li>
    );
  });

  return (
    <div className={styles.root}>
      <label>{name}</label>
      <div
        className={classNames(styles.input, isOpen && styles.inputOpen)}
        onClick={handleSelectClick}
      >
        <span
          className={classNames(
            styles.inputText,
            value && styles.inputTextFilled
          )}
        >
          {value ?? placeholder}
        </span>
        <ArrowSvg
          className={classNames(styles.arrowSvg, isOpen && styles.arrowSvgOpen)}
        />
      </div>
      {isOpen && <ul className={styles.dropdown}>{optionElements}</ul>}
    </div>
  );
};
