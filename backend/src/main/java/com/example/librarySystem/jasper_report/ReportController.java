package com.example.librarySystem.jasper_report;

import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.JRException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/report")
@AllArgsConstructor
public class ReportController {
    private ReportService reportService;

    @GetMapping("/{format}")
    public ResponseEntity<String> getPublisherReport(@PathVariable String format) throws JRException, FileNotFoundException {
//        try{
//            return ResponseEntity.status(HttpStatus.OK).body(reportService.exportReport(format));
//        }catch (Exception e){
//            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
//        }
        return ResponseEntity.status(HttpStatus.OK).body(reportService.exportReport(format));
    }

}
