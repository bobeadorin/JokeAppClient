import UtilityValidate from "./utilityValidate";

export default class Validate {
  static ValidateAccount(username, password) {
    if (
      UtilityValidate.ValidateUsername(username) &&
      UtilityValidate.ValidatePassword(password)
    )
      return true;
    return false;
  }
}
