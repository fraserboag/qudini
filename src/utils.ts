/*
Convert ISO date string to a more readable format and return
@param {string} date ISO formatted date string (e.g. new Date().toISOString())
@returns {string} Human readable time and date
*/
export function readableDateTime(date :string) :string {
  const d: Date = new Date(date);
  return `${d.toLocaleTimeString('en-GB').slice(0,-3)} on ${d.toLocaleDateString('en-GB')}`;
}
