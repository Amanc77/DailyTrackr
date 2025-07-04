import express from "express";
import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const fileName = "./files";

  fs.readdir(fileName, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      res.status(500).send("Error reading directory");
    } else {
      res.render("index", { files: files });
    }
  });
});

app.get("/view/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("viewData", { content: data, fileName: fileName });
    }
  });
});

app.get("/createTodaysRecord", (req, res) => {
  const fileName = currentDateTime() + ".txt";
  fs.writeFile(`./files/${fileName}`, "Today's record", (err) => {
    if (err) {
      console.error("Error creating today's record:", err);
      res.status(500).send("Error creating today's record");
    } else {
      console.log(`Today's record created: ${fileName}`);
      res.redirect("/");
    }
  });
});
app.get("/edit/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("editFile", { content: data, fileName: fileName });
    }
  });
});

app.post("/update/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const content = String(req.body.content);
  fs.writeFile(`./files/${fileName}`, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Error writing file");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/create", (req, res) => {
  res.render("createFile");
});

app.post("/create", (req, res) => {
  const fileName = req.body.fileName;
  const content = req.body.content || "";
  fs.writeFile(`./files/${fileName}`, content, "utf8", (err) => {
    if (err) {
      console.error("Error creating file:", err);
      res.status(500).send("Error creating file");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.unlink(`./files/${fileName}`, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      res.status(500).send("Error deleting file");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function currentDateTime() {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so +1
  const yyyy = now.getFullYear();

  let hh = now.getHours();
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0"); // Added seconds
  const ampm = hh >= 12 ? "PM" : "AM";

  hh = hh % 12;
  hh = hh ? hh : 12; // 0 becomes 12
  hh = String(hh).padStart(2, "0");

  return `${dd}-${mm}-${yyyy}_${hh}-${min}-${ss}-${ampm}`;
}
