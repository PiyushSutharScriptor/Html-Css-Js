const dateTimeRegex = /\b(\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2}:\d{2})\b/g;

const testStrings = [
  "Today's date is 06/12/2024 and the time is 14:30:45.",
  "The event will take place on 07/04/2024 at 18:00:00.",
  "Meeting scheduled for 12/31/2023 23:59:59.",
  "Invalid format: 2024-06-12 14:30:45.",
  "Another invalid format: 12/06/24 14:30:45.",
];

testStrings.forEach(str => {
  const matches = str.match(dateTimeRegex);
  if (matches) {
    console.log(`Date and Time found in "${str}":`);
    matches.forEach(match => console.log(match));
  } else {
    console.log(`No Date and Time found in "${str}".`);
  }
});
  