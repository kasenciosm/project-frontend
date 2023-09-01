const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const express = require("express");
const cors = require ("cors")

express.use(cors())

const app = express();
admin.initializeApp({
  credential: admin.credential.cert("./asmati-food-credentials.json"),
  databaseURL: "https://asmati-food-default-rtdb.firebaseio.com",
});

const db = admin.firestore();

app.post("/api/productos", async (req, res) => {
  try {
    await db.collection("productos")
        .doc("/" + req.body.id + "/")
        .create(
            {name: req.body.name,
              price: req.body.price,
              weigth: req.body.weigth});
    return res.json();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.get("/api/productos/:id", (req, res) =>{
  (async () => {
    try {
      const doc = db.collection("productos").doc(req.params.id);
      const item = await doc.get();
      const response = item.data();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.delete("/api/productos/:id", async (req, res) => {
  try {
    const document = db.collection("productos").doc(req.params.id);
    await document.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

app.get("/api/productos", async (req, res) => {
  try {
    const query = db.collection("productos");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const response = docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      price: doc.data().price,
      weigth: doc.data().weigth,
    }));
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json();
  }
});

app.put("/api/productos/:id", async (req, res) => {
  try {
    const document = db.collection("productos"). doc(req.params.id);
    document.update({
      name: req.body.name,
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

exports.app = onRequest(app);