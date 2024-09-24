import CustomThemeProvider from "./providers/CustomThemeProvider"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import LayOut from "./layout/LayOut"
import 'normalize.css'
import UserProvider from "./users/porviders/UserProvider"
import SnackbarProvider from "./providers/SnakBarProvider"
import { useEffect } from "react"




function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <LayOut>
                <Router />
              </LayOut>
            </UserProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
