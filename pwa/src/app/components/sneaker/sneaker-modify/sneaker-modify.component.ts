import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sneaker-modify',
  templateUrl: './sneaker-modify.component.html',
  styleUrls: ['./sneaker-modify.component.css']
})
export class SneakerModifyComponent implements OnInit {
  id: number | undefined;
  private sub: any;
  modifyFormSneaker: FormGroup;
  selectedFile: any;
  imgValue: any;

  constructor(private sneakerService: SneakerService,
    private fb: FormBuilder, private router: ActivatedRoute) {

    this.modifyFormSneaker = this.fb.group({
      label: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      release_date: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getIdSneakers();

  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];

  }

  getIdSneakers(): number {
    this.sub = this.router.params.subscribe((params) => {
      this.id = +params['id'];
    });

    return this.id !== undefined ? this.id : 0;
  }

  modifySneaker() {
    const formSneaker = this.modifyFormSneaker.value;

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
    this.sneakerService.update(this.id || 0, finalForm.sneaker.description)
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
