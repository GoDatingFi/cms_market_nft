import Styled from "./select.style";
import cx from "classnames";
import { useCallback, useMemo, useRef, useState } from "react";
import useClickOutside from "hooks/useClickOutside";
import { SelectProps } from "./index.utils";

const Select = ({
  options,
  onChange,
  currentValue,
  className,
  placeholder = "",
  label = "",
  subLabel = "",
  required = false,
  disabled,
  ...props
}: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useRef(null);

  const renderSelected = useMemo(() => {
    const selected = options?.find((i) => i.value === currentValue);
    return selected;
  }, [currentValue, options]);

  const closeSelectMenu = useCallback(() => {
    setIsActive(false);
  }, []);

  useClickOutside(ref, closeSelectMenu);

  return (
    <Styled.SelectWrapper
      tabIndex={0}
      className={cx("dropdown-select", className)}
      {...props}
    >
      {label && (
        <Styled.Label className={cx("label", { "custom-label": !subLabel })}>
          {label} {required && <Styled.Start>*</Styled.Start>}
        </Styled.Label>
      )}
      {subLabel && (
        <Styled.SubLabel className="sub-label">{subLabel}</Styled.SubLabel>
      )}
      <div className="select-wrapper" ref={ref}>
        <Styled.SelectBox
          className="custom-select"
          onClick={() => setIsActive(disabled ? false : !isActive)}
        >
          <Styled.ValueWrapper>
            {renderSelected?.icon && (
              <Styled.Image
                src={renderSelected.icon}
                width={24}
                height={24}
                alt=""
                layout="fixed"
              />
            )}
            <div className="selected">
              {renderSelected?.label ? (
                renderSelected.label
              ) : (
                <Styled.PlaceHolder>{placeholder}</Styled.PlaceHolder>
              )}
            </div>
          </Styled.ValueWrapper>
          <Styled.Arrow $isActive={isActive} />
        </Styled.SelectBox>
        <Styled.OptionsWrap
          className="custom-select-options"
          isActive={isActive}
        >
          {options?.map(({ value, label, icon, sc }, index) => (
            <Styled.SelectOption
              className="custom-option"
              key={index}
              onClick={() => {
                onChange?.(value, sc || "");
                setIsActive(false);
              }}
            >
              {icon && (
                <Styled.Image
                  src={icon}
                  width={24}
                  height={24}
                  alt=""
                  layout="fixed"
                />
              )}
              {label}
            </Styled.SelectOption>
          ))}
        </Styled.OptionsWrap>
      </div>
    </Styled.SelectWrapper>
  );
};

export default Select;
