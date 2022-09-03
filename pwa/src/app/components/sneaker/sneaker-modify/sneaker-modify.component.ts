import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { modelApiSneaker, Sneaker } from 'src/app/models/sneaker';
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  imgValue: string = '';
  imgSrc: string = '';
  sneakerInfos: Sneaker = {
    id: undefined,
    label: '',
    image: '',
    description: '',
    price: 0,
    release_date: ''
  };
  errorInfo: string | undefined = "";

  constructor(private sneakerService: SneakerService,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {

    this.modifyFormSneaker = this.fb.group({
      label: '',
      image: '',
      description: '',
      price: '',
      release_date: ''
    })
  }

  ngOnInit(): void {
    this.getIdSneakers();
    this.getInfosSneakers();

  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    var self = this
    reader.onload = function () {
      if (reader.result !== null) {
        self.imgSrc = reader.result.toString();
      }
    };
  }

  getIdSneakers(): number {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });

    return this.id !== undefined ? this.id : 0;
  }

  getInfosSneakers() {
    const idSneaker = this.getIdSneakers();
    return this.sneakerService.get(idSneaker).subscribe({
      next: v => {
        for (const value of Object.values(v)) {
          this.sneakerInfos = value

        }
      },
      error: (e) => e,
      complete: () => console.info('complete')


    })

  }

  modifySneaker() {
    const formSneaker = this.modifyFormSneaker.value;

    const finalForm = {
      "sneaker": {
        "label": formSneaker.label,
        "image": this.imgSrc,
        "description": formSneaker.description,
        "price": formSneaker.price,
        "release_date": formSneaker.release_date
      }
    }
    console.log(finalForm)

    // this.sneakerService.update(this.id || 0, finalForm)
    //   .subscribe({
    //     next: (v) => {
    //       console.log(this.id)

    //       console.log(v)
    //     },
    //     error: (e) => {
    //       this.errorInfo = e
    //       console.error(e)
    //     },
    //     complete: () => {
    //       this.router.navigate([`/sneakers/${this.id}`])

    //     },
    //   })
    console.log(this.id)
  }


}
