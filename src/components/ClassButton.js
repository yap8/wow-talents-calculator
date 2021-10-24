import styled from 'styled-components'

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

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 36px;
  width: 36px;
  background-image: ${props => `url(images/classes/${props.icon}.jpg)`};
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
  &:hover {
    background-image: ${props => props.selected ? 'none' : 'url(images/tiles/highlight.png)'};
  }
`

const ClassButton = ({ icon, selected }) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      <Border selected={selected} />
      <Highlight selected={selected} />
    </Wrapper>
  )
}

export default ClassButton
