import React from "react";
import { Button } from "../ButtonElements";
import {
    BtnWrap,
    FooterColumn1,
    FooterColumn2,
    FooterContainer,
    FooterH1,
    FooterH1Wrap,
    FooterH2,
    FooterH2Wrap,
    FooterIconsWrap,
    FooterInput,
    FooterLabel,
    FooterLabelWrap,
    FooterLink,
    FooterLinkWrap,
    FooterP,
    FooterPWrap,
    FooterRow,
} from "./footerElements";
import Icons from "../Icons";

const Footer = ({ primary, dark, dark2, buttonLabel }) => {
    return (
        <>
            <FooterContainer>
                <FooterRow>
                    <FooterColumn1>
                        <FooterH1Wrap>
                            <FooterH1>Let's Connect</FooterH1>
                        </FooterH1Wrap>
                        <FooterPWrap>
                            <FooterP>
                                Quisque lorem tortor fringilla sed, vestibulum
                                id, eleifend justo vella ipsum dolor lacus.
                            </FooterP>
                        </FooterPWrap>
                        <FooterIconsWrap>
                            <Icons />
                        </FooterIconsWrap>
                        <FooterLinkWrap>
                            <FooterLink href="/">hallo@me.co →</FooterLink>
                        </FooterLinkWrap>
                    </FooterColumn1>

                    <FooterColumn2>
                        <FooterH2Wrap>
                            <FooterH2>
                                Let's message me and make something together!
                            </FooterH2>
                        </FooterH2Wrap>
                        <FooterLabelWrap>
                            <FooterLabel htmlFor="name">
                                <FooterInput
                                    type="text"
                                    placeholder="Your name"
                                    name="client-name"
                                />
                            </FooterLabel>
                            <FooterLabel htmlFor="email">
                                <FooterInput
                                    type="text"
                                    placeholder="Your email"
                                    name="client-email"
                                />
                            </FooterLabel>
                            <FooterLabel htmlFor="project-details">
                                <FooterInput
                                    type="text"
                                    placeholder="Project details"
                                    name="client-project-details"
                                />
                            </FooterLabel>
                        </FooterLabelWrap>
                        <BtnWrap>
                            <Button
                                to="home"
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                            >
                                {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </FooterColumn2>
                </FooterRow>
            </FooterContainer>
        </>
    );
};

export default Footer;
