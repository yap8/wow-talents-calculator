import styled from "styled-components"

const Wrapper = styled.button`
  height: 44px;
  width: 44px;
  border: 0;
  background-color: transparent;
  position: relative;
  cursor: pointer;
`

const Border = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 44px;
  width: 44px;
  background-image: url(images/tiles/${props => props.selected ? 'selected' : 'default'}.png);
  background-repeat: no-repeat;
`

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 36px;
  width: 36px;
  background-image: ${props => `url(images/classes/${props.background}.jpg)`};
  background-size: contain;
  background-position: center;
`

const Highlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 38px;
  width: 38px;
  border-radius: 5px;
  border: 1px solid ${props => {
    const { active, max } = props

    if (active) return 'rgba(64,191,64,0.8)'
    if (max) return 'rgba(255,209,0,0.8)'

    return 'transparent'
  }};
  &:hover {
    background-image: ${props => props.selected ? 'none' : 'url(images/tiles/highlight.png)'};
  }
`

const Points = styled.div`

`

const Tooltip = styled.div`

`

const Tile = ({ active, max, selected, background, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Background background={background} />
      <Border selected={selected} />
      <Highlight active={active} max={max} selected={selected} />
      <Points />
      <Tooltip />
    </Wrapper>
  )
}

export default Tile
