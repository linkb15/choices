import Choices from 'choices.js'

declare global {
  interface Window {
    timeInput: any
  }
}

const getLabel = (hh: number, mm: string | number) => {
  return (
    ('0' + (hh === 0 || hh === 12 ? 12 : hh % 12)).slice(-2) +
    ':' +
    ('0' + mm).slice(-2) +
    ' ' +
    (hh >= 12 ? 'PM' : 'AM')
  )
}

const generateHoursInterval = (
  startHourInMinute: number,
  endHourInMinute: number,
  interval: number
) => {
  const times = []

  for (let i = 0; startHourInMinute < 24 * 60; i++) {
    if (startHourInMinute > endHourInMinute) break

    const hh = Math.floor(startHourInMinute / 60) // getting hours of day in 0-24 format

    const mm = startHourInMinute % 60 // getting minutes of the hour in 0-55 format

    const currentDate = new Date()

    const defaultSelected =
      hh === currentDate.getHours() &&
      ((mm === 0 && currentDate.getMinutes() < 30) ||
        (mm === 30 && currentDate.getMinutes() >= 30))

    if (defaultSelected) {
      window.timeInput = {
        hour: hh,
        minute: mm,
      }
    }

    times[i] = {
      label: getLabel(hh, mm),
      value: {
        hour: hh,
        minute: mm,
      },

      disabled: false,

      selected: defaultSelected,
    }

    startHourInMinute = startHourInMinute + interval
  }

  return times
}

export const checkIntervalDateContainer = () => {
  let dateContainerInterval: number | undefined

  dateContainerInterval = setInterval(() => {
    const dateContainer = document.getElementsByClassName('date-container')

    if (dateContainer.length === 0) {
      return
    } else {
      clearInterval(dateContainerInterval)
    }

    for (let dateElem of dateContainer) {
      const element = document.createElement('select')
      element.classList.add('choices__inner')
      dateElem.insertAdjacentElement('afterend', element)

      const interval = 30 //minutes interval

      const startDate = 60 * 9 // start time in minutes

      const endDate = 60 * 16.5 // end time in minutes

      new Choices(element, {
        choices: generateHoursInterval(startDate, endDate, interval),
        searchEnabled: false,
        shouldSort: false,
      })

      element.addEventListener(
        'change',
        function (event: any) {
          window.timeInput = event.detail.value
        },
        false
      )
    }

    console.log('running - date container')
  }, 300)
}
