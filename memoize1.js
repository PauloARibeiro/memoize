class Memoize {
  input = document.querySelector('input')
  suggestion = document.querySelector('[data="suggestion"]')
  list = [
    'cat',
    'dog',
    'dude',
    'corn',
    'hello',
    'guitar',
    'video',
    'headphones',
    'pencil'
  ]

  onChange(event) {
    const value = event.target.value

    if (this.list.includes(value)) {
      return this.updateSuggestions(this.getSuggestions(value))
    }

    this.updateSuggestions(['Getting results...'])

    setTimeout(() => {
      this.list.push(value)
      this.updateSuggestions(this.getSuggestions(value))
    }, 1000)
  }

  getSuggestions(value) {
    return this.list.filter(item => item.toLocaleLowerCase().includes(value))
  }

  updateSuggestions(value) {
    this.suggestion.innerHTML = ''

    return value
      .sort()
      .map(item => (this.suggestion.innerHTML += `<p>${item}</p>`))
  }
}

const memoize = new Memoize()
