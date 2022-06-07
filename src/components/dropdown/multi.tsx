import Button from "components/button";
import Styled from "./multi.style";
import cx from "classnames";
import { MultiProps } from "./index.utils";
import { useCallback, useMemo, useRef, useState } from "react";
import useClickOutside from "hooks/useClickOutside";

const Dropdown = ({
  options,
  title,
  className,
  onChange,
  currentValue,
  variant = "secondary",
  onApply,
  onClear,
  type,
  label,
  subLabel,
  placeholder,
}: MultiProps) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const closeSelectMenu = useCallback(() => {
    setIsActive(false);
  }, []);

  const renderCategory = useMemo(() => {
    let listCategory: (string | undefined)[];
    if (options) {
      listCategory = options.map((e) => {
        if (currentValue?.includes(e.value)) {
          return `${e.label}`;
        }
        return undefined;
      });
      let availableCategory = listCategory.filter((e) => !!e);
      if (availableCategory.length > 1) {
        return availableCategory.join(", ");
      }
      return availableCategory;
    }
  }, [currentValue, options]);

  useClickOutside(ref, closeSelectMenu);

  if (type === "check") {
    return (
      <Styled.Select className={cx(className, "dropdown-multi")}>
        {label && (
          <Styled.MainLabel
            className={cx("label", { "custom-label": !subLabel })}
          >
            {label}
          </Styled.MainLabel>
        )}
        {subLabel && (
          <Styled.SubLabel className="sub-label">{subLabel}</Styled.SubLabel>
        )}
        <Styled.Label
          className="select-check-label"
          onClick={() => setIsActive(!isActive)}
        >
          <Styled.CurrentValueWrapper>
            <Styled.CurrentValue className="select-check-current-value">
              {renderCategory}
            </Styled.CurrentValue>
          </Styled.CurrentValueWrapper>
          {!currentValue?.length && (
            <Styled.Placeholder className="select-check-placeholder">
              {placeholder}
            </Styled.Placeholder>
          )}
          <Styled.Arrow $isActive={isActive} />
        </Styled.Label>
        <Styled.SelectOptionsCheck
          className="select-check-options-list"
          $isActive={isActive}
          ref={ref}
        >
          <Styled.SelectOptionsWrapper>
            {options &&
              options.map(({ value, label }, index) => (
                <Styled.OptionLabel
                  className="select-check-option-label"
                  key={index}
                  onClick={() => onChange?.(value)}
                >
                  <Styled.Checkbox
                    className={cx("select-checkbox", {
                      "select-checkbox-active": currentValue?.includes(value),
                    })}
                  />
                  <Styled.LabelText className="select-check-label-text">
                    {label}
                  </Styled.LabelText>
                </Styled.OptionLabel>
              ))}
          </Styled.SelectOptionsWrapper>
        </Styled.SelectOptionsCheck>
      </Styled.Select>
    );
  }

  return (
    <Styled.Select className={cx(className, "dropdown-multi")}>
      <Button variant={variant} className="select-button">
        {title}
      </Button>
      <Styled.SelectOptions className="select-options-list">
        {options &&
          options.map(({ value, label }, index) => (
            <Styled.Option
              className={cx("select-option", {
                "select-option-active": currentValue?.includes(value),
              })}
              key={index}
              onClick={() => onChange?.(value)}
            >
              {label}
            </Styled.Option>
          ))}
        {options?.length && (
          <Styled.ButtonGroup>
            <Styled.ClearButton onClick={onClear}>Clear</Styled.ClearButton>
            <Styled.ApplyButton onClick={onApply}>Apply</Styled.ApplyButton>
          </Styled.ButtonGroup>
        )}
      </Styled.SelectOptions>
    </Styled.Select>
  );
};

export default Dropdown;
