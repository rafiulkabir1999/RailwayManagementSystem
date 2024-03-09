export const getuser = (req, res) => {
  const data = [
    {
      name: "Nahid Ul Kabir",
      email: "email@gamil.com",
      age: "25",
    },
    {
      name: "Ashef Arnob",
      email: "arnob@gamil.com",
      age: "25",
    },
    {
      name: "Sheik Abdul Munim",
      email: "munim@gamil.com",
      age: "22",
    },
  ];
  res.send({
    message: "get all user succesfully",
    data: data,
  });
};
export const adduser = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
