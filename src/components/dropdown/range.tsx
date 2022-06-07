import Styled from "./range.style";
import cx from "classnames";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import useHover from "hooks/useHover";
import { RangeProps } from "./index.utils";
import useClickOutside from "hooks/useClickOutside";

// TODO: Warning: A component is changing an uncontrolled input to be controlled. Fix later
// Because of init value is undefine and later set them to number

const Dropdown = ({
  options,
  title,
  className,
  onChange,
  currentValue,
  variant = "secondary",
  onApply,
  onClear,
  onRangeChange,
  rangeTo,
  rangeFrom,
}: RangeProps) => {
  const dropdownRef = useRef(null);
  const isHoverOnDropdownContent = useHover(dropdownRef);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  const handleChangeRange = useCallback(
    ({ type, from, to }: { type: string; from?: any; to?: any }) => {
      if (type === "from") {
        onRangeChange?.({ from, to: rangeTo });
      } else onRangeChange?.({ from: rangeFrom, to });
    },
    [onRangeChange, rangeFrom, rangeTo],
  );

  const handleClear = useCallback(() => {
    onRangeChange?.({ from: 0, to: 0 });
    onClear?.();
  }, [onClear, onRangeChange]);

  /* useEffect(() => {
    if (!isHoverOnDropdownContent) {
      setIsActive(false);
      setIsActiveButton(false);
    }
  }, [isHoverOnDropdownContent]);*/

  const closeSelectMenu = useCallback(() => {
    setIsActive(false);
    setIsActiveButton(false);
  }, []);

  useClickOutside(dropdownRef, closeSelectMenu);

  const handleClickButton = useCallback(() => {
    setIsActiveButton(!isActiveButton);
  }, [isActiveButton]);

  return (
    <Styled.Select
      className={cx(className, "dropdown-range")}
      ref={dropdownRef}
      $width={"157px"}
      isActive={isActiveButton}
    >
      <Styled.Button
        className={`select-button ${isActiveButton ? "active-button" : ""}`}
        onClick={() => handleClickButton()}
      >
        <Styled.PriceRangeIcon />
        Price Range
        {!isActiveButton && <Styled.Arrow />}
        {isActiveButton && <Styled.Delete />}
      </Styled.Button>
      <Styled.SelectContainer className="select-container">
        <Styled.SelectContent className="select-content">
          <Styled.CustomSelect
            className="custom-select"
            onClick={() => setIsActive(!isActive)}
          >
            {options?.find((i) => i.value === currentValue)?.label}
            <Styled.Arrow $isActive={isActive} />
          </Styled.CustomSelect>
          <Styled.CustomSelectOption
            className="custom-select-options"
            isActive={isActive}
          >
            {options?.map(({ value, label }, index) => (
              <Styled.CustomOption
                className="custom-option"
                key={index}
                onClick={() => {
                  onChange?.(value);
                  setIsActive(!isActive);
                }}
              >
                {label}
              </Styled.CustomOption>
            ))}
          </Styled.CustomSelectOption>
          <Styled.InputGroup>
            <Styled.CustomInput
              min={0}
              value={rangeFrom}
              onChange={(e) =>
                handleChangeRange({
                  type: "from",
                  from: e.target.value,
                })
              }
              placeholder="From"
              type="number"
            />
            <Styled.CustomInput
              min={0}
              value={rangeTo}
              onChange={(e) =>
                handleChangeRange({
                  type: "to",
                  to: e.target.value,
                })
              }
              placeholder="To"
              type="number"
            />
          </Styled.InputGroup>
          <Styled.RangeButtonGroup>
            <Styled.ClearButton onClick={handleClear}>Clear</Styled.ClearButton>
            <Styled.ApplyButton onClick={onApply}>Apply</Styled.ApplyButton>
          </Styled.RangeButtonGroup>
        </Styled.SelectContent>
      </Styled.SelectContainer>
    </Styled.Select>
  );
};

export default Dropdown;
