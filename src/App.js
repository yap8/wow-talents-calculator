import { createGlobalStyle, ThemeProvider } from "styled-components"
import Calculator from "./components/Calculator"
import ClassList from "./components/ClassList"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #333;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ClassList />
      <Calculator />
    </ThemeProvider>
  )
}

export default App
