# Вычислитель отличий

[![CI Pipeline](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml)
[![Test Coverage](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend_project_46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend_project_46)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend_project_46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend_project_46)

Утилита для сравнения двух конфигурационных файлов (JSON или YAML) с поддержкой вложенных структур.

## Установка

```bash
git clone https://github.com/abvgzxn/frontend-project-46.git
cd frontend-project-46
npm install
npm link
```

### Сравнение JSON файлов
```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```
### Сравнение YAML файлов
```
gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```
### Сравнение с выводом в стиле stylish (по умолчанию)
```
gendiff __fixtures__/file1-nested.json __fixtures__/file2-nested.json
```
### Сравнение с выводом в формате plain
```
gendiff -f plain __fixtures__/file1-nested.json __fixtures__/file2-nested.json
```
### Сравнение с выводом в формате json
```
gendiff -f json __fixtures__/file1-nested.json __fixtures__/file2-nested.json
```

## Форматеры вывода

| Форматер | Описание | Пример |
|----------|----------|--------|
| `stylish` | Древовидный вывод с отступами | [Демо](https://asciinema.org/a/wIYxJDXf9RByHN81) |
| `plain` | Плоский вывод в виде текстовых описаний | [Демо](https://asciinema.org/a/MpqKDUrWNNxddZG0) |
| `json` | 	Вывод в формате JSON | [Демо](https://asciinema.org/a/9pNepA4ZcbFkXHPJ0) |


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

### Пример вывода в формате plain
```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```

### Пример вывода json
```
[
  {
    "key": "common",
    "type": "nested",
    "children": [
      {
        "key": "follow",
        "type": "added",
        "value": false
      },
      {
        "key": "setting2",
        "type": "removed",
        "value": 200
      }
    ]
  }
]
```

### Поддерживаемые форматы
— JSON — файлы с расширением .json

— YAML — файлы с расширением .yml или .yaml

### Разработка
```
make install       # Установка зависимостей
make lint          # Проверка кода линтером
make test          # Запуск тестов
make test-coverage # Запуск тестов с покрытием
make ci            # Запуск всех проверок
```

### Демонстрация

[JSON файлы](https://asciinema.org/a/thVAhAj2BbHYoKyl)

[YAML файлы](https://asciinema.org/a/fhJ644Yf1y50YWhK)

[Вложенные структуры](https://asciinema.org/a/u372yBi7OzdQeHA1)

[Stylish формат](https://asciinema.org/a/wIYxJDXf9RByHN81)

[Plain формат](https://asciinema.org/a/MpqKDUrWNNxddZG0)

[JSON формат](https://asciinema.org/a/9pNepA4ZcbFkXHPJ0)


### Технологии 
— Commander.js — для CLI интерфейса

— Jest — для тестирования

— ESLint — для проверки кода

— SonarCloud — для анализа качества кода

— js-yaml — для парсинга YAML файлов

— Lodash — вспомогательные функции