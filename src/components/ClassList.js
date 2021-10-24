import styled from "styled-components"
import Tile from "./Tile"

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
          <Tile
            background={classItem.name.toLowerCase()}
            selected={classItem.id === currentClass}
            onClick={() => setCurrentClass(classItem.id)}
          />
        </ClassItem>
      ))}
    </Wrapper>
  )
}

export default ClassList
