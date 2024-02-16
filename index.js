const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/frontend/index.html`));
});

app.use("/public", express.static(path.join(`${__dirname}/frontend/static`)));

app.get("/burgers", (req, res) => {
  res.sendFile(path.join(`${__dirname}/data/data.json`), (err) => {
    if (err) {
      console.log(err);

      res.send(err);
    } else {
      console.log("burgers data has been sent");
    }
  });
});

app.post("/burgers", (req, res) => {
  fs.readFile(`${__dirname}/data/orders.json`, "utf-8", (err, data) => {
    if (err) {
      console.log(err);

      res.send(err);
    } else {
      const orders = JSON.parse(data);

      const lastId = orders[orders.length - 1].id;

      const newOrder = req.body;
      newOrder.id = lastId + 1;

      orders.push(newOrder);

      fs.writeFile(
        `${__dirname}/data/orders.json`,
        JSON.stringify(orders, 0, 2),
        (err) => {
          if (err) {
            console.log(err);

            res.send(err);
          } else {
            console.log(`order created: ${newOrder.id}`);

            res.send(newOrder);
          }
        }
      );
    }
  });
});

app.get("/about", (req, res) => {
  res.json(
    `Burger Land was born from a shared <strong>love for burgers</strong> and a dream to create an online community for burger enthusiasts. In 2019, it started as a small online platform for sharing recipes and tips. As the community grew, so did the vision. In 2020, the <strong>Burger Land Marketplace</strong> launched, offering a variety of burger-related products. In 2021, the Burger Builder tool was introduced, allowing users to create custom burgers and order them from local joints. Today, Burger Land is a <strong>thriving community and marketplace</strong> for burger lovers. Join us and make every bite an adventure! 🍔🎉`
  );
});

app.post("/wish", (req, res) => {
  fs.readFile(`${__dirname}/data/orders.json`, "utf-8", (err, data) => {
    if (err) {
      console.log(err);

      res.send(err);
    } else {
      const orders = JSON.parse(data);

      const lastId = orders[orders.length - 1].id;

      const newOrder = req.body;
      newOrder.id = lastId + 1;

      orders.push(newOrder);

      fs.writeFile(
        `${__dirname}/data/orders.json`,
        JSON.stringify(orders, 0, 2),
        (err) => {
          if (err) {
            console.log(err);

            res.send(err);
          } else {
            console.log(`order created: ${newOrder.id}`);

            res.send(newOrder);
          }
        }
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
