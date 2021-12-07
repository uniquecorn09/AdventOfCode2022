import fs from 'fs'


const readData = (filepath) => {
  let dataCollection = [];
  try {
      const data = fs.readFileSync(filepath, 'utf8')
      dataCollection =  data.split("\n")
      return dataCollection
    } catch (err) {
      console.error(err)
      return null
    }
}

export default readData