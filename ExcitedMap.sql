CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_avatar_path` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot` (
  `spot_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_category_id` int(11) NOT NULL,
  `spot_name` varchar(50) NOT NULL,
  `spot_address` varchar(100) NOT NULL,
  `spot_description` text,
  PRIMARY KEY (`spot_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_category` (
  `spot_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`spot_category_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  `review_content` text,
  `review_rating` int(1) NOT NULL,
  `review_photo_path` varchar(50),
  `review_photo_description` varchar(100),
  PRIMARY KEY (`review_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `wish` (
  `wish_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  PRIMARY KEY (`wish_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `favorite` (
  `favorite_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  PRIMARY KEY (`favorite_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `footprint` (
  `footprint_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  PRIMARY KEY (`footprint_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `search_history` (
  `search_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `search_text` varchar(50) NOT NULL,
  PRIMARY KEY (`search_history_id`)
) DEFAULT CHARSET=utf8;
