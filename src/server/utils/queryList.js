const queryList = ({ name, lastName, email, privateNumber, birthDate }) => {
  const query = {
    name: { $regex: name },
    lastName: { $regex: lastName },
    email: { $regex: email },
    privateNumber: { $eq: privateNumber },
    birthDate: { $eq: birthDate },
  };
  const obj = {};
  for (let key in query) {
    if (query[key].$regex || query[key].$eq) {
      obj[key] = query[key];
    }
  }
  return obj;
};

module.exports = queryList;
