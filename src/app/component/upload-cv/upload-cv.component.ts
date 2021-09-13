import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent implements OnInit {
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL: string = '';
  checkUploadFile = false;
  @Output()
  givenURLtoCreate = new EventEmitter<string>();
  message: string = '';

  constructor(private angularFireStore: AngularFireStorage,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileChange($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files[0];
  }

  onUpload(): any {
    this.checkUploadFile = true;
    // @ts-ignore
    const name = this.selectedFile.name;
    const allowedExtensions =
      /(\.docx|\.pdf)$/i;
    if (!allowedExtensions.exec(name)) {
      this.message = 'Định dạng file không chính xác'
      this.reload();
    } else {
      this.message = 'Tạo CV thành công'
      this.ref = this.angularFireStore.ref(name);
      this.ref.put(this.selectedFile)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
          this.downloadURL = downloadURL;
          this.givenURLtoCreate.emit(this.downloadURL);
          this.checkUploadFile = false;
          return downloadURL;
        })
        .catch(error => {
          console.log(`Failed to upload avatar and get link ${error}`);
        });
    }
  }

  reload() {
    if (!this.checkUploadFile) {
      this.router.navigate(['users/cv']).then(() => {
        location.reload();
      }, error => {
        console.log(error);
      });
    } else {
      return;
    }
  }
}
