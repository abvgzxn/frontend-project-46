import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
}

export default filepath => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf-8')
  const extension = path.extname(filepath).slice(1).toLowerCase()

  const parse = parsers[extension]
  if (!parse) {
    throw new Error(`Unsupported file format: ${extension}`)
  }

  return parse(fileContent)
}
