import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import { PostApiProvider } from "../../api/post.service";


/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-post",
  templateUrl: "post.html"
})
export class PostPage {
  dataPost = {
    detail: "",
    name: ""
  };

  constructor(
    private api: PostApiProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ionViewDidLoad() {}

  actionPost() {
    if (this.dataPost.name !== "" && this.dataPost.detail !== "") {
      this.handlePost();
    } else {
      let toast = this.toastCtrl.create({
        message: "ข้อมูลไม่ครบ",
        duration: 1200,
        position: "bottom"
      });
      toast.present();
    }
  }

  handlePost() {
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();

    //create post
    this.api.createPost(this.dataPost).subscribe(
      res => {
        loading.dismiss();
        const toast = this.toastCtrl.create({
          message: "บันทึกสำเร็จ",
          duration: 1200,
          position: "bottom"
        });
        toast.present();

        this.navCtrl.pop();
      },
      error => {
        loading.dismiss();

        let toast = this.toastCtrl.create({
          message: "บันทึกไม่สำเร็จ",
          duration: 1200,
          position: "bottom"
        });
        toast.present();
      }
    );
  }
}
