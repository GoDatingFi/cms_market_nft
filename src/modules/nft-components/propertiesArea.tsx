import { FC, Key, memo } from "react";
import Styled from "assets/styles/nft/create.style";
import { PropertiesForm } from "utils/interfaces";

interface PropertiesProp {
  onclick: (e: any) => void;
  properties: PropertiesForm[];
  className?: string;
}

const PropertiesArea: FC<PropertiesProp> = ({
  onclick,
  properties,
  className,
}) => {
  return (
    <>
      <Styled.PropertiesWrapper className={className}>
        <Styled.PropertiesLeft>
          <Styled.DotHamburger />
          <Styled.PropertiesLeftTitle>
            <Styled.Title>Properties</Styled.Title>
            <Styled.SubTitleSwitch>
              Traits that show as text box
            </Styled.SubTitleSwitch>
          </Styled.PropertiesLeftTitle>
        </Styled.PropertiesLeft>
        <Styled.PlusGradient
          onClick={onclick}
          className="plus-gradient-button"
        />
      </Styled.PropertiesWrapper>
      {properties.length > 0 && (
        <Styled.PropertiesCardWrapper>
          {properties.map((pro, index: Key | null | undefined) => {
            return (
              <Styled.CardInfoProperties key={index}>
                <Styled.NameInfo>
                  {pro.name.length > 10
                    ? pro.name.substring(0, 10) + " ..."
                    : pro.name}
                </Styled.NameInfo>
                <Styled.InfoWrapper>
                  {pro.thumbnail && (
                    <div style={{ marginRight: "8px" }}>
                      <Styled.InfoImage
                        src={pro.thumbnail}
                        layout="fixed"
                        height={30}
                        width={30}
                      />
                    </div>
                  )}
                  <Styled.ValueInfo>
                    {" "}
                    {String(pro.value).length > 5
                      ? String(pro.value).substring(0, 5) + " ..."
                      : pro.value}
                  </Styled.ValueInfo>
                </Styled.InfoWrapper>
              </Styled.CardInfoProperties>
            );
          })}
        </Styled.PropertiesCardWrapper>
      )}
    </>
  );
};

export default memo(PropertiesArea);
