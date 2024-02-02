import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:4200/notice';

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post(this.apiUrl, formData);
  }

  downloadImage(imageName: string): Observable<any> {
    const downloadUrl = `${this.apiUrl}/${imageName}`;
    return this.http.get(downloadUrl);
  }
}
