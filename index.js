function happyHolidays () {
    return 'Happy Holiday!';
}

function happyHolidaysTo ('name') {
  return 'Happy Holidays, ${name}';
}

function happyHolidaysTo ('name', 'holiday') {
  return 'Happy $(holiday), $(name)';
}

function holidayCountdown ('name', 'holiday') {
  return 'It\'s  $(days) days until $(holiday)!';
}
