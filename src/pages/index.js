import "../../static/reset.css"
import "@magnetis/astro"
import React from "react"
import styled from "styled-components"

const MOBILE_SIZE = "480px"
const TABLET_SIZE = "768px"
const DESKTOP_SIZE = "1200px"

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
`

const LogoLink = styled(NavLink)`
  margin-right: auto;
`

const Register = styled.button`
  background-color: var(--color-space-1000);
  border-color: var(--color-space-800);
  color: var(--color-space-100);
  &:hover {
    background-color: var(--color-sun-500);
    border-color: var(--color-sun-300);
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
`

const Hero = styled(Section)`
  padding-top: 60px;
  justify-content: space-around;
`

const Highlight = styled.span`
  background: var(--gradient-hoag);
  -webkit-background-clip: text;
  color: transparent;
`

const CallToAction = styled.button`
  margin: 50px 0;
  background: var(--color-sun-300);
  border: 2px solid transparent;

  &:hover {
    background: var(--color-sun-500);
  }
`

const HowItWorks = styled(Section)`
  padding: 50px;
  justify-content: space-between;
`

const Steps = styled.div`
  display: flex;
  flex-direction: row;
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
  & > * {
    margin: 5px 0;
  }
`

const Arrow = styled.i`
  align-self: center;
`

const Pricing = styled(HowItWorks)``
const PrincingWrapper = styled(Steps)``

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

const WhoAreWe = styled(HowItWorks)``
const WhoAreWeWrapper = styled(Steps)``
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 10px 0;
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

export default () => (
  <Container>
    <Nav>
      <LogoLink className="a-btn a-btn--large">Validata</LogoLink>
      <NavLink href="#how-it-works" className="a-btn a-btn--large">
        How it Works
      </NavLink>
      <NavLink href="#pricing" className="a-btn a-btn--large">
        Pricing
      </NavLink>
      <NavLink className="a-btn a-btn--large">Who are we?</NavLink>
      <Register className="a-btn a-btn--medium">Register</Register>
    </Nav>
    <Sections>
      <Hero>
        <h1 className="a-text--display">
          Validate your
          <br />
          <Highlight>Analytics Events</Highlight>
        </h1>
        <p className="a-text--secondary-large">
          Validate you are collecting the correct data from your products.
          <br />
          Have a clear view of what can go wrong in your data collection
          pipeline.
        </p>
        <CallToAction className="a-btn a-btn--large">Start now</CallToAction>
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
            <SecondaryCallToAction className="a-btn a-btn--medium">
              Subscribe
            </SecondaryCallToAction>
          </PricingItem>
          <PricingItem>
            <h3 className="a-text--large">Growth - $50/mo</h3>
            <p className="a-text--medium">
              Up to 5 Million <br />
              validated events
            </p>
            <SecondaryCallToAction className="a-btn a-btn--medium">
              Subscribe
            </SecondaryCallToAction>
          </PricingItem>
          <PricingItem>
            <h3 className="a-text--large">Enterprise</h3>
            <p className="a-text--medium">
              More than 5 Million <br />
              validated events
            </p>
            <SecondaryCallToAction className="a-btn a-btn--medium">
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
    </Sections>
  </Container>
)
