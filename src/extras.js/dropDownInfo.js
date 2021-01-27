// import {} from ''

export const months = [
    {
      key: 'jan',
      text: 'January',
      value: 'january'
    },
    {
      key: 'feb',
      text: 'February',
      value: 'february'
    },
    {
      key: 'mar',
      text: 'March',
      value: 'march'
    },
    {
      key: 'apr',
      text: 'April',
      value: 'april'
    },
    {
        key: 'may',
        text: 'May',
        value: 'may'
      },
      {
        key: 'jun',
        text: 'June',
        value: 'june'
      },
      {
        key: 'jul',
        text: 'July',
        value: 'july'
      },
      {
        key: 'aug',
        text: 'August',
        value: 'august'
      },
      {
        key: 'sep',
        text: 'September',
        value: 'september'
      },
      {
        key: 'oct',
        text: 'October',
        value: 'october'
      },
      {
        key: 'nov',
        text: 'November',
        value: 'november'
      },
      {
        key: 'dec',
        text: 'December',
        value: 'dec'
      }
  ]

  const arrangeYear = () => {
    const prop = []
    for (let i= 1950;  i <= 2020; i++) {
      prop.push({key: i, text: i, value: i})
    }
    return prop
}
export const year = arrangeYear()
  
  const arrangeDay = () => {
      const prop = []
      for (let i=1; i <= 30; i++) {
        prop.push({key: i, text: i, value: i})
      }
      return prop
  }
  export const day = arrangeDay()
