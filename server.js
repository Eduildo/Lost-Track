const express = require("express");
const sequelize = require("./config/db");
require("./models");

const app = express();

//Middlware
app.use(express.json());

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/items", require("./routes/item.routes"));
app.use("/api/notifications", require("./routes/notification.routes"));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de dados ligada com sucesso");

    app.listen(3000, () => {
      console.log("Servidor a funcionar na porta 3000");
    });
  } catch (error) {
    console.log("Erro ao ligar à base de dados", error);
  }
};

startServer();
