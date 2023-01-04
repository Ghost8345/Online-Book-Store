package com.example.librarySystem.jasper_report;

import com.example.librarySystem.publisher.Publisher;
import com.example.librarySystem.publisher.PublisherRepository;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ReportService {
    private PublisherRepository publisherRepository;
    private BookSaleRepo bookSaleRepo;
    private CustomerPurchaseRepo customerPurchaseRepo;

    private String exportSalesReport(String format, List<BookSale> bookSales) throws FileNotFoundException, JRException {
        File file = ResourceUtils.getFile("classpath:reports\\bookSales.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(bookSales);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("Statistics", "Book Sales Report");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, jrBeanCollectionDataSource);
        File dir = new File("public");

        if (format.equals("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, dir.getAbsolutePath() + "\\bookSales.html");
            return dir.getAbsolutePath() + "\\bookSales.html";
        } else if (format.equals("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, dir.getAbsolutePath() + "\\bookSales.pdf");
            return dir.getAbsolutePath() + "\\bookSales.pdf";
        }
        throw new IllegalStateException("invalid format!");
    }

    public String exportCustomerPurchasesReport(String format) throws FileNotFoundException, JRException {
        List<CustomerPurchase> customerPurchases = customerPurchaseRepo.getTop5MostSpendingCustomersLast3Months();
        File file = ResourceUtils.getFile("classpath:reports\\customerPurchases.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(customerPurchases);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("Statistics", "Customer Purchases Report");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, jrBeanCollectionDataSource);
        File dir = new File("public");

        if (format.equals("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, dir.getAbsolutePath() + "\\customerPurchases.html");
            return dir.getAbsolutePath() + "\\customerPurchases.html";
        } else if (format.equals("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, dir.getAbsolutePath() + "\\customerPurchases.pdf");
            return dir.getAbsolutePath() + "\\customerPurchases.pdf";
        }
        throw new IllegalStateException("invalid format!");
    }

    public String exportSalesReport(String format, boolean isLastMonth) throws FileNotFoundException, JRException {
            return isLastMonth ? exportSalesReport(format, bookSaleRepo.getAllBooksSalesLastMonth()) :
                    exportSalesReport(format, bookSaleRepo.getTop10Last3Months());
    }

//    public String exportReport(String format) throws FileNotFoundException, JRException {
//        List<Publisher> publishers = (List<Publisher>) publisherRepository.findAll();
//        File file = ResourceUtils.getFile("classpath:reports\\publishers.jrxml");
//        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
//        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(publishers);
//        Map<String, Object> parameters = new HashMap<>();
//        parameters.put("Statistics", "Publishers Report");
//        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, jrBeanCollectionDataSource);
//        File dir = ResourceUtils.getFile("classpath:reports");
//        if (format.equals("html")) {
//            JasperExportManager.exportReportToHtmlFile(jasperPrint, dir.getAbsolutePath() + "\\publishers.html");
//            return dir.getAbsolutePath() + "\\publishers.html";
//        } else if (format.equals("pdf")) {
//            JasperExportManager.exportReportToPdfFile(jasperPrint, dir.getAbsolutePath() + "\\publishers.pdf");
//            return dir.getAbsolutePath() + "\\publishers.pdf";
//        }
//        throw new IllegalStateException("invalid format!");
//    }

}
