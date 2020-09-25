export default function timeFilter(value) {

  let seconds = value
  let minutes = 0
  let hours = 0

  if (value >= 60) {
    minutes = Math.floor(value / 60)
  }

  if (minutes >= 60) {
    hours = Math.floor(minutes / 60)
  }

  seconds = value - minutes * 60
  minutes = minutes - hours * 60

  let time = seconds

  if (minutes) time = `${minutes}:${seconds}`
  if (hours) time = `${hours}:${minutes}:${seconds}`

  return time
}