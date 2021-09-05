# Проект MESTO

## Описание:
### Адаптивная веб-страница с возможностью редактирования информации о пользователе, создание, удаление и оценка карточек, живая валидация форм.

## Стек 
### HTML, CSS, JavaScript, API, Git, Webpack, BEM, Figma.

## Функционал
- Редакторования информации о профиле через форму.
- Изменение аватара профиля.
- Добавление карточек с фото.
- Удаление и оценка карточек. 
Ссылка на страницу : https://yana-yanchenko.github.io/mesto/

## 💥 Обзор
- именование классов по БЭМ
- используется БЭМ-структура
- используется транспайлер Babel для поддержки современного JavaScript (ES6) в браузерах
- используется Webpack

## 🛠️ Установка
- установите NodeJS https://nodejs.org/en/download/
- скачайте сборку с помощью Git: git clone https://github.com/yana-yanchenko/mesto.git
- скачайте необходимые зависимости: npm install
- чтобы начать работу, введите команду: npm run dev (режим разработки)
- чтобы собрать проект, введите команду npm run build (режим сборки)

## 📂 Файловая структура
mesto
├── dist
├── src
│   ├── blocks
│   ├── components
│   ├── images
│   ├── pages
│   ├── vendor
│   ├── fonts
│   └── index.html
├── babel.config.js
├── .nojekyll
├── package-lock.json
├── package.json
├── postcss.config.js
├── webpack.config.js
└── .gitignore

#### Статус проекта: в разработке.
Планы по доработке: 
- Добавить спинер про подрузке сервера 
- Добавить авторизацию пользователей 
- Перенести CSS на SCSS
