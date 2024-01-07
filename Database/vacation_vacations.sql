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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Rome','Discover Rome\'s historic ruins, stunning art, and tasty cuisine for an unforgettable vacation experience','2028-10-20','2009-11-20',1931.00,'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/8c/67/71.jpg'),(2,'Rhodes','Indulge in the sun-kissed beaches, explore ancient ruins, and experience lively entertainment on the captivating island of Rhodes','2024-02-10','2024-02-25',462.00,'https://cdn.britannica.com/65/114965-050-3C4F95F4/citadel-acropolis-Lindos-Greeks-Romans-Byzantines-Ottomans.jpg'),(3,'Lahaina','Escape to Lahainas tropical paradise, where golden beaches, breathtaking sunsets, and rich Hawaiian culture create unforgettable memories for all','2024-11-23','2024-12-03',1049.00,'https://img.theculturetrip.com/wp-content/uploads/2021/11/royal-lahaina-resort.jpg'),(4,'Corfu','Beautiful island, sandy beaches, clear blue waters, delicious food, historical sites, and warm hospitality make unforgettable memories','2024-07-19','2024-07-31',1332.00,'https://www.goatsontheroad.com/wp-content/uploads/2017/08/things-to-do-in-corfu-beach.jpg'),(5,'Hilo','Lush green landscapes, breathtaking waterfalls, black sand beaches, vibrant local culture, and warm tropical weather create an unforgettable experience','2024-10-19','2024-10-26',445.00,'https://www.travellens.co/content/images/2020/11/hilo-hawaii.jpg'),(7,'Bali','Exotic beaches, lush rice terraces, vibrant markets, ancient temples, traditional arts, and warm hospitality create a magical vacation experience','2024-03-22','2024-03-28',1007.00,'https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Bali-FAQ.jpg'),(8,'Tokyo','Dynamic cityscape, bustling streets, futuristic technology, historic shrines, delectable cuisine, and unique pop culture make Tokyo an exciting destination','2024-03-06','2024-03-16',1243.00,'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg'),(9,'Cape Town','Majestic Table Mountain, stunning coastal drives, diverse wildlife, vibrant markets, rich history, and world-class vineyards offer a captivating vacation experience','2024-05-12','2024-05-31',773.00,'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg/1200px-Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg'),(10,'Santorini','Breathtaking sunsets, iconic white-washed buildings, volcanic beaches, delicious Greek cuisine, ancient ruins, and romantic ambiance make Santorini a dreamy getaway','2024-06-19','2024-06-26',588.00,'https://static.dw.com/image/65271156_906.jpg'),(12,'Machu Picchu','Ancient Inca ruins, dramatic mountain vistas, challenging hiking trails, rich cultural heritage, local markets, and fascinating history create an awe-inspiring vacation','2024-03-19','2024-03-26',762.00,'https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/43WWON3AZEMRDTRF7NWDOTXIPY.jpg'),(18,'Chiang mai','Explore Chiang Mai of Thailand','2024-01-05','2024-02-09',2000.00,'https://images.pexels.com/photos/805452/pexels-photo-805452.jpeg'),(19,'Amsterdam','Explore Amsterdam of Netherlands','2024-02-25','2024-03-07',1430.00,'https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg'),(20,'Barcelona','Explore Barcelona of Spain','2024-03-26','2024-04-04',1350.00,'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg'),(21,'Madrid','Explore Madrid of Spain','2024-01-06','2024-01-16',3513.00,'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg'),(22,'Ayia Napa','Explore Ayia Napa of Cyprus!','2024-02-10','2024-02-20',1350.00,'https://images.pexels.com/photos/10067444/pexels-photo-10067444.jpeg'),(23,'Manhattan','Explore Manhattan of USA','2024-06-27','2024-07-06',2390.00,'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg'),(24,'London','Explore London of England!','2024-03-06','2024-03-20',1320.00,'https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg'),(25,'Los Angeles','Los Angeles, the entertainment capital of the world, invites you to indulge in sun-soaked beaches, iconic landmarks like Hollywood Boulevard, and a vibrant cultural scene. Immerse yourself in the glamour of celebrity culture, explore diverse neighborhoods, and experience the perfect blend of urban excitement and coastal charm.','2024-05-14','2024-05-30',1890.00,'https://images.pexels.com/photos/14825208/pexels-photo-14825208.jpeg'),(26,'Montego Bay','Stunning white sand beaches, crystal-clear turquoise waters, vibrant reggae music, delicious Jamaican cuisine, and friendly locals make an unforgettable escape','2024-07-02','2024-07-17',2370.00,'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg');
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

-- Dump completed on 2024-01-07 14:40:04
