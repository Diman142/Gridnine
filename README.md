# Описание

Тестовое задание для компании Gridnine Systems
Приложения представляет собой результаты поиска авиабилетов, к результатам поиска реализована возможность применять различного рода фильтры. 
Фильтры можно применять как комбинированно так и по отдельности

Функционал фильтрации реализован в полном объеме в соответствии с требованиями ТЗ.

Фасетная фильтрация реализована для фильра по названию авиакомпаний.

Используемый стэк технологий: React, Redux, json-server, axios, bootstrap, react-redux, redux-thunk, firebase.

# Старт приложения 

## В обычном режиме

Для удобства проверки приложение загружено на хостинг и доступно по ссылке 
https://gridnine-2e3e2.web.app/

База из mock файла без изменений скопирована в удаленную базу данных приложения.

## В режиме разработки

Если требуется запустить приложение локально требуется выполнить следующие команды

В терминале:

1) npm install,
2) Если требуется запустить локально базу данных с использование mock файла flights.json требуется использовать json-server и выполнить комнду json-server --watch flights.json
3) npm start
4) Для того чтобы приложение заработало требуется исправить путь в файле action.js строку const response = await axios.get('https://gridnine-2e3e2-default-rtdb.firebaseio.com/result.json') на  const response = await axios.get('http://localhost:3000/result')

На компьюетере должна быть установлена среда node-js!

В случе если у вас macbook и приложение и сервер будут открываться на порту 3000 в таком случае после команды npm start требуется подтвердить открытие приложение на альтернативному порту (по умолчанию 3001) нажав клавишу "y" (англ) в терминале 




