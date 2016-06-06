CREATE TABLE `favor` (
  `id` varchar(64) NOT NULL,
  `folder_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `name` varchar(256) NOT NULL,
  `url` text NOT NULL,
  `type` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
	`id`		VARCHAR(64) NOT NULL,
	`password`	CHAR(64) NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
