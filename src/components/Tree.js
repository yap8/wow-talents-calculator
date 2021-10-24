import styled from "styled-components"
import Spec from "./Spec"

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`

const Tree = ({ talentTrees }) => {
  console.log(talentTrees)

  return (
    <Wrapper>
      <Spec title="Balance" points="0" />
      <Spec title="Feral" points="0" />
      <Spec title="Restoration" points="0" />
    </Wrapper>
  )
}

export default Tree
