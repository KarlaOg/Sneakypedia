import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneaker-add',
  templateUrl: 'sneaker-add.component.html',
  styleUrls: ['./sneaker-add.component.css']
})
export class SneakerAddComponent implements OnInit {

  addFormSneaker: FormGroup;
  selectedFile: any;
  imgValue: any;

  constructor(private sneakerService: SneakerService,
    private fb: FormBuilder) {

    this.addFormSneaker = this.fb.group({
      label: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      release_date: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  addSneaker() {
    const formSneaker = this.addFormSneaker.value;

    const finalForm = {
      "sneaker": {
        "label": formSneaker.label,
        "image": this.selectedFile,
        "description": formSneaker.description,
        "price": formSneaker.price,
        "release_date": formSneaker.release_date
      }
    }
    console.log(finalForm)
    this.sneakerService.create(finalForm)
      .subscribe({
        next() {
          
        },
        error(err) {
          
        },
        complete() {
          
        },
      })
  }

}
