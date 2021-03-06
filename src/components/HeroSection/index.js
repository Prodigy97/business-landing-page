import React from "react";
import { Button } from "../ButtonElements";
import { FooterIconsWrap } from "../footer/footerElements";
import Icons from "../Icons";
import {
    HeroContainer,
    HeroWrapper,
    HeroRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from "./HeroElements";

const HeroSection = ({
    lightBg,
    id,
    imgStart,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
}) => {
    return (
        <>
            <HeroContainer lightBg={lightBg} id={id}>
                <HeroWrapper>
                    <HeroRow imgStart={imgStart}>
                        <Column1 data-aos="fade-right">
                            <TextWrapper>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2 data-aos="fade-left">
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>

                            <FooterIconsWrap vertical>
                                <Icons />
                            </FooterIconsWrap>
                        </Column2>
                    </HeroRow>
                </HeroWrapper>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
