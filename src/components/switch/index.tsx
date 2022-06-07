import { useState, useEffect, ReactNode, useCallback } from "react";
import styled from "styled-components";
import { coreColors, mixColors } from "utils/colors";

interface Props {
  value?: boolean;
  preItem?: ReactNode | null;
  postItem?: ReactNode | null;
  onChange?: (isActive: boolean) => void;
  disabled?: boolean;
}

const Switch = ({
  value = false,
  preItem = null,
  postItem = null,
  onChange,
  disabled = false,
}: Props) => {
  const [isSwitchOn, setSwitchOn] = useState(value);

  useEffect(() => {
    setSwitchOn(value);
  }, [value]);

  const toggleSwitch = useCallback(() => {
    setSwitchOn(!isSwitchOn);
    onChange?.(!isSwitchOn);
  }, [isSwitchOn, onChange]);

  return (
    <Styled.Container data-testid={"switcher"}>
      {preItem}
      <Styled.SwitchContainer
        data-testid={"switcher-box"}
        disabled={disabled}
        isOn={isSwitchOn}
        onClick={() => {
          if (!disabled) {
            toggleSwitch();
          }
        }}
      >
        <Styled.Dot data-testid={"switcher-dot"} isOn={isSwitchOn} />
      </Styled.SwitchContainer>
      {postItem}
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  SwitchContainer: styled.div<{ isOn?: boolean; disabled: boolean }>`
    transition: all 300ms ease-in-out;
    box-sizing: border-box;
    width: 44px;
    height: 22px;
    border-radius: 16px;
    border: 1px solid transparent;
    background: ${({ isOn }) => (isOn ? "#7265FD" : "#D1D1D6")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  `,
  Dot: styled.div<{ isOn?: boolean }>`
    transition: all 300ms ease-in-out;
    width: 18px;
    height: 18px;
    border-radius: 16px;
    background: ${coreColors.neutral.white};
    transform: ${({ isOn }) =>
      isOn ? "translate(23px, 1px)" : "translate(1px, 1px)"};
  `,
};

export default Switch;
