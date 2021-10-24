import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Tree from "./components/Tree"
import ClassList from "./components/ClassList"
import { useEffect, useState } from 'react'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #333;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`

const theme = {
  
}

const Wrapper = styled.div`
  background-color: #111;
  width: 750px;
  height: 450px;
  margin: 0 auto;
`

const App = () => {
  const [classes, setClasses] = useState([])
  const [currentClass, setCurrentClass] = useState(0)

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch('data.json')
      const data = await res.json()

      console.log(data.classes[currentClass])

      setClasses(data.classes)
    }

    fetchClasses()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ClassList
          classes={classes}
          currentClass={currentClass}
          setCurrentClass={setCurrentClass}
        />
        <Tree talentTrees={classes.talentTrees} currentClass={currentClass} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
