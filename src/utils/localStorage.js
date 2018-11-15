function getItem(key) {
  const item = localStorage.getItem(key)
  try {
    return JSON.parse(item)
  } catch (e) {
    console.log(`Error retrieving ${key} from localStorage`, e)
  }
}

function setItem(key, data) {
  if (data === null || data === undefined) {
    console.log('You gave local storage nothing!')
    return
  }

  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log(`Error setting ${key} in localStorage`, e)
  }
}

function removeItem(key) {
  return localStorage.removeItem(key)
}

export { getItem, setItem, removeItem }
