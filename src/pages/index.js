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
  &:hover {
    background-color: var(--color-sun-500);
    border-color: var(--color-sun-300);
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

export default () => (
  <Container>
    <Nav>
      <LogoLink className="a-btn a-btn--large">Validata</LogoLink>
      <NavLink href="#how-it-works" className="a-btn a-btn--large">
        How it Works
      </NavLink>
      <NavLink className="a-btn a-btn--large">Pricing</NavLink>
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
      <HowItWorks>
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

      <HowItWorks>
        <h2 className="a-title--large">Pricing</h2>
        <Steps></Steps>
      </HowItWorks>
    </Sections>
  </Container>
)
