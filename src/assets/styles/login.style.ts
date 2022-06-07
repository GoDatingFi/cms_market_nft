import styled from "styled-components";
import {
  elevations,
  typoDesktopModifiers,
  typoMobileModifiers,
} from "utils/styles";
import { coreColors } from "utils/colors";
import Input from "components/input";
import Button from "components/button";

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/images/wave2.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
      background-size: cover;
      background-position-x: 0;
      background-position-y: calc(100% + 340px);
    }
  `,
  Box: styled.div`
    border-radius: 12px;
    background-image: url("/images/wave2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 25% 100%;
    padding: 24px 16px 43px;
    ${elevations.lvl3};
    width: 332px;

    @media only screen and (min-width: 768px) {
      width: 505px;
      padding: 23px 46px 45px;
    }
  `,
  Logo: styled.div`
    text-align: center;
  `,
  Title: styled.div`
    margin-top: 23px;
    text-align: center;
    ${typoDesktopModifiers.h5};
    color: ${coreColors.brand.blue};
    margin-bottom: 20px;
    @media only screen and (min-width: 768px) {
      margin-top: 28px;
      ${typoDesktopModifiers.h5};
    }
  `,
  SubsTitle: styled.div`
    ${typoMobileModifiers.body2};
    font-weight: 400;
    color: ${coreColors.neutral.grey900};
    margin-bottom: 8px;
    @media only screen and (min-width: 768px) {
      ${typoDesktopModifiers.h6};
      font-weight: 600;
      color: ${coreColors.neutral.grey900};
      margin-bottom: 8px;
    }

    &.password {
      margin-top: 20px;
    }
  `,
  EmailInput: styled(Input)`
    .input {
      width: 100%;
      outline: none;
      border: 2px solid ${coreColors.brand.blue};
      padding: 10px 16px;
      border-radius: 12px;
      height: 48px;
      ${typoMobileModifiers.body2};
      background-color: ${coreColors.neutral.white};
      cursor: unset;
      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h6};
      }
    }

    .post-icon {
      top: 55%;
      cursor: pointer;
    }
  `,
  PasswordInput: styled(Input)`
    .input {
      width: 100%;
      outline: none;
      border: 2px solid ${coreColors.brand.blue};
      padding: 10px 50px 10px 16px;
      border-radius: 12px;
      height: 48px;
      ${typoMobileModifiers.body2};
      background-color: ${coreColors.neutral.white};
      cursor: unset;
      @media only screen and (min-width: 768px) {
        ${typoDesktopModifiers.h6};
      }
    }

    .post-icon {
      top: 55%;
      cursor: pointer;
    }
  `,
  PostIcon: styled.div``,
  LoginButton: styled(Button)`
    margin: 62px auto 0;
    min-width: 86px;
    height: 31px;
    ${typoMobileModifiers.caption};

    @media only screen and (min-width: 768px) {
      min-width: 127px;
      height: 48px;
      ${typoDesktopModifiers.button};
    }
  `,
};

export default Styled;
