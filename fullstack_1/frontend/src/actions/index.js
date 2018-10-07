

export const increment = id => ({
  type: 'INCREMENT',
  payload:id
})

export const randomIncrement = () => ({
  type: 'RANDOM_INCREMENT'
})