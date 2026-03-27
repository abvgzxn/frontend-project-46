# Вычислитель отличий

[![CI Pipeline](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml)
[![Test Coverage](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend_project_46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend_project_46)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend_project_46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend_project_46)

Утилита для сравнения двух конфигурационных файлов и вывода различий.

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

[JSON](https://asciinema.org/a/thVAhAj2BbHYoKyl)

[YAML](https://asciinema.org/a/fhJ644Yf1y50YWhK)

[Ссылка](https://asciinema.org/a/u372yBi7OzdQeHA1)

### Технологии 
— Commander.js — для CLI интерфейса

— Jest — для тестирования

— ESLint — для проверки кода

— SonarCloud — для анализа качества кода

— js-yaml — для парсинга YAML файлов