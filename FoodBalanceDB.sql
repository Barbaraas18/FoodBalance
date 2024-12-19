-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: foodbalance
-- -------utentecibiutenteutente-----------------------------------------------
-- Server version	9.1.0
create database if not exists FoodBalance;

use FoodBalance;
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
-- Table structure for table `cibi`
--

DROP TABLE IF EXISTS `cibi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cibi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `proteine` decimal(8,2) DEFAULT NULL,
  `grassi` decimal(8,2) DEFAULT NULL,
  `carboidrati` decimal(8,2) DEFAULT NULL,
  `calorie` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cibi`
--

LOCK TABLES `cibi` WRITE;
/*!40000 ALTER TABLE `cibi` DISABLE KEYS */;
INSERT INTO `cibi` VALUES (1,'Mela',0.30,0.20,13.80,52),(2,'Banana',1.30,0.30,22.80,96),(3,'Arancia',1.00,0.10,11.80,47),(4,'Fragole',0.80,0.30,7.70,32),(5,'Uva',0.70,0.20,17.10,69),(6,'Carota',0.90,0.20,9.60,41),(7,'Pomodoro',0.90,0.20,3.90,18),(8,'Cipolla',1.10,0.10,9.30,40),(9,'Zucchina',1.20,0.30,3.10,17),(10,'Patata',2.00,0.10,17.00,77),(11,'Riso',2.70,0.30,28.70,130),(12,'Pasta (cotta)',5.00,1.10,25.00,131),(13,'Pane',8.00,1.30,50.00,265),(14,'Farro',3.60,0.60,29.00,150),(15,'Ceci',8.90,2.60,27.40,164),(16,'Lenticchie',9.00,0.40,20.00,116),(17,'Fagioli',7.00,0.50,21.60,127),(18,'Piselli',5.40,0.40,14.50,81),(19,'Avena',2.40,1.40,12.00,71),(20,'Noci',15.20,65.20,13.70,654),(21,'Mandorle',21.20,49.90,21.60,579),(22,'Nocciole',14.90,60.80,16.70,628),(23,'Carne di manzo',26.10,9.20,0.00,250),(24,'Carne di pollo',27.00,3.60,0.00,165),(25,'Tacchino',29.00,1.10,0.00,135),(26,'Salmone',20.00,13.00,0.00,208),(27,'Tonno',24.00,1.00,0.00,116),(28,'Uova',12.60,10.60,1.10,155),(29,'Latte',3.40,1.00,5.00,42),(30,'Yogurt',4.30,1.50,7.00,61),(31,'Formaggio (media stagionatura)',25.00,30.00,1.30,402),(32,'Burro',0.90,81.10,0.10,717),(33,'Olio d’oliva',0.00,100.00,0.00,884),(34,'Olio di cocco',0.00,100.00,0.00,892),(35,'Pesca',0.90,0.30,9.50,39),(36,'Pera',0.40,0.10,15.20,57),(37,'Ciliegie',1.10,0.30,12.20,50),(38,'Ananas',0.50,0.10,13.10,50),(39,'Anguria',0.60,0.20,7.50,30),(40,'Melone',0.80,0.20,8.00,34),(41,'Kiwi',1.10,0.50,14.70,61),(42,'Fichi',0.80,0.30,19.20,74),(43,'Bietole',1.80,0.20,3.70,19),(44,'Spinaci',2.90,0.40,3.60,23),(45,'Lattuga',1.40,0.20,2.90,15),(46,'Broccoli',2.80,0.40,6.60,34),(47,'Cavolfiore',1.90,0.30,4.80,25),(48,'Peperoni',0.90,0.30,6.00,31),(49,'Cetriolo',0.70,0.10,3.60,16),(50,'Funghi',3.10,0.30,4.10,22),(51,'Mango',0.80,0.40,15.00,60),(52,'Papaya',0.50,0.30,11.00,43),(53,'Mirtilli',0.70,0.30,14.50,57),(54,'Lamponi',1.50,0.60,12.00,52),(55,'More',1.40,0.50,10.20,43),(56,'Avocado',2.00,15.00,9.00,160),(57,'Anacardi',18.20,44.30,30.20,553),(58,'Pistacchi',20.00,45.00,27.50,562),(59,'Castagne',2.00,1.00,45.00,195),(60,'Cocco',3.30,33.50,15.20,354),(61,'Mela Cotogna',0.40,0.10,15.30,57),(62,'Ravanelli',0.70,0.10,3.40,16),(63,'Cavolo',1.30,0.10,6.10,25),(64,'Verza',2.50,0.10,5.40,28),(65,'Porro',1.50,0.20,14.20,61),(66,'Finocchio',1.20,0.20,7.30,31),(67,'Sedano',0.80,0.10,3.00,16),(68,'Prezzemolo',3.00,0.80,6.30,36),(69,'Basilico',3.20,0.60,2.70,23),(70,'Menta',3.80,0.90,8.40,44),(71,'Zenzero',1.80,0.80,18.00,80),(72,'Aglio',6.40,0.50,33.10,149),(73,'Fave',8.00,0.50,19.70,88),(74,'Funghi Porcini',3.10,0.20,4.30,22),(75,'Funghi Champignon',3.10,0.30,4.80,22),(76,'Quinoa',4.40,1.90,21.30,120),(77,'Couscous',3.80,0.20,22.20,112),(78,'Orzo',2.30,0.40,28.20,135),(79,'Segale',2.50,0.30,21.30,104),(80,'Semi di lino',18.30,42.20,29.00,534),(81,'Semi di chia',16.50,31.00,42.10,486),(82,'Semi di zucca',30.00,49.00,10.00,560),(83,'Semi di sesamo',17.00,49.70,23.50,573);
/*!40000 ALTER TABLE `cibi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pasto`
--

DROP TABLE IF EXISTS `pasto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pasto` (
  `user_id` int NOT NULL,
  `id_pasto` int NOT NULL AUTO_INCREMENT,
  `data_pasto` date NOT NULL,
  `quantita` int DEFAULT NULL,
  `id_cibo` int NOT NULL,
  PRIMARY KEY (`id_pasto`),
  KEY `user_id` (`user_id`),
  KEY `id_cibo` (`id_cibo`),
  CONSTRAINT `pasto_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `utente` (`user_id`),
  CONSTRAINT `pasto_ibfk_2` FOREIGN KEY (`id_cibo`) REFERENCES `cibi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pasto`
--

LOCK TABLES `pasto` WRITE;
/*!40000 ALTER TABLE `pasto` DISABLE KEYS */;
/*!40000 ALTER TABLE `pasto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_utente` varchar(255) NOT NULL,
  `eta` int NOT NULL,
  `peso` decimal(10,0) NOT NULL,
  `altezza` decimal(10,0) NOT NULL,
  `bmi` decimal(10,0),
  `categoria_peso` varchar(15),
  `sesso` enum('M','F') NOT NULL,
  `attivita` enum('SEDENTARIO','LEGGERMENTE_ATTIVO','MODERATAMENTE_ATTIVO','MOLTO_ATTIVO','ESTREMAMENTE_ATTIVO') NOT NULL,
  `bmr` decimal(10,0),
  `calorie` decimal(10,0),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` (`user_id`, `username`, `email`, `password_utente`, `eta`, `peso`, `altezza`, `sesso`, `attivita`) VALUES (1,'francesco','sfdfs.com','fds',21,60,169,'M','MODERATAMENTE ATTIVO');
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-08 19:08:00
