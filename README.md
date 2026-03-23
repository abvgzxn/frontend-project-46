# Frontend Project 46

[![CI Status](https://github.com/your-username/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml)
[![Test Coverage](https://codecov.io/gh/your-username/frontend-project-46/branch/main/graph/badge.svg)](https://codecov.io/gh/abvgzxn/frontend-project-46)

# Вычислитель отличий

Утилита для сравнения двух JSON-файлов и вывода различий.

## Установка

```bash
git clone <repository-url>
cd frontend-project-46
npm install
npm link
```

## Использование:
gendiff __fixtures__/file1.json __fixtures__/file2.json

### Пример вывода:
```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

[Link](https://asciinema.org/a/thVAhAj2BbHYoKyl)