import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss'],
  standalone: false
})
export class UploadCvComponent implements OnInit {
  selectedFile?: File;
  downloadURL: string = '';
  checkUploadFile = false;
  @Output() givenURLtoCreate = new EventEmitter<string>();
  message: string = '';

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit(): void {}

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  async onUpload(): Promise<void> {
    if (!this.selectedFile) {
      this.message = 'Vui lòng chọn file trước khi tải lên!';
      return;
    }

    this.checkUploadFile = true;
    const name = this.selectedFile.name;
    const allowedExtensions = /(\.docx|\.pdf)$/i;

    if (!allowedExtensions.exec(name)) {
      this.message = 'Định dạng file không chính xác';
      this.reload();
      return;
    }

    this.message = 'Đang tải lên...';
    try {
      // Tạo reference đến file trong Firebase Storage
      const storageRef = ref(this.storage, `uploads/${name}`);
      
      // Upload file
      await uploadBytes(storageRef, this.selectedFile);
      
      // Lấy URL tải về
      this.downloadURL = await getDownloadURL(storageRef);
      this.givenURLtoCreate.emit(this.downloadURL);

      this.message = 'Tạo CV thành công!';
    } catch (error) {
      console.error(`Failed to upload file: ${error}`);
      this.message = 'Lỗi khi tải lên. Vui lòng thử lại!';
    } finally {
      this.checkUploadFile = false;
    }
  }

  reload() {
    if (!this.checkUploadFile) {
      this.router.navigate(['users/cv']).then(() => {
        location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  }
}

