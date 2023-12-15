-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: vacation
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Rome','Discover Rome\'s historic ruins, stunning art, and tasty cuisine for an unforgettable vacation experience','2028-10-20','2009-11-20',1931.00,'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/8c/67/71.jpg'),(2,'Rhodes','Indulge in the sun-kissed beaches, explore ancient ruins, and experience lively entertainment on the captivating island of Rhodes','2008-11-20','2022-11-20',462.00,'https://cdn.britannica.com/65/114965-050-3C4F95F4/citadel-acropolis-Lindos-Greeks-Romans-Byzantines-Ottomans.jpg'),(3,'Lahaina','Escape to Lahaina\'s tropical paradise, where golden beaches, breathtaking sunsets, and rich Hawaiian culture create unforgettable memories for all','2015-11-20','2030-11-20',1049.00,'https://img.theculturetrip.com/wp-content/uploads/2021/11/royal-lahaina-resort.jpg'),(4,'Corfu','Beautiful island, sandy beaches, clear blue waters, delicious food, historical sites, and warm hospitality make unforgettable memories','2013-12-20','2027-12-20',332.00,'https://www.goatsontheroad.com/wp-content/uploads/2017/08/things-to-do-in-corfu-beach.jpg'),(5,'Hilo','Lush green landscapes, breathtaking waterfalls, black sand beaches, vibrant local culture, and warm tropical weather create an unforgettable experience','2017-12-20','2031-12-20',445.00,'https://www.travellens.co/content/images/2020/11/hilo-hawaii.jpg'),(6,'Montego Bay','Stunning white sand beaches, crystal-clear turquoise waters, vibrant reggae music, delicious Jamaican cuisine, and friendly locals make an unforgettable escape','2003-01-20','2017-01-20',809.00,'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/30/06/e1/children-beach-area.jpg?w=600&h=400&s=1'),(7,'Bali','Exotic beaches, lush rice terraces, vibrant markets, ancient temples, traditional arts, and warm hospitality create a magical vacation experience','2022-02-20','2028-02-20',1007.00,'https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Bali-FAQ.jpg'),(8,'Tokyo','Dynamic cityscape, bustling streets, futuristic technology, historic shrines, delectable cuisine, and unique pop culture make Tokyo an exciting destination','2019-03-20','2025-03-20',1243.00,'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg'),(9,'Cape Town','Majestic Table Mountain, stunning coastal drives, diverse wildlife, vibrant markets, rich history, and world-class vineyards offer a captivating vacation experience','2017-01-20','2030-01-20',773.00,'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg/1200px-Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg'),(10,'Santorini','Breathtaking sunsets, iconic white-washed buildings, volcanic beaches, delicious Greek cuisine, ancient ruins, and romantic ambiance make Santorini a dreamy getaway','2012-12-20','2019-12-20',588.00,'https://static.dw.com/image/65271156_906.jpg'),(11,'Sydney','Iconic Opera House, picturesque harbor, beautiful beaches, lively markets, multicultural cuisine, and vibrant nightlife make Sydney an unforgettable destination','2003-03-20','2019-03-20',1205.00,'https://www.riotgames.com/darkroom/1200/3937169418391e1b56a1a4959645ebd2:a0f8e1aeae3db542434b58dd35652bc6/riot-games-sydney-austrailia-office-page.png'),(12,'Machu Picchu','Ancient Inca ruins, dramatic mountain vistas, challenging hiking trails, rich cultural heritage, local markets, and fascinating history create an awe-inspiring vacation','2012-03-20','2025-03-20',762.00,'https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/43WWON3AZEMRDTRF7NWDOTXIPY.jpg');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-10 16:57:22
