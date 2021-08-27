export default class UserInfo {
  constructor(name, occupation, avatar){
    this._name = name;
    this._occupation = occupation;
    this._avatar = avatar
  }
  getUserInfo(){
    const userInfo = {}
    userInfo.name = this._name.textContent;
    userInfo.occupation = this._occupation.textContent;
    userInfo.avatar = this._avatar.src
    return userInfo;
  }
  setUserInfo(info){
    this._name.textContent = info.name;
    this._occupation.textContent = info.about;
    this._avatar.src = info.avatar
  }
}