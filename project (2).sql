-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8888
-- Generation Time: Dec 17, 2023 at 04:06 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `product_id` int(11) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `pageNumber` int(11) DEFAULT NULL,
  `yearOfPublication` int(11) DEFAULT NULL,
  `edition` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `club`
--

CREATE TABLE `club` (
  `CLUBID` int(11) NOT NULL,
  `CLUBNAME` varchar(20) NOT NULL,
  `CLUBPHOTO` varchar(30) NOT NULL,
  `BIO` text NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`CLUBID`, `CLUBNAME`, `CLUBPHOTO`, `BIO`, `USERNAME`, `PASSWORD`) VALUES
(1, 'Gunkoy', 'Yok', 'Selam dostlar, köylere ve köylülere yardım', 'gunkoy', 'gunkoy123'),
(2, 'Tiyatro', 'Yok', 'Othello oynıcak zenci aranıyor', 'othello', 'desdemona');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `CLUBNAME` varchar(20) NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`CLUBNAME`, `DESCRIPTION`, `ID`) VALUES
('Gunkoy Spor Kulubu', 'T Binası bagıs getirin sikerim', 1),
('Tiyatro Kulubu', 'Othello izlemek için minder getirin amk', 2),
('Yelken Kulubu', 'Uygar Arasın ta amk', 3),
('Film Kulubu', 'DVD getirin', 4),
('Kanye yeni albüm', 'Müzik kulübü', 5),
('gvbyhb', '56789', 6),
('serra', 'hi', 7);

-- --------------------------------------------------------

--
-- Table structure for table `electronics`
--

CREATE TABLE `electronics` (
  `product_id` int(11) NOT NULL,
  `related_course` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `itemId` int(11) NOT NULL,
  `itemName` varchar(20) NOT NULL,
  `itemPlace` text NOT NULL,
  `itemDescription` text NOT NULL,
  `lostOrFound` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`itemId`, `itemName`, `itemPlace`, `itemDescription`, `lostOrFound`) VALUES
(1, 'kolye', 'A binasi', 'kalp kolyesi', 0),
(2, 'kolye', 'A binasi', 'kalp kolyesi', 0);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `message_text` text NOT NULL,
  `created_datetime` datetime NOT NULL,
  `message_from` varchar(20) NOT NULL,
  `message_to` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `message_text`, `created_datetime`, `message_from`, `message_to`) VALUES
(1, 'selam', '2023-12-16 23:27:32', 'serra', 'zeynep'),
(2, 'se', '2023-12-16 23:27:32', 'can', 'burak'),
(3, 'hi', '2023-12-17 09:05:06', 'me', 'you'),
(4, 'hi', '2023-12-17 09:09:37', 'me', 'you'),
(5, 'hi', '2023-12-17 09:11:03', 'me', 'you'),
(6, 'pls work', '2023-12-17 09:31:14', 'you', 'me');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `seller_id` int(11) DEFAULT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `conditionOfProduct` int(2) NOT NULL,
  `isNegotiable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `seller_id`, `photo`, `conditionOfProduct`, `isNegotiable`) VALUES
(1, 'kitap', '100.00', 'kuyucakli yusuf', 22101234, 'photo', 10, 1),
(2, 'suc ve ceza', '200.00', 'suc ve ceza kitabi', 22100987, 'photo', 7, 0),
(3, 'kitap', '100.00', 'kuyucakli yusuf', 22101234, 'photo', 10, 1),
(4, 'a', '1.00', 'help me', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 0, 0),
(5, 'a', '1.00', 'gkgbkgb', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 0, 1),
(6, 'ahahahhaah', '3.00', 'yuyuyuy', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 0, 1),
(7, 'seker port', '167.00', 'cok guzel tren carpiyor', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rentitems`
--

CREATE TABLE `rentitems` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `sellerId` int(11) NOT NULL,
  `photo` varchar(20) NOT NULL,
  `conditionOfProduct` int(11) NOT NULL,
  `isNegotiable` tinyint(1) NOT NULL,
  `rentDay` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rentitems`
--

INSERT INTO `rentitems` (`id`, `name`, `price`, `description`, `sellerId`, `photo`, `conditionOfProduct`, `isNegotiable`, `rentDay`) VALUES
(1, 'basys', 2000, 'cs223-224', 22101234, 'photo', 7, 1, 30),
(2, '', 0, '', 0, '', 0, 0, 20),
(3, '', 0, '', 0, '', 0, 0, 30),
(4, 'kolye', 24, 'bfskdfls', 1426, 'ndvkd', 4, 1, 56);

-- --------------------------------------------------------

--
-- Table structure for table `sercap`
--

CREATE TABLE `sercap` (
  `ID` int(10) NOT NULL,
  `ORDER_NUMBER` varchar(20) NOT NULL,
  `PRODUCT_NAME` text NOT NULL,
  `PRICE` decimal(10,0) NOT NULL,
  `QTY` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sercap`
--

INSERT INTO `sercap` (`ID`, `ORDER_NUMBER`, `PRODUCT_NAME`, `PRICE`, `QTY`) VALUES
(1, 'a-228', 'Easy diet pills', '950', 1),
(3, '3', 'Personality transplant ', '9400', 12),
(4, 'b-002', 'Risk-free muscle steroid builder', '1999', 1),
(5, 'c-777', 'Liquid luck', '2900', 1),
(6, 't-1111', 'One absolutely perfect day', '4200', 1),
(7, 'h-412', 'Hindsight vision from tomorrow', '400', 4),
(8, 'g-555', 'Persuasive Charm', '300', 4),
(9, 'w-010', 'Instant college degree', '6000', 2),
(10, 'v-622', 'Five magic beans', '50', 2),
(11, 's-009', 'One million likes', '660', 2),
(12, 'a-522', 'Regret remover', '100', 1),
(13, '022', 'Orbit the moon with SpaceX twice!', '25000000', 1),
(14, '022', 'Orbit the moon with SpaceX twice!', '25000000', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`CLUBID`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `electronics`
--
ALTER TABLE `electronics`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`itemId`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rentitems`
--
ALTER TABLE `rentitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sercap`
--
ALTER TABLE `sercap`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club`
--
ALTER TABLE `club`
  MODIFY `CLUBID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `itemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `rentitems`
--
ALTER TABLE `rentitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sercap`
--
ALTER TABLE `sercap`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `electronics`
--
ALTER TABLE `electronics`
  ADD CONSTRAINT `electronics_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
