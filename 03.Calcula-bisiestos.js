export function isLeapYear(year) {
    if (year > 0 && year % 4 == 0 && year % 100 != 0) {
      return true;
    }
    else if (year > 0 && year % 100 == 0 && year % 400 == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  