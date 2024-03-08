import usersServices from "#src/services/usersServices";

const exposeController = {
  allUsers: async (req, res) => {
    const allUsers = await usersServices.findAllUsers();
    return res.json(allUsers);
  },
  createUser: async (req, res) => {
    const { body } = req;
    try {
      const registeredUser = await usersServices.createUser(body);
      return res.json(registeredUser);
    } catch (error) {
      return res.sendStatus(400);
      // return res.json({error})
    }
  },
};

export default exposeController;
