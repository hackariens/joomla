CREATE DATABASE IF NOT EXISTS `joomla_bdd`;
CREATE USER IF NOT EXISTS 'joomla'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `joomla_bdd`.* TO 'joomla'@'%';