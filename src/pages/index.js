import "../../static/reset.css"
import "@magnetis/astro"
import React from "react"
import styled from "styled-components"
import HandleInputEvents from "../../static/input-label"
import { Helmet } from "react-helmet"
import { device } from "../media-queries"

const Container = styled.div`
  display: flex;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  background-color: var(--color-space-100);
  position: fixed;
  width: 100%;
  padding: 20px;
  z-index: 2;
`

const NavLink = styled.a`
  padding: 0 10px;
  color: var(--color-space-1000);
  &:hover {
    color: var(--color-space-500);
  }

  @media ${device.mobile} {
    display: none;
  }
`

const LogoLink = styled(NavLink)`
  margin-right: auto;

  @media ${device.mobile} {
    display: initial;
  }
`

const Register = styled.a`
  background-color: var(--color-space-1000);
  border-color: var(--color-space-800);
  color: var(--color-space-100);
  &:hover {
    background-color: var(--color-sun-500);
    border-color: var(--color-sun-300);
  }

  @media ${device.mobile} {
    display: none;
  }
`

const Sections = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`

const Hero = styled(Section)`
  justify-content: space-around;
  padding: 60px 8px;
`

const HeroTitle = styled.h1`
  @media ${device.mobile} {
    font-size: 40px;
  }
`

const HeroSubtitle = styled.p`
  @media ${device.mobile} {
    font-size: 24px;
  }
`

const Highlight = styled.span`
  background: var(--gradient-hoag);
  -webkit-background-clip: text;
  color: transparent;
`

const CallToAction = styled.a`
  margin: 50px 0;
  background: var(--color-sun-300);
  color: var(--color-space-1000);
  border: 2px solid transparent;

  &:hover {
    background: var(--color-sun-500);
  }
`

const HowItWorks = styled(Section)``

const Steps = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 50px 0;
  max-width: 1200px;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  background: var(--gradient-hoag);
  margin: 0 30px;
  align-items: center;
  overflow: auto;
  border-radius: 5%;
  min-width: 300px;
  & > * {
    margin: 5px 0;
  }

  @media ${device.mobile} {
    flex: 0;
    margin: 24px 0;
  }
`

const Arrow = styled.i`
  align-self: center;

  @media ${device.mobile} {
    display: none;
  }
`

const Pricing = styled(Section)``
const PrincingWrapper = styled(Steps)`
  display: flex;
`

const PricingItem = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 30px;
  flex: 1;

  background: var(--color-space-100);
  background-clip: padding-box;
  border: solid 3px transparent;
  border-radius: 1em;
  min-width: 300px;
  & > * {
    margin: 10px 0;
  }

  @media ${device.mobile} {
    flex: 0;
    margin: 24px 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: var(--gradient-hoag);
  }
`

const SecondaryCallToAction = styled(CallToAction)`
  margin: 10px 0;
`

const WhoAreWe = styled(Section)``
const WhoAreWeWrapper = styled(Steps)``
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > * {
    margin: 10px 0;
  }

  @media ${device.mobile} {
    margin: 24px 0;
  }
`
const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 200px;
  margin: 0 50px;
`

const SocialIcon = styled.img`
  width: 48px;
  margin: 0 10px;
  &:hover {
    opacity: 0.6;
  }
`

const Contact = styled(Section)``
const ContactForm = styled.form``

const InputWrapper = styled.div`
  width: 400px;
  margin: 10px 0;

  & > input:focus {
    border-color: var(--color-sun-500);
  }

  & > input:focus + label {
    color: var(--color-sun-500);
  }

  @media ${device.mobile} {
    width: 100%;
    margin: 8px;
  }
`

const Input = styled.input``
const Submit = styled.button`
  margin: 50px 0;
  background: var(--color-sun-300);
  color: var(--color-space-1000);
  border: 2px solid transparent;

  &:hover {
    background: var(--color-sun-500);
  }
