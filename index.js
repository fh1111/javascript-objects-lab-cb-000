var recipes = {}

function updateObjectWithKeyAndValue(object, key,value){
  object[key]=value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assing({}, object, {[key]: value})
}
