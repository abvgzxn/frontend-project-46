import _ from 'lodash'

const stringify = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]'
  }
  if (_.isString(value)) {
    return `'${value}'`
  }
  return String(value)
}

const plain = (ast, parentPath = '') => {
  const lines = ast.flatMap((node) => {
    const fullPath = parentPath ? `${parentPath}.${node.key}` : node.key

    switch (node.type) {
      case 'added':
        return `Property '${fullPath}' was added with value: ${stringify(node.value)}`
      case 'removed':
        return `Property '${fullPath}' was removed`
      case 'changed':
        return `Property '${fullPath}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`
      case 'nested':
        return plain(node.children, fullPath)
      case 'unchanged':
        return []
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return lines.join('\n')
}

export default plain
