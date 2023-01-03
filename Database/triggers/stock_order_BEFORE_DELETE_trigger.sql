CREATE DEFINER=`root`@`localhost` TRIGGER `stock_order_BEFORE_DELETE` BEFORE DELETE ON `stock_order` FOR EACH ROW BEGIN
	UPDATE BOOK AS B
    SET B.stockQuantity = B.stockQuantity + OLD.quantity
    WHERE B.ISBN = OLD.ISBN;
END