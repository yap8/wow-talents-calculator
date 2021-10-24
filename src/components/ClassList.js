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

const getClassColor = (className) => {
  switch (className) {
    case 'Druid':
      return '#FF7C0A'
    case 'Hunter':
      return '#AAD372'
    case 'Mage':
      return '#3FC7EB'
    case 'Paladin':
      return '#F48CBA'
    case 'Priest':
      return '#FFFFFF'
    case 'Rogue':
      return '#FFF468'
    case 'Shaman':
      return '#0070DD'
    case 'Warlock':
      return '#8788EE'
    case 'Warrior':
      return '#C69B6D'
    default:
      return '#fff'
  }
}

const ClassList = ({ classes, currentClass, setCurrentClass }) => {
  return (
    <Wrapper>
      {classes.map(classItem => (
        <ClassItem key={classItem.id}>
          <Tile
            background={classItem.name.toLowerCase()}
            selected={classItem.id === currentClass}
            tooltip={{ content: classItem.name, color: getClassColor(classItem.name)}}
            onClick={() => setCurrentClass(classItem.id)}
          />
        </ClassItem>
      ))}
    </Wrapper>
  )
}

export default ClassList
