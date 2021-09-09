import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL: string = '';
  checkUploadFile = false;
  @Output()
  givenURLtoCreate = new EventEmitter<string>();


  constructor(private angularFireStore: AngularFireStorage) {
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
      /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(name)) {
        alert("sai form rồi đ m" )
    }else {
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

}
