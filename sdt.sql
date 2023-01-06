-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 06 2023 г., 23:09
-- Версия сервера: 5.5.62
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sdt`
--

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `name_news` varchar(255) NOT NULL,
  `date_news` varchar(255) NOT NULL,
  `discript_news` text NOT NULL,
  `news_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `name_news`, `date_news`, `discript_news`, `news_image`) VALUES
(1, 'Новость №1', '24.02.2022', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://galaktika-it.ru/wp-content/uploads/2020/10/novosti.jpg'),
(2, 'Новость №2', '24.02.2022', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://galaktika-it.ru/wp-content/uploads/2020/10/novosti.jpg'),
(3, 'Новость №3', '24.02.2022', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://galaktika-it.ru/wp-content/uploads/2020/10/novosti.jpg'),
(5, 'Новость №4', '24.02.2022', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://galaktika-it.ru/wp-content/uploads/2020/10/novosti.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `name_test` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `result` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `result`
--

INSERT INTO `result` (`id`, `name_test`, `name`, `result`, `status`, `data`) VALUES
(6, 'Тест №1', 'Alex', '[0,0,0,0,0]', 'Не прошел тест', '2023-01-06 23:07:04'),
(7, 'Тест №2', 'Alex', '[0,0,0,0,0]', 'Не прошел тест', '2023-01-06 23:07:16'),
(8, 'Тест №1', 'Alex', '[1,0,0,0,0]', 'Не прошел тест', '2023-01-06 23:07:30');

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name_test` varchar(255) NOT NULL,
  `quest` longtext NOT NULL,
  `answer` longtext NOT NULL,
  `verify_answer` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`id`, `name_test`, `quest`, `answer`, `verify_answer`) VALUES
(1, 'Тест №1', '[\"Вопросы№1\",\"Вопросы№2\",\"Вопросы№3\",\"Вопросы№4\",\"Вопросы№5\"]', '[[\"Ответы№1\",\"Ответы№2\",\"Ответы№3\"],[\"Ответы№1123\",\"Ответы№212\",\"Ответы№3123\"],[\"Ответы№1234\",\"Ответы№2345\",\"Ответы№356\"],[\"Ответы№167\",\"Ответы№243\",\"Ответы№33423\"],[\"Ответы№112334\",\"Ответы№2234\",\"Ответы№3123\"]]', '[\"Ответы№1\",\"Ответы№2\",\"Ответы№3\",\"Ответы№4\",\"Ответы№5\"]'),
(2, 'Тест №2', '[\"123123\",\"123123\",\"123123\",\"123123\",\"123123\"]', '[[\"Ответы№1\",\"Ответы№2\",\"Ответы№3\"],[\"Ответы№1123\",\"Ответы№212\",\"Ответы№3123\"],[\"Ответы№1234\",\"Ответы№2345\",\"Ответы№356\"],[\"Ответы№167\",\"Ответы№243\",\"Ответы№33423\"],[\"Ответы№112334\",\"Ответы№2234\",\"Ответы№3123\"]]', '[\"Ответы№1\",\"Ответы№2\",\"Ответы№3\",\"Ответы№4\",\"Ответы№5\"]');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `number`, `mail`, `password`) VALUES
(66, 'Alex', '+7999999', 'Alex@mail.ru', '123123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
