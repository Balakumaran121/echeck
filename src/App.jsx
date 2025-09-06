import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"
import { Provider } from "react-redux"
import { store } from "./redux/Store"

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
     <AppRouter/>
    </Provider>
    </BrowserRouter>
  )
}

export default App
