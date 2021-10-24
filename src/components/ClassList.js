import styled from "styled-components"
import ClassButton from "./ClassButton"

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
`

const ClassItem = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
`

const ClassList = () => {
  return (
    <Wrapper>
      <ClassItem>
        <ClassButton icon="druid" selected></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="hunter"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="mage"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="paladin"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="priest"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="rogue"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="shaman"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="warlock"></ClassButton>
      </ClassItem>
      <ClassItem>
        <ClassButton icon="warrior"></ClassButton>
      </ClassItem>
    </Wrapper>
  )
}

export default ClassList
