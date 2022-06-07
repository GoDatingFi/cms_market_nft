import Button from "components/button";
import Styled from "./sort.style";
import cx from "classnames";
import React, { ReactNode, useCallback, useRef, useState } from "react";
import { SortProps } from "./index.utils";
import useClickOutside from "hooks/useClickOutside";
const Dropdown = ({
  options,
  title,
  className,
  onChange,
  currentValue,
  variant = "secondary",
  sortByLabel = false,
}: SortProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const closeSelectMenu = useCallback(() => {
    setIsActive(false);
  }, []);
  const ref = useRef(null);
  useClickOutside(ref, closeSelectMenu);

  return (
    <Styled.Select
      ref={ref}
      className={cx(className, "dropdown-sort")}
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      <Styled.Button
        className={`select-button ${isActive ? "active-button" : ""}`}
      >
        {title}
        {!isActive && <Styled.Arrow />}
        {isActive && <Styled.Delete />}
      </Styled.Button>
      <Styled.SelectContainer className="select-container">
        <Styled.SelectOptions className="select-options-list">
          {sortByLabel && (
            <Styled.SortByOption className="select-sort-by">
              Sort By
            </Styled.SortByOption>
          )}
          {options &&
            options.map(({ value, label }, index) => (
              <Styled.Option
                className={cx("select-option", {
                  "select-option-active": currentValue === value,
                })}
                key={index}
                onClick={() => onChange?.(value)}
              >
                {label}
                <span>
                  {currentValue === value && <Styled.CheckMultiSelect />}
                </span>
              </Styled.Option>
            ))}
        </Styled.SelectOptions>
      </Styled.SelectContainer>
    </Styled.Select>
  );
};

export default Dropdown;
