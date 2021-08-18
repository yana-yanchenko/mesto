export default class UserInfo {
  constructor(name, occupation){
    this._name = name;
    this._occupation = occupation;
  }
  getUserInfo(){
    const userInfo = {}
    userInfo.name = this._name.textContent;
    userInfo.occupation = this._occupation.textContent;
    return userInfo;
  }
  setUserInfo(info){
    this._name.textContent = info.name;
    this._occupation.textContent = info.occupation;
  }
}