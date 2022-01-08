function checkSpam(str) {
  let checkString = str.toLowerCase();

  return checkString.includes('1xbet') || checkString.includes('xxxxx');
}

checkSpam('1XbeT now')
checkSpam('free xxxxx')
checkSpam('innocent rabbit')
