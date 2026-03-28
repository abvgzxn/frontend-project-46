import _ from 'lodash'

const indent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2)

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value)
  }

  const entries = Object.entries(value)
  if (entries.length === 0) {
    return '{}'
  }

  const lines = entries.map(([key, val]) => {
    const formattedValue = _.isObject(val) ? stringify(val, depth + 1) : val
    return `${indent(depth + 1)}  ${key}: ${formattedValue}`
  })

  return `{\n${lines.join('\n')}\n${indent(depth)}  }`
}

const stylish = (ast, depth = 1) => {
  const lines = ast.map((node) => {
    const currentIndent = indent(depth)

    switch (node.type) {
      case 'nested':
        if (node.children.length === 0) {
          return `${currentIndent}  ${node.key}: {}`
        }
        return `${currentIndent}  ${node.key}: {\n${
          stylish(node.children, depth + 1)
        }\n${currentIndent}  }`
      case 'added':
        return `${currentIndent}+ ${node.key}: ${stringify(node.value, depth)}`
      case 'removed':
        return `${currentIndent}- ${node.key}: ${stringify(node.value, depth)}`
      case 'changed':
        return `${currentIndent}- ${node.key}: ${
          stringify(node.oldValue, depth)
        }\n${currentIndent}+ ${node.key}: ${stringify(node.newValue, depth)}`
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${stringify(node.value, depth)}`
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return lines.join('\n')
}

export default ast => {
  if (ast.length === 0) {
    return '{}'
  }
  return `{\n${stylish(ast)}\n}`
}
