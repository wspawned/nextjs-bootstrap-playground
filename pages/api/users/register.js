const fs = require('fs');

let users = require('/data/users.json');

const create = (req, res) => {
  const {company, contact, country} = req.body;
  if (!company.length || !contact.length || !country.length) {
    res.status(400).json({ message: 'missing part in payload' });
    return;
  }
  const userId= Date.now();
  const user = {id: userId, company, contact, country}
  users.push(user);
  saveData(users);
  res.status(201).json({ message: 'user created' });
}

const update = (params) => {
  const user = users.find((user) => user.id === params.id )
  Object.assign(user, params);
  saveData(users);
  
}

const _delete = async (req, res) => {
  const {id} = req.body;
  if (!id) {
    res.status(400).json({ message: 'missing id in payload' });
    return;
  }
  const newUsers = users.filter((user) => user.id !== id )
    saveData(newUsers);
    res.status(200).json({ message: 'user deleted' }); 
}

const saveData = (data) => {
  fs.writeFileSync('data/users.json', JSON.stringify(data, null, 4));
}

const handler = async(req, res) => {
  if (req.method === 'POST') {
    create(req, res);
  } else if (req.method === 'DELETE') {
    _delete(req, res);
  } else if (req.method === 'PUT') {
    const params = req.body;
    update(params)
    res.json({done: "json updated"});
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;