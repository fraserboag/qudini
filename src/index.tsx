import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import { store } from './store.ts'
import Container from './components/Container.ts'
import Logo from './components/Logo.ts'
import Navigation from './components/Navigation.ts'
import QueueScreen from './Queue/QueueScreen.tsx'
import './index.css'
import logo from './qudini-logo.png'
import Content from './components/Content.ts'

const App = () => (
  <Provider store={store}>
    <Container>
      <Navigation>
        <Logo src={logo} />
      </Navigation>
      <Content>
        <QueueScreen />
      </Content>
    </Container>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
