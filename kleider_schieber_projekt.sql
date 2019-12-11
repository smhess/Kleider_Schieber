-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 11. Dez 2019 um 22:45
-- Server-Version: 10.4.8-MariaDB
-- PHP-Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `kleider_schieber_projekt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `klamotten_damen`
--

CREATE TABLE `klamotten_damen` (
  `id` int(11) NOT NULL,
  `oberteil` tinyint(1) NOT NULL,
  `unterteil` tinyint(1) NOT NULL,
  `schuhe` tinyint(1) NOT NULL,
  `asse_tasche` tinyint(1) NOT NULL,
  `beschreibung` varchar(500) COLLATE utf8_bin NOT NULL,
  `bild` varchar(500) COLLATE utf8_bin NOT NULL,
  `preis` char(100) COLLATE utf8_bin NOT NULL,
  `id_user` int(11) NOT NULL,
  `size` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `klamotten_herren`
--

CREATE TABLE `klamotten_herren` (
  `id` int(11) NOT NULL,
  `oberteil` tinyint(1) NOT NULL,
  `unterteil` tinyint(1) NOT NULL,
  `schuhe` tinyint(1) NOT NULL,
  `asse_tasche` tinyint(1) NOT NULL,
  `beschreibung` varchar(500) COLLATE utf8_bin NOT NULL,
  `bild` varchar(500) COLLATE utf8_bin NOT NULL,
  `preis` char(100) COLLATE utf8_bin NOT NULL,
  `id_user` int(11) NOT NULL,
  `size` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `klamotten_kinder`
--

CREATE TABLE `klamotten_kinder` (
  `id` int(10) UNSIGNED NOT NULL,
  `oberteil` tinyint(1) NOT NULL,
  `unterteil` tinyint(1) NOT NULL,
  `schuhe` tinyint(1) NOT NULL,
  `asse_tasche` tinyint(1) NOT NULL,
  `beschreibung` varchar(500) COLLATE utf8_bin NOT NULL,
  `bild` varchar(500) COLLATE utf8_bin NOT NULL,
  `preis` char(100) COLLATE utf8_bin NOT NULL,
  `id_user` int(11) NOT NULL,
  `size` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `beschreibung` varchar(500) NOT NULL,
  `bild` varchar(500) NOT NULL,
  `wohnort` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `klamotten_damen`
--
ALTER TABLE `klamotten_damen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `klamotten_damen_ibfk_1` (`id_user`);

--
-- Indizes für die Tabelle `klamotten_herren`
--
ALTER TABLE `klamotten_herren`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indizes für die Tabelle `klamotten_kinder`
--
ALTER TABLE `klamotten_kinder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `klamotten_kinder_ibfk_1` (`id_user`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `klamotten_damen`
--
ALTER TABLE `klamotten_damen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `klamotten_herren`
--
ALTER TABLE `klamotten_herren`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `klamotten_kinder`
--
ALTER TABLE `klamotten_kinder`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `klamotten_damen`
--
ALTER TABLE `klamotten_damen`
  ADD CONSTRAINT `klamotten_damen_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints der Tabelle `klamotten_herren`
--
ALTER TABLE `klamotten_herren`
  ADD CONSTRAINT `klamotten_herren_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints der Tabelle `klamotten_kinder`
--
ALTER TABLE `klamotten_kinder`
  ADD CONSTRAINT `klamotten_kinder_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