`

export default () => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Validata</title>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Nav>
      <LogoLink className="a-btn a-btn--large">Validata</LogoLink>
      <NavLink href="#how-it-works" className="a-btn a-btn--large">
        How it Works
      </NavLink>
      <NavLink href="#pricing" className="a-btn a-btn--large">
        Pricing
      </NavLink>
      <NavLink className="a-btn a-btn--large">Who are we?</NavLink>
      <Register className="a-btn a-btn--medium" href="#contact-form">
        Register
      </Register>
    </Nav>
    <Sections>
      <Hero>
        <HeroTitle className="a-text--display">
          Validate your
          <br />
          <Highlight>Analytics Events</Highlight>
        </HeroTitle>
        <HeroSubtitle className="a-text--secondary-large">
          Validate you are collecting the correct data from your products.
          <br />
          Have a clear view of what can go wrong in your data collection
          pipeline.
        </HeroSubtitle>
        <CallToAction className="a-btn a-btn--large" href="#contact-form">
          Start now
        </CallToAction>
      </Hero>
      <HowItWorks id="how-it-works">
        <h2 className="a-title--large">How it works</h2>
        <Steps>
          <Step>
            <i className="a-icon a-icon__additional a-icon--size-large" />
            <h3 className="a-text--large">Create a project</h3>
            <p className="a-text--medium">
              Create a Project (web, mobile, blog) and register our webhook with
              your analytics provider
            </p>
          </Step>
          <Arrow className="a-icon a-icon__drop-right a-icon--size-large" />
          <Step>
            <i className="a-icon a-icon__sliders a-icon--size-large" />
            <h3 className="a-text--large">Specify events</h3>
            <p className="a-text--medium">
              Create the specifications for each event by setting what data
              would you like us to validate
            </p>
          </Step>
          <Arrow className="a-icon a-icon__drop-right a-icon--size-large" />
          <Step>
            <i className="a-icon a-icon__mail a-icon--size-large" />
            <h3 className="a-text--large">Be notified</h3>
            <p className="a-text--medium">
              We start validate events as they come and notify you if there is
              anything wrong
            </p>
          </Step>
        </Steps>
      </HowItWorks>
      <Pricing id="pricing">
        <h2 className="a-title--large">Pricing</h2>
        <PrincingWrapper>
          <PricingItem>
            <h3 className="a-text--large">Startup - $20/mo</h3>
            <p className="a-text--medium">
              Up to 1 Million <br />
              validated events
            </p>
            <SecondaryCallToAction
              className="a-btn a-btn--medium"
              href="#contact-form"
            >
              Subscribe
            </SecondaryCallToAction>
          </PricingItem>
          <PricingItem>
            <h3 className="a-text--large">Growth - $50/mo</h3>
            <p className="a-text--medium">
              Up to 5 Million <br />
              validated events
            </p>
            <SecondaryCallToAction
              className="a-btn a-btn--medium"
              href="#contact-form"
            >
              Subscribe
            </SecondaryCallToAction>
          </PricingItem>
          <PricingItem>
            <h3 className="a-text--large">Enterprise</h3>
            <p className="a-text--medium">
              More than 5 Million <br />
              validated events
            </p>
            <SecondaryCallToAction
              className="a-btn a-btn--medium"
              href="#contact-form"
            >
              Contact us
            </SecondaryCallToAction>
          </PricingItem>
        </PrincingWrapper>
      </Pricing>

      <WhoAreWe>
        <h2 className="a-title--large">Who are we?</h2>

        <WhoAreWeWrapper>
          <Profile>
            <ProfilePicture src="profile-luiz.jpeg"></ProfilePicture>
            <p className="a-text--large">Luiz Parreira</p>
            <div>
              <a href="https://twitter.com/luizfgparreira">
                <SocialIcon src="twitter.png"></SocialIcon>
              </a>
              <a href="https://www.linkedin.com/in/luizfgparreira/">
                <SocialIcon src="linkedin.png"></SocialIcon>
              </a>
              <a href="https://github.com/luizParreira">
                <SocialIcon src="github.png"></SocialIcon>
              </a>
            </div>
          </Profile>
          <Profile>
            <ProfilePicture src="profile-bruno.jpg"></ProfilePicture>
            <p className="a-text--large">Bruno Gomes</p>
            <div>
              <a href="https://twitter.com/brunojabs">
                <SocialIcon src="twitter.png"></SocialIcon>
              </a>
              <a href="https://www.linkedin.com/in/brunogomessilva/">
                <SocialIcon src="linkedin.png"></SocialIcon>
              </a>
              <a href="https://github.com/brunojabs">
                <SocialIcon src="github.png"></SocialIcon>
              </a>
            </div>
          </Profile>
        </WhoAreWeWrapper>
      </WhoAreWe>
      <Contact id="contact-form">
        <HandleInputEvents />
        <h2 className="a-title--large">Contact us</h2>

        <ContactForm
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <InputWrapper className="a-input a-input--large">
            <Input id="name" name="name" type="text" aria-labelledby="name" />
            <label id="name" htmlFor="name">
              Name
            </label>
          </InputWrapper>
          <InputWrapper className="a-input a-input--large">
            <Input
              id="email"
              name="email"
              type="email"
              aria-labelledby="email"
            />
            <label id="email" htmlFor="email">
              Email
            </label>
          </InputWrapper>
          <InputWrapper className="a-input a-input--large">
            <Input
              id="company-name"
              type="text"
              name="company-name"
              aria-labelledby="company-name"
            />
            <label id="company-name" htmlFor="company-name">
              Company name
            </label>
          </InputWrapper>

          <Submit className="a-btn a-btn--large" type="submit">
            Submit
          </Submit>
        </ContactForm>
      </Contact>
    </Sections>
  </Container>
)
