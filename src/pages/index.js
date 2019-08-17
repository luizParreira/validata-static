import "../../static/reset.css"
import "@magnetis/astro"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  background-color: transparent;
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

const Hero = styled.div`
  display: flex;
  padding-top: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Highlight = styled.span`
  background: var(--gradient-hoag);
  -webkit-background-clip: text;
  color: transparent;
`

const CallToAction = styled.button`
  &:hover {
    background-color: var(--color-sun-500);
    border-color: var(--color-sun-300);
  }
`

export default () => (
  <Container>
    <Nav>
      <LogoLink className="a-btn a-btn--medium">Validata</LogoLink>
      <NavLink href="#how-it-works" className="a-btn a-btn--medium">
        How it Works
      </NavLink>
      <NavLink className="a-btn a-btn--medium">Pricing</NavLink>
      <NavLink className="a-btn a-btn--medium">Who are we?</NavLink>
      <Register className="a-btn a-btn--small">Register</Register>
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
    </Sections>
  </Container>
)
