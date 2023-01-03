CREATE DEFINER=`root`@`localhost` TRIGGER `book_BEFORE_UPDATE` BEFORE UPDATE ON `book` FOR EACH ROW BEGIN
	IF NEW.stockQuantity < 0 THEN
	  SIGNAL SQLSTATE '23000' SET 
      MYSQL_ERRNO = 1452,
      MESSAGE_TEXT = 'Stock quantity of book can not be negative!';
    END IF;
END