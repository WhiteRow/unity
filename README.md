# Unity ![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)
> Сервис для просмотра курса криптовалют и действий с ними.

## Установка
* Скачивание зависимостей 
```bash
npm install
```

## Разработка
* Хочу сделать новый функционал
```bash
git pull origin dev
```
```bash
git checkout -b feat.myNewFeature
```
```bash
npm start
```
<sub>*Адрес локального сервера `localhost:3030`</sub>
* Хочу сделать фикс
```bash
git pull origin dev
```
```bash
git checkout -b fix.myFix
```
* Хочу сделать прод сборку
```bash
npm run build
```

## Структура проекта

* `src/App.tsx`: Точка входа приложения
* `src/@types`: Интерфейсы и типы
* `src/components/`: Компоненты
* `src/components/shared/`: Общие компоненты
* `src/icons/`: Иконки (.svg)
* `src/icons/index.ts`: Точка входа иконок
* `src/images/`: Изображения
* `src/images/index.ts`: Точка входа изображений
* `src/pages/`: Компоненты страниц
* `src/styles/`: Стили

* `public/`: Публичные файлы не под вебпаком

* `config/`: Точки входа вебпака
* `config/modules`: Модули и правила для сборки

## Как мы работаем с git
Префикс коммитов(:) и веток(.):
* `build`: Сборка проекта или изменения внешних зависимостей
* `ci`: Работа с конфигами
* `docs`: Обновление документации
* `feat`: Добавление нового функционала
* `fix`: Исправление ошибок
* `perf`: Изменения направленные на улучшение производительности
* `refactor`: Правки кода без исправления ошибок или добавления новых функций
* `revert`: Откат на предыдущие коммиты
* `style`: Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)
* `test`: Добавление тестов

Заголовок мерджа
* `Merge branch 'fix.fix-home-page-filters-working'`

## Стек
 * React
 * Redux
 * Typescript
 * Webpack
