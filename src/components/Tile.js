import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.button`
  height: 44px;
  width: 44px;
  border: 0;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  &:hover {

  }
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
  position: absolute;
  padding: 4px;
  background-color: #333;
  border-radius: 4px;
  color: ${props => props.color};
  top: -25px;
  right: -25px;
`

const Tile = ({ active, max, selected, background, points, tooltip, onClick }) => {
  const [isTooltipActive, setIsTooltipActive] = useState(false)

  return (
    <Wrapper onClick={onClick} onMouseEnter={() => setIsTooltipActive(!isTooltipActive)} onMouseLeave={() => setIsTooltipActive(!isTooltipActive)}>
      <Background background={background} />
      <Border selected={selected} />
      <Highlight active={active} max={max} selected={selected} />
      <Points />
      {isTooltipActive && <Tooltip color={tooltip && tooltip.color}>{tooltip && tooltip.content}</Tooltip>}
    </Wrapper>
  )
}

export default Tile
