import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

const Logo = () => {
  return (
    <Wrapper>
      <img src="wow-classic-logo.png" alt="wow classic logo" />
    </Wrapper>
  )
}

export default Logo
