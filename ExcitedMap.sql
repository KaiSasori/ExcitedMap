CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_avatar_path` varchar(150) NOT NULL,
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
  `spot_coordinate_x` DOUBLE PRECISION,
  `spot_coordinate_y` DOUBLE PRECISION,
  PRIMARY KEY (`spot_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_photo` (
  `spot_photo_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `spot_photo_path` varchar(50),
  PRIMARY KEY (`spot_photo_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_video` (
  `spot_video_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `spot_video_link` text NOT NULL,
  PRIMARY KEY (`spot_video_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_category` (
  `spot_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`spot_category_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_label` (
  `spot_label_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `spot_label_type` int(1) NOT NULL,
  `spot_label_description` varchar(50) NOT NULL,
  PRIMARY KEY (`spot_label_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `spot_id` int(11) NOT NULL,
  `review_content` text,
  `review_rating` int(1) NOT NULL,
  PRIMARY KEY (`review_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `review_photo` (
  `review_photo_id` int(11) NOT NULL AUTO_INCREMENT,
  `review_id` int(11),
  `review_photo_path` varchar(150),
  `review_photo_description` varchar(100),
  PRIMARY KEY (`review_photo_id`)
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

CREATE TABLE `spot_questionnaire` (
  `spot_questionnaire_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `spot_questionnaire_title` varchar(50) NOT NULL,
  `spot_questionnaire_description` varchar(100),
  PRIMARY KEY (`spot_questionnaire_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_question` (
  `spot_question_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_questionnaire_id` int(11) NOT NULL,
  `spot_question_content` varchar(100) NOT NULL,
  `spot_question_choice_content_1` varchar(50),
  `spot_question_choice_content_2` varchar(50),
  `spot_question_choice_content_3` varchar(50),
  `spot_question_choice_content_4` varchar(50),
  PRIMARY KEY (`spot_question_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_question_answer` (
  `spot_question_answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `choice` int(1) NOT NULL,
  PRIMARY KEY (`spot_question_answer_id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `spot_error_report` (
  `spot_error_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `spot_error_report_text` varchar(100) NOT NULL,
  PRIMARY KEY (`spot_error_report_id`)
) DEFAULT CHARSET=utf8;
