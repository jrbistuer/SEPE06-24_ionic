import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertController, IonAvatar,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController
} from '@ionic/angular/standalone';
import {AvatarService} from "../../../services/avatar.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {DocumentData} from "@angular/fire/compat/firestore";
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../models/interfaces";
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, HeaderComponent]
})
export class AvatarPage {

  user!: IUser;

  usrImage: string = '';

  title = 'Perfil';

  constructor(
    private avatarService: AvatarService,
    private userService: UserService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.userService.getUser().subscribe((user: IUser) => {
      this.user = user;
//      this.usrImage = `data:image/png;base64,${user.avatarImg}`;
      this.usrImage = user.avatarImg || '';
    });
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos // Camera, Photos or Prompt!
    });

    if (image) {

      const imgBase64String = image.base64String;

      // this.userService.setAvatarImg(imgBase64String!);

      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image);

      if (result) this.usrImage = result;

      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }
}
