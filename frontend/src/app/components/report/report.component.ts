import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  reportHtml: SafeHtml = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  fetchReportHtml(reportUrl: string) {
    this.http.get(reportUrl, { responseType: 'text' }).subscribe((data) => {
      this.reportHtml = this.sanitizer.bypassSecurityTrustHtml(data);
      this.loading = false;
    });
  }

  fetchReport(endpoint: string) {
    this.loading = true;
    
    const backendUrl = 'http://localhost:8080/report';
    this.http
      .get(`${backendUrl}/${endpoint}`, { responseType: 'text' })
      .subscribe({
        next: (filename: any) => {
          const reportUrl = `http://localhost:8080/${filename}`;
          this.fetchReportHtml(reportUrl);
        },
        error: (error: any) => {
          alert(error);
        },
      });
  }

  getTop10Customers() {
    this.fetchReport('topCustomers/html');
  }

  getBooksSales() {
    this.fetchReport('topSales/html');
  }

  getTop10BooksSales() {
    this.fetchReport('top10Sales/html');
  }
}
