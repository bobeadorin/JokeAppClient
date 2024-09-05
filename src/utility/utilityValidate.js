/* eslint-disable no-useless-escape */
export default class UtilityValidate {
  #containsUpperCase = (word) => {
    for (let char = 0; char < word.length; char++) {
      if (word[char] === word[char].toUpperCase()) {
        return true;
      }
    }
    return false;
  };

  #containsNumbers = (word) => {
    for (let char = 0; char < word.length; char++) {
      const element = word[char];
      if (!isNaN(element)) {
        return true;
      }
    }
    return false;
  };

  #containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~_]/;
    return specialChars.test(str);
  }

  static ValidateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
      return true;
    }
    return false;
  }

  static ValidateUsername(username) {
    if (username !== null && username.length > 5) return true;

    return false;
  }

  static ValidatePassword(password) {
    const validateInstance = new UtilityValidate();
    if (
      password.length >= 8 &&
      validateInstance.#containsUpperCase(password) &&
      validateInstance.#containsNumbers(password) &&
      validateInstance.#containsSpecialChars(password)
    ) {
      return true;
    }
    return false;
  }
}
