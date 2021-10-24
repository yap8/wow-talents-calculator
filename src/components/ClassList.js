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

const ClassList = ({ classes, currentClass, setCurrentClass }) => {
  return (
    <Wrapper>
      {classes.map(classItem => (
        <ClassItem key={classItem.id}>
          <ClassButton
            name={classItem.name}
            id={classItem.id}
            selected={classItem.id === currentClass}
            setCurrentClass={setCurrentClass}
          ></ClassButton>
        </ClassItem>
      ))}
    </Wrapper>
  )
}

export default ClassList
