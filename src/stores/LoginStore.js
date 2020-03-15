import { observable, action, decorate } from "mobx"

class LoginStore {
  isLogin = false

  setIsLogin(bool) {
    this.isLogin = bool
  }

  dehydrate() {
    return {
      isLogin: this.isLogin,
    }
  }
}

decorate(LoginStore, {
  isLogin: observable,
  setIsLogin: action,
})

export default LoginStore
