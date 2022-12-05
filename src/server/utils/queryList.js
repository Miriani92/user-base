const queryUserList = ({
  name,
  lastName,
  email,
  privateNumber,
  birthDate,
  category,
  status,
}) => {
  const query = {
    name: { $regex: name },
    lastName: { $regex: lastName },
    email: { $regex: email },
    privateNumber: { $eq: privateNumber },
    birthDate: { $eq: birthDate },
    category: { $regex: category },
    status: { $regex: status },
  };
  const queryData = {};
  for (let key in query) {
    if (query[key].$regex || query[key].$eq) {
      queryData[key] = query[key];
    }
  }
  return queryData;
};

const queryList = ({ name }) => {
  const queryData = {
    name: { $regex: name },
  };
  return queryData;
};

module.exports = { queryUserList, queryList };
