import UtilityValidate from "./utilityValidate";

export default class Validate {
  static ValidateAccount(email, password) {
    if (
      UtilityValidate.ValidateEmail(email) &&
      UtilityValidate.ValidatePassword(password)
    )
      return true;
    return false;
  }
}
