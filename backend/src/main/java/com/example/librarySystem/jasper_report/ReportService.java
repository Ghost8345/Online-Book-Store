package com.example.librarySystem.jasper_report;

import com.example.librarySystem.publisher.Publisher;
import com.example.librarySystem.publisher.PublisherRepository;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ReportService {
    private PublisherRepository publisherRepository;
    public String exportReport(String format) throws FileNotFoundException, JRException {
        List<Publisher> publishers = (List<Publisher>) publisherRepository.findAll();
        File file = ResourceUtils.getFile("classpath:publishers.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(publishers);
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("Statistics","Publishers Report");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameters,jrBeanCollectionDataSource);
        if(format.equals("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, "reports\\publishers.html");
            return "reports\\publishers.html";
        }
        else if(format.equals("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, "reports\\publishers.pdf");
            return "reports\\publishers.pdf";
        }
        return "invalid";
    }

}
