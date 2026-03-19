### Hexlet tests and linter status:
[![Actions Status](https://github.com/abvgzxn/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/abvgzxn/frontend-project-46/actions)

# Вычислитель отличий

Утилита для сравнения двух JSON-файлов и вывода различий.

## Установка

```bash
git clone <repository-url>
cd frontend-project-46
npm install
npm link

Использование:
gendiff __fixtures__/file1.json __fixtures__/file2.json

Пример вывода:
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}


[Link](https://asciinema.org/a/thVAhAj2BbHYoKyl)