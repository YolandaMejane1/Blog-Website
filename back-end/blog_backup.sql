-- MySQL dump 10.13  Distrib 9.2.0, for macos14.7 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (15,'Hello  World! A timeless tradition','The phrase \"Hello World!\" holds a special place in the programming community. It\'s often used as the first output when learning new languages and serves as a right of passage for all developers. ','Yolanda mejane','/uploads/1742888339732.jpeg','2025-03-25 07:38:59'),(16,'Upcoming Tech Conferences in 2025','2025 is packed with tech events offering opportunities to learn about the latest innovations and network with industry leaders. ','Yolanda mejane','/uploads/1742895978546.jpg','2025-03-25 09:46:18'),(18,'Why Every Developer Should Learn Git','Git is the most popular version control system for managing source code. It allows developers to track changes, collaborate and roll back to previous versions of code. Understanding Git is essential for managing projects and work collaboratively.','John Doe','/uploads/1742909672844.jpg','2025-03-25 13:34:32'),(19,'Introduction to JavaScript Promises','Javascript promises allow asynchronous code to be handles more easily. Promises represent the completion of an asynchronous operation and its resulting value. This prevents \"callback hell\" and helps with handling asynchronous code effectively.','Yolanda mejane','/uploads/1742909899868.jpg','2025-03-25 13:38:19'),(20,'Wireframes! ','Embracing fun and creativity in your design projects not only enhaces visual appeal but also fosters a deeper connection with your audience. A wireframe can help you outline the structure and layout of your website. ','Jane Doe','/uploads/1742910456397.jpg','2025-03-25 13:47:36'),(21,'Blockchain','Introduced in 2008, blockchain is a digital ledger technology that records transactions across a network of computers. While its used by Bitcoin blockchain also has the potential to function beyond cryptocurrency.','Yolanda mejane','/uploads/1742910730944.jpg','2025-03-25 13:52:10'),(22,'Cybersecurity','In an increasingly digital world, cybersecurity is crucial for safeguarding your personal information. ','John Doe','/uploads/1742910991012.jpg','2025-03-25 13:56:31'),(23,'Hello World','Hello World','Yolanda mejane','/uploads/1742917624763.jpg','2025-03-25 15:47:04');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-25 19:07:40
