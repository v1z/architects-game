export type SpentTimeType = {
  minutes: number
  seconds: number
}

export const getTime = (secondsSpent: number): SpentTimeType => {
  return {
    minutes: Math.floor(secondsSpent / 60),
    seconds: secondsSpent % 60
  }
}

export type FormattedTimeType = {
  minutes: string
  seconds: string
}

export const getFormattedTime = (time: SpentTimeType): FormattedTimeType => {
  const {seconds: trimmedSeconds, minutes: trimmedMinutes} = time

  let seconds

  if (trimmedSeconds >= 0 && trimmedSeconds <= 9) {
    seconds = `0${trimmedSeconds}`
  } else {
    seconds = `${trimmedSeconds}`
  }

  let minutes

  if (trimmedMinutes >= 0 && trimmedMinutes <= 9) {
    minutes = `0${trimmedMinutes}`
  } else {
    minutes = `${trimmedMinutes}`
  }

  return {
    seconds,
    minutes
  }
}
