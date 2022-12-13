-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 14 déc. 2022 à 00:34
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mdt`
--

-- --------------------------------------------------------

--
-- Structure de la table `report`
--

CREATE TABLE IF NOT EXISTS `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL,
  `last_modif` date DEFAULT NULL,
  `last_user` varchar(255) DEFAULT NULL,
  `statut` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `report`
--

INSERT INTO `report` (`id`, `title`, `content`, `created_at`, `user_id`, `last_modif`, `last_user`, `statut`) VALUES
(1, 'Rapport : 22/12/12', 'Donec sagittis metus vitae lectus bibendum, a imperdiet sapien laoreet. Phasellus convallis, elit at fermentum condimentum, leo quam mattis libero, nec vestibulum nibh tellus vitae eros. Duis vitae felis leo. Etiam ac placerat lacus, vitae rutrum metus. Aliquam erat volutpat. Curabitur quis imperdiet risus. Mauris vel volutpat sapien. Pellentesque nec neque eros. Aenean varius, nunc eu maximus convallis, quam justo venenatis nisi, scelerisque rhoncus metus velit tempor dolor. Mauris vestibulum magna turpis. ', '2022-12-12', 0, NULL, NULL, 1),
(2, 'Rapport 23/12/12', 'Donec vel luctus velit. Curabitur fermentum egestas ultrices. Ut maximus faucibus ipsum quis sagittis. Sed luctus, nibh et ultrices pulvinar, dui dui fermentum erat, vel maximus enim ipsum ut erat. Nullam placerat lectus nibh, in feugiat purus molestie ac. Fusce nec posuere metus. Fusce fermentum egestas hendrerit. Quisque ac nisl nibh. Vestibulum vitae ultrices purus. ', '2022-12-12', 0, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `grade` varchar(150) NOT NULL,
  `Token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `lastname`, `firstname`, `password`, `username`, `grade`, `Token`) VALUES
(3, 'Admin', 'Admin', 'Admin', 'Admin', 'Commandant/(e)', 'cbgb7euxb4948wmul2aap'),
(10, 'Bishop', 'Johnson', '**JBishop**', 'JBishop', 'Capitaine', ''),
(11, 'rezareza', 'rezare', '5d793fc5b00a2348c3fb9ab59e5ca98a', 'rezareza', 'Capitaine', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
