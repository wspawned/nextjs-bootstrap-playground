const fs = require('fs');

let users = require('/data/users.json');

const create = (user) => {
  users.push(user);
  saveData();
}

const _delete = async (id) => {
  console.log(users);
  const deletedUsers = users.filter((user) => user.id !== id )
  fs.writeFileSync('data/users.json', JSON.stringify(deletedUsers, null, 4));
}

const saveData = () => {
  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}

const handler = async(req, res) => {
  if (req.method === 'POST') {
    const user = req.body;
    console.log(user)
    create(user);
    res.json({done: "json added"});
  } else if (req.method === 'DELETE') {
    console.log("deleteeeeeeeeeeeeee")
    const id = req
    console.log(id)
  //   _delete(id);
  //   res.json({done: "json deleted"});
  }
};

export default handler;