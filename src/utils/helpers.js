import uuidv4 from 'uuid/v4'

function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('')
}

function createQuestion() {
  return {
    id: uuidv4(),
    question: '',
    options: ['', '']
  }
}

export { capitalize, createQuestion }
