-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8888
-- Generation Time: Dec 18, 2023 at 04:01 PM
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
  `CLUBPHOTO` varchar(250) NOT NULL,
  `BIO` text NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`CLUBID`, `CLUBNAME`, `CLUBPHOTO`, `BIO`, `USERNAME`, `PASSWORD`) VALUES
(1, 'Gunkoy', 'https://image.hurimg.com/i/hurriyet/75/770x0/64490a82c9de3d3df42944c5.jpg', 'Güneş Köyden Doğuyor(Günköy)\r\nHedef kitlesi köy okulları olan sosyal sorumluluk projesidir.', 'gunkoy', 'gunkoy1234'),
(2, 'Afet Kulübü', 'https://media.licdn.com/dms/image/D4D03AQH3RGBG4r1gQA/profile-displayphoto-shrink_800_800/0/1692713353317?e=1708560000&v=beta&t=fcQlBuC9uZoSLYrk6syJgFmmev_tX5D4qTb5d0hJB3g', 'Afetlere karşı bilinçli ve hazırlıklı bir toplum oluşturmayı amaçlayan bu kulüpte, acil durum yönetimi becerilerini geliştiriyor ve toplumun afetlere karşı direncini artırmak için çalışıyoruz.', 'tiyatro', 'tiyatro1234');

-- --------------------------------------------------------

--
-- Table structure for table `clubrepresentatives`
--

CREATE TABLE `clubrepresentatives` (
  `user_id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clubrepresentatives`
--

INSERT INTO `clubrepresentatives` (`user_id`, `club_id`, `username`, `password`) VALUES
(1, 1, 'gunkoy', '1234'),
(2, 2, 'afet', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `CLUBNAME` varchar(20) NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `ID` int(11) NOT NULL,
  `clubid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`CLUBNAME`, `DESCRIPTION`, `ID`, `clubid`) VALUES
('Gunkoy', 'Kitap Bağışlarınızı A Binasına Bekliyoruz:)', 1, 1),
('Gunkoy', 'Kıyafet Bağışlarınızı T Binasına Bekliyoruz:) ', 2, 1),
('Afet Kulübü', 'Bağışlarınızı G Binasına Bekliyoruz:)', 3, 2),
('Gunkoy', 'Kışlık Kıyafet Bağışlarınızı FF Binasına Bekliyoruz:)', 6, 1),
('Afet Kulübü', 'Bağışlarınızı B Binasına Bekliyoruz:)', 7, 2),
('1', 'abfjsb', 8, 0),
('gunkoy', 'ffdds', 9, 0);

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
  `itemId` int(20) NOT NULL,
  `itemName` varchar(250) NOT NULL,
  `itemPlace` varchar(250) NOT NULL,
  `itemDescription` text NOT NULL,
  `lostOrFound` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`itemId`, `itemName`, `itemPlace`, `itemDescription`, `lostOrFound`) VALUES
(1, 'Necklace', 'Mithat Coruh', 'Gold necklace with heart charm', 1),
(2, 'Airpod', 'T Binasi', 'Airpod pembe kabi var', 1);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `message_text` text NOT NULL,
  `created_datetime` datetime NOT NULL,
  `message_from` int(20) NOT NULL,
  `message_to` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `message_text`, `created_datetime`, `message_from`, `message_to`) VALUES
(3, 'Merhaba, telefon hakkında bilgi almak istiyorum.', '2023-12-17 15:10:19', 22101234, 22102345),
(4, 'Nasıl yardımcı olabilirim?', '2023-12-17 17:39:30', 22102345, 22101234),
(5, 'Iyi Gunler. Sandalye fiyatını 2000 yapmamız mümkün mü?', '2023-12-17 17:40:15', 22103456, 22102345),
(6, 'Üzgünüm ancak 2250 yapabilirim?', '2023-12-17 17:41:52', 22102345, 22103456),
(7, '2150 yapabilir miyiz peki?', '2023-12-17 17:43:02', 22103456, 22102345);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double(10,2) NOT NULL,
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
(1, 'Kuyucaklı Yusuf', 80.00, 'Sabahattin Ali\'nin Kuyucaklı Yusuf kitabı', 22102345, 'https://www.yapikrediyayinlari.com.tr/dosyalar/2017/07/kuyucakli-yusuf-ozel-kap.jpg', 7, 1),
(2, 'Suç ve Ceza', 120.00, 'Dostoyevski\'nin Suç ve Ceza kitabı', 22103456, 'https://cdn.dsmcdn.com/ty180/product/media/images/20210923/4/135543021/123892296/1/1_org_zoom.jpg', 9, 0),
(3, 'Macbook Air', 49999.00, 'MacBook Air M2 16 GB 256 GB SSD 8C GPU 13.6\'\'', 22103456, 'https://cdn.akakce.com/apple/macbook-pro-muhn2tu-a-i5-8-gb-128-gb-ssd-iris-graphics-plus-615-13-notebook-z.jpg', 8, 0),
(4, 'Sandalye', 2500.00, 'Sandalye', 22102345, 'https://i0.wp.com/mobisan.com.tr/wp-content/uploads/2022/06/mertsit-konfor-Antrasit-ofis-bilgisayar-sandalyesi.jpg?fit=1500%2C1500&ssl=1', 7, 1),
(5, 'iPhone 11', 23999.00, 'iPhone 11 64 Gb Siyah', 22102345, 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1-1_large.jpg', 7, 0),
(7, 'Phone', 400.00, 'hwllo', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 8, 0),
(8, 'Phone', 400.00, 'hwllo', 0, 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `rentitems`
--

CREATE TABLE `rentitems` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `sellerId` int(11) NOT NULL,
  `photo` varchar(250) NOT NULL,
  `conditionOfProduct` int(11) NOT NULL,
  `isNegotiable` tinyint(1) NOT NULL,
  `rentDay` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rentitems`
--

INSERT INTO `rentitems` (`id`, `name`, `price`, `description`, `sellerId`, `photo`, `conditionOfProduct`, `isNegotiable`, `rentDay`) VALUES
(1, 'Basys', 2000, 'For use in CS223-224.', 22101234, 'https://www.mouser.com.tr/images/marketingid/2015/img/102050644.png?v=070223.0350', 8, 0, 100),
(2, 'Gilgamesh', 250, 'Epic of Gilgamesh for use in hum classes.', 22102345, 'https://i.dr.com.tr/cache/500x400-0/originals/0001922836001-1.jpg', 9, 1, 45),
(3, 'Calculator', 1000, 'Calculator', 22103456, 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7106ob3ATYL._AC_UF894,1000_QL80_.jpg', 8, 1, 90),
(4, 'Basys-3', 100, 'For CS223-224', 0, '', 10, 0, 0),
(5, 'kitap', 234, 'kitap', 0, '', 8, 0, 0),
(6, 'kitap', 234, 'kitap', 0, '', 8, 0, 0);

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

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `id`, `fullname`) VALUES
('22103449', 'Burak1234', 22101234, 'Burak Efe Ogut'),
('Zeynep.Bas', 'zeynep1234', 22102345, 'Zeynep Bas'),
('Bartu.Ozyildirim', 'bartu1234', 22103456, 'Bartu Ozyildirim');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indexes for table `clubrepresentatives`
--
ALTER TABLE `clubrepresentatives`
  ADD PRIMARY KEY (`user_id`);

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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club`
--
ALTER TABLE `club`
  MODIFY `CLUBID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clubrepresentatives`
--
ALTER TABLE `clubrepresentatives`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `itemId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rentitems`
--
ALTER TABLE `rentitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sercap`
--
ALTER TABLE `sercap`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
