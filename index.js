class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    let arr = string.split(" ");
    let newArr = arr.map((e) => {
      if (e == "the" || e == "a" || e == "an" || e == "but" || e == "of" || e == "and" || e == "for" || e == "at" || e == "by" || e == "from") {
        e = e.toLowerCase();
      } else {
        e = e[0].toUpperCase() + e.slice(1);
      }
      return e;
    })
      let newString = newArr.join(" ");
      return this.capitalize(newString);
  }
}