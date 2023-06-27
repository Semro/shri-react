"use client";

import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import styles from "./Input.module.css";

interface Props {
  name: string;
  placeholder: string;
  initialValue: string;
  onChangeValue: Function;
}

export const Input: FunctionComponent<Props> = ({
  name = "Input name",
  placeholder = "Placeholder value",
  initialValue,
  onChangeValue,
}) => {
  const [value, setValue] = useState<string>(initialValue);
  const [debouncedValue] = useDebounce(value, 350);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  };

  useEffect(() => {
    onChangeValue(debouncedValue);
  }, [onChangeValue, debouncedValue]);

  return (
    <div className={styles.root}>
      <label>{name}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};
