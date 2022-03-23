import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileName = "";
  uploadProgress: number | null;
  uploadSub!: Subscription | null;
  @Input()
  requiredFileType: string="";
  @Output()
  fileUpload = new EventEmitter<File>();
  constructor() {
    this.uploadProgress = null;
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
      console.log(file)
    if (file) {
      this.fileName = file.name;
      this.fileUpload.emit(file);
    }
  }
  cancelUpload() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}
