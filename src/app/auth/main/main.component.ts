import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  selectedFile!: File;
  isLoadingRegister: boolean = false;
  isLoadingEvent: boolean = false;
  previsualizacion: string | null = null;
  formData = new FormData();
  users!: any;
  events!: any;
  pageSize: number = 5; // Cantidad de elementos por página
  currentPage: number = 1; // Página actual
  eventDelete: any;
  userDelete: any;

  // Modelo de evento
  event: Event = {
    id: '',
    title:'',
    description:'',
    image: null,
    type_event_id:''
  };
  // Modelo de usuario
  userData: User = {
    name: '',
    email: '',
    password: '',
    cellphone: '',
    rol_id: '',
  };
  // Hace de modelo para actualizar un usuario
  updateUserData: User = {
    name: '',
    email: '',
    password: '',
    cellphone: '',
    rol_id: '',
  };
  // Hace de modelo para actualizar un evento
  updateEvent: Event = {
    id: '',
    title:'',
    description:'',
    image: null,
    type_event_id:''
  };

  constructor(private eventService: EventService,
              private sanatizer: DomSanitizer,
              private authService: AuthService,
              private userService: UserService,
              private viewportScroller: ViewportScroller,
              private toast: ToastrService,
    ) {
    }

  ngOnInit(): void {
    // Trae una lista de usuarios
    this.userService.get().subscribe(response => {
      this.users = response;
    });
    // Trae una lista de eventos
    this.eventService.getEvents().subscribe( response => {
      this.events = response;
    })
  }

  // Inicializa un objeto que se eliminará
  initDelete(event: Event){
    this.scrollToTop()
    this.eventDelete = event;
  }

  // Inicializa un objeto que se eliminará
  initUserDelete(user: User){
    this.scrollToTop()
    this.userDelete = user;
  }

  fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanatizer.bypassSecurityTrustUrl(event.objectUrl!);
    this.event.image = event.blob;
    // event.blob can be used to upload the cropped image
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  pageChangedEvent(event: any): void {
    this.currentPage = event;
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  pageChangedUser(event: any): void {
    this.currentPage = event;
  }

  submitEvent(): void {
    this.isLoadingEvent = true;
    this.eventService.create(this.event).subscribe(response => {
      this.isLoadingEvent = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    }, error => {
      this.isLoadingEvent = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    })
  }
  initEditUser(user: User){
    this.scrollToTop();
    this.updateUserData = user;
  }

  editUser(){
    this.userService.put(this.updateUserData).subscribe(response => {
      this.toast.success('genial!');
    }, error => {
      this.toast.error('Ha ocurrido un error 😓!');
    })
  }

  deleteUser(){
    this.userService.delete(this.userDelete.email).subscribe(response => {
      this.toast.success('genial!');
    },error => {
      this.toast.error('Ha ocurrido un error 😓!');
    })
  }
  initEditEvent(event: Event){
    this.scrollToTop();
    this.updateEvent = event;
  }

  editEvent(){
    this.eventService.put(this.updateEvent).subscribe(response => {
      this.toast.success('genial!');
    }, error => {
      this.toast.error('Ha ocurrido un error 😓!');
    })
  }

  deleteEvent(){
    this.eventService.delete(this.eventDelete.id).subscribe(response => {
      this.toast.success('genial!');
    },error => {
      this.toast.error('Ha ocurrido un error 😓!');
    })
  }

  submitUser(): void {
    this.isLoadingRegister = true;
    this.authService.register(this.userData).subscribe(response => {
      this.isLoadingRegister = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    }, error => {
      this.isLoadingRegister = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    })
  }

}
