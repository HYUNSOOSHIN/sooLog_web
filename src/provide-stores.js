import React from "react"
import { Provider } from "mobx-react"
import LoginStore from "./stores/LoginStore"

export default ({ element }) => {
  return <Provider login={new LoginStore()}>{element}</Provider>
}
