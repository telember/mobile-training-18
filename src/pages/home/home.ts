import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PostPage } from "../post/post";
import { PostApiProvider } from "../../api/post.service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  datalist = [];

  constructor(private api: PostApiProvider, public navCtrl: NavController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getDataList();
  }

  actionLike(data) {
    const { like } = data;
    data.like = (like || 0) + 1;
    this.uppdateList(data);
  }

  actionPost() {
    this.navCtrl.push(PostPage);
  }

  getDataList() {
    this.api.getPosts().subscribe(res => {
      this.datalist = this.sortList(res);
    });
  }

  uppdateList(data) {
    this.api.updatePost(data).subscribe(res => {
      data = res;
    });
  }

  sortList(data) {
    return data.sort(function(a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
  }
}
