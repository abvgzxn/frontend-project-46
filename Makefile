install:
	npm install --legacy-peer-deps

test:
	npm test

test-watch:
	npm run test:watch

test-coverage:
	npm run test:coverage

lint:
	npm run lint

lint-fix:
	npm run lint:fix

ci:
	npm run ci

.PHONY: install test test-watch test-coverage lint lint-fix ci