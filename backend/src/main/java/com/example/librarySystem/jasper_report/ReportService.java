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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ReportService {
    private PublisherRepository publisherRepository;
    public String exportReport(String format) throws FileNotFoundException, JRException {
        List<Publisher> publishers = (List<Publisher>) publisherRepository.findAll();
        File file = ResourceUtils.getFile("classpath:reports\\publishers.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource jrBeanCollectionDataSource = new JRBeanCollectionDataSource(publishers);
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("Statistics","Publishers Report");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,parameters,jrBeanCollectionDataSource);
        File dir = ResourceUtils.getFile("classpath:reports");
        if(format.equals("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, dir.getAbsolutePath() + "\\publishers.html");
            return dir.getAbsolutePath() + "\\publishers.html";
        }
        else if(format.equals("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, dir.getAbsolutePath() + "\\publishers.pdf");
            return dir.getAbsolutePath() + "\\publishers.pdf";
        }
        return "invalid";
    }

}
