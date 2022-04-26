import moment from 'moment'
import { useEffect, useRef } from 'react'

export const calculateTimeLeft = (target) => {
  let eventTime = moment(target).unix().toString()
  let currentTime = Math.floor(Date.now() / 1000).toString()
  let leftTime = eventTime - currentTime
  let duration = moment.duration(leftTime, 'seconds')
  let interval = 1000

  if (duration.asSeconds() <= 0) {
    clearInterval(interval)
    //window.location.reload(true); //#skip the cache and reload the page from the server
  }

  let days = Math.floor(leftTime / (60 * 60 * 24))
  duration = moment.duration(duration.asSeconds() - 1, 'seconds')

  return {
    days: days,
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }
}

export function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
