const fs = require('fs');

let users = require('/data/users.json');

const create = (user) => {
  users.push(user);
  saveData(users);
}

const update = (params) => {
  const user = users.find((user) => user.id === params.id )
  Object.assign(user, params);
  saveData(users);
}

const _delete = async (id) => {
  const newUsers = users.filter((user) => user.id !== id )
  saveData(newUsers);
}

const saveData = (data) => {
  fs.writeFileSync('data/users.json', JSON.stringify(data, null, 4));
}

const handler = async(req, res) => {
  if (req.method === 'POST') {
    const user = req.body;
    create(user);
    res.json({done: "json added"});
  } else if (req.method === 'DELETE') {
    const id = req.body.id;
    _delete(id);
    res.json({done: "json deleted"});
  } else if (req.method === 'PUT') {
    const params = req.body;
    update(params)
    res.json({done: "json updated"});
  }
};

export default handler;