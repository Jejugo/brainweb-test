const makeOrder = ({ uuid }) => {
  return function order({ 
    id = uuid(), 
    dataCreated = Date.now(), 
    modifiedOn = Date.now(), 
    dough, 
    size, 
    filling 
  } = {}){
    if(!dough){
      throw new Error('Pizza must have a dough')
    }

    if(!size){
      throw new Error('Pizza must have a size')
    }

    return Object.freeze({
      getId: () => id,
      getDough: () => dough,
      getSize: () => size,
      getFilling: () => filling,
      getDataCreated: () => dataCreated,
      getModifiedOn: () => modifiedOn
    })
  }
}

module.exports = makeOrder