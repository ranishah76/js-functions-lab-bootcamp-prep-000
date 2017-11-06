function happyHolidays () {
  return 'Happy Holidays!'
}

function happyHolidaysTo (name) {
  return `Happy holidays, ${name}`
}

function happyHolidaysTo (name, holiday) {
  return `Happy ${holiday}, $(name)`
}

function holidayCountdown (name, holiday) {
  return `It\'s  $(days) days until $(holiday)!`
}
