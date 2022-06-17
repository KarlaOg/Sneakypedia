import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneaker-add',
  templateUrl: 'sneaker-add.component.html',
  styleUrls: ['./sneaker-add.component.css']
})
export class SneakerAddComponent implements OnInit {

  addFormSneaker: FormGroup;
  selectedFile: File = null as any;

  constructor(private sneakerService: SneakerService,
    private fb: FormBuilder) {

    this.addFormSneaker = this.fb.group({

    })
  }

  ngOnInit(): void {
  }

  onFileChanged(event: any): File {
    return this.selectedFile = event.target.files[0];
  }

  addSneaker(form: NgForm) {

    const uploadData = new FormData();
    const imgValue = uploadData.append("image", this.selectedFile, this.selectedFile.name);

    const finalFormValue = form.setValue({ image: imgValue })
    console.log(finalFormValue);

    // this.sneakerService.create(finalObj.sneaker)
    //   .subscribe({
    //     complete: () => console.info("Adding sneaker Completed"),
    //     next: () => ''
    //   })
  }

}
