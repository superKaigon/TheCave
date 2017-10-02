export const selectSalle = (salle) => {
  return {
      type : 'SALLE_SELECTED',
      payload : salle
  }
}

export const selectTable = (table) => {
  return {
      type : 'TABLE_SELECTED',
      payload : table
  }
}
