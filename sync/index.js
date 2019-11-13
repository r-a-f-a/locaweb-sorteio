const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "xlsx");
const dbPath = path.join(__dirname, "../");

async function getDB() {
  let rawdata = await fs.readFileSync(dbPath + "/db.json");
  let db = JSON.parse(rawdata);
  return db;
}

async function xlsxToJson(file) {
  const sheet = await xlsx.parse(directoryPath + "/" + file, {
    raw: true,
    cellDates: "d"
  });
  return sheet;
}

async function parseRow(row) {
  return row[1]
    ? {
        id: row[1],
        funcionario: row[2],
        email: row[3],
        situacao: row[4],
        area: row[5],
        diretoria: row[6]
      }
    : false;
}
async function transformData(sheet) {
  let total = sheet[0].data.length;
  let data = [];
  for (var index = 1; index < total; index++) {
    let row = sheet[0].data[index];
    let parsed = await parseRow(row);
    if (parsed) {
      data.push(parsed);
    }
  }
  return data;
}

async function getFiles() {
  return new Promise(function(resolve, reject) {
    fs.readdir(directoryPath, function(err, filenames) {
      if (err) reject(err);
      else resolve(filenames);
    });
  });
}
async function process() {
  let db = await getDB();
  await getFiles().then(async files => {
    console.log("Files", files);
    let total = files.length;
    for (var index = 0; index < total; index++) {
      let file = files[index];
      let fileName = file.replace(".xlsx", "");
      let sheet = await xlsxToJson(file);
      let transform = await transformData(sheet);
      console.log(`Process: ${fileName}`, transform.length);
      db[fileName] = transform;
    }
    let json = JSON.stringify(db);
    await fs.writeFile(dbPath + "/db.json", json, "utf8", () => {});
  });
}

process();
