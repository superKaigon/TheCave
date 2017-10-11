export const selectSalle = (salle) => {
  return {
    type: 'SALLE_SELECTED',
    payload: salle
  }
}

export const selectTable = (table) => {
  return {
    type: 'TABLE_SELECTED',
    payload: table
  }
}

export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}

export const selectAllTables = (tables) => {
  return {
    type: 'ALL_TABLES_SELECTED',
    payload: table
  }
}



