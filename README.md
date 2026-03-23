cat > README.md << 'EOF'
# Вычислитель отличий

[![CI Pipeline](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/abvgzxn/frontend-project-46/actions/workflows/ci.yml)
[![Test Coverage](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend-project-46)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=abvgzxn_frontend-project-46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=abvgzxn_frontend-project-46)

Утилита для сравнения двух конфигурационных файлов и вывода различий.

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
### Разработка
```
make install       # Установка зависимостей
make lint          # Проверка кода линтером
make test          # Запуск тестов
make test-coverage # Запуск тестов с покрытием
make ci            # Запуск всех проверок
```

[Link](https://asciinema.org/a/thVAhAj2BbHYoKyl)