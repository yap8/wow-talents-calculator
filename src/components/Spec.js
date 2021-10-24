import styled from "styled-components"
import Talents from "./Talents"

const Wrapper = styled.li`
  width: 33.333%;

`

const Title = styled.h3`
  text-align: center;
  color: #fff;
`

const Spec = ({ title, points }) => {
  return (
    <Wrapper>
      <Title>{title} ({points})</Title>
      <Talents />
    </Wrapper>
  )
}

export default Spec
