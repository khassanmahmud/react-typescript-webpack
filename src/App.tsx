import './styles.css'
import IMAGE from './facebook.jpeg'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  //const num = 0;
  const name = 'Hassan Mahmud'

  return (
    <>
      <h3>
        React, TypeScript and Webpack - {process.env.NODE_ENV} {name}
        {process.env.name}
      </h3>
      <img src={IMAGE} alt="Facebook logo" width="100" />
      <img src={LOGO} alt="React Logo" width="100" />
      <ClickCounter />
    </>
  )
}
