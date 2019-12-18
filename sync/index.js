const xlsx = require('node-xlsx').default
const fs = require('fs')
const path = require('path')
const directoryPath = path.join(__dirname, 'xlsx')
const dbPath = path.join(__dirname, '../')

async function getDB () {
  const rawdata = await fs.readFileSync(dbPath + '/db.json')
  const db = JSON.parse(rawdata)
  return db
}

async function getPickerConfig () {
  const rawdata = await fs.readFileSync(path.join(__dirname, 'picker.json'))
  const json = JSON.parse(rawdata)
  return json
}
async function xlsxToJson (file) {
  const sheet = await xlsx.parse(directoryPath + '/' + file, {
    raw: true,
    cellDates: 'd'
  })
  return sheet
}

async function parseRow (row) {
  console.log('ROW', row)
  return row[1]
    ? {
      id: row[2],
      funcionario: row[1],
      email: row[3],
      // situacao: row[4],
      area: row[4],
      diretoria: row[0]
    }
    : false
}

// ['TRAY','Wilson Roberto da Silva Junior',321,'WILSON.JUNIOR@TRAYCORP.COM.BR','TRAY CORP - COMERCIAL']

async function transformData (sheet) {
  const total = sheet[0].data.length
  const data = []
  for (var index = 2; index < total; index++) {
    const row = sheet[0].data[index]
    const parsed = await parseRow(row)
    console.log('PARSED', parsed)
    if (parsed) {
      data.push(parsed)
    }
  }
  return data
}

async function getFiles () {
  return new Promise(function (resolve, reject) {
    fs.readdir(directoryPath, function (err, filenames) {
      if (err) reject(err)
      else resolve(filenames)
    })
  })
}
async function process () {
  const db = await getDB()
  await getFiles().then(async files => {
    // console.log("Files", files);
    const total = files.length
    for (var index = 0; index < total; index++) {
      const file = files[index]
      const fileName = file.replace('.xlsx', '')
      const sheet = await xlsxToJson(file)
      const transform = await transformData(sheet)
      // console.log(`Process: ${fileName}`, transform.length);
      db[fileName] = transform
    }
    db.picker = await getPickerConfig()
    const json = JSON.stringify(db)
    await fs.writeFile(dbPath + '/db.json', json, 'utf8', () => {})
  })
}

process()
