import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedFile!: File;
  isLoadingRegister: boolean = false;
  isLoadingEvent: boolean = false;
  previsualizacion: string | null = null;
  formData = new FormData();
  users!: any;
  pageSize: number = 5; // Cantidad de elementos por página
  currentPage: number = 1; // Página actual

  event: Event = {
    title:'',
    description:'',
    image: {},
    type_event_id:''
  };

  userData: User = {
  name: '',
  email: '',
  password: '',
  cellphone: '',
  rol_id: '',
};
  constructor(private eventService: EventService,
              private sanatizer: DomSanitizer,
              private authService: AuthService,
              private toastr: ToastrService,
              private userService: UserService
    ) {
    }
    alert(){
      alert('hola');
    }

  ngOnInit(): void {
    this.userService.get().subscribe(response => {
      this.users = response;
    });
  }

  pageChangedEvent(event: any): void {
    this.currentPage = event;
  }

  pageChangedUser(event: any): void {
    this.currentPage = event;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.event.image = this.selectedFile;
    this.extraerBase64(this.selectedFile).then( (image: any) => {
      this.previsualizacion = image.base;
    })
  }

  submitEvent(): void {
    this.isLoadingEvent = true;
    this.eventService.create(this.event).subscribe(response => {
      this.isLoadingEvent = false;
    }, error => {
      this.isLoadingEvent = false;
    })
  }

  submitUser(): void {
    this.isLoadingRegister = true;
    this.authService.register(this.userData).subscribe(response => {
      this.isLoadingRegister = false;
    }, error => {
      this.isLoadingRegister = false;
    })
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanatizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        blob: $event,
        image,
        base: reader.result
      });
    };
    reader.onerror = error => {
      reject({
        base: null,
        error: 'Error al leer el archivo'
      });
    };
  } catch (error) {
    reject({
      base: null,
      error: 'Error inesperado'
    });
  }
});

}
