import {Component, OnInit} from '@angular/core';
import {ProvinceService} from "../../service/province.service";
import {PostService} from "../../service/post.service";
import {Post} from "../../model/post/post";
import {Province} from "../../model/province";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  provinces: Province[] = [];
  // @ts-ignore
  postList: Post = [];

  constructor(private provinceService: ProvinceService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.provinceService.getAll().subscribe(result => {
      this.provinces = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
  }

  search() {
    // @ts-ignore
    let title = document.getElementById('title').value;
    // @ts-ignore
    let exp = document.getElementById('exp').value;
    // @ts-ignore
    let salary = document.getElementById('salary').value;
    // @ts-ignore
    let address = document.getElementById('address').value;
    console.log(title === '');
    if (title === ''
      && exp === ''
      && salary === ''
      && address !== 'Tất cả các tỉnh') {
// @ts-ignore
      this.postService.searchAddress(address).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title !== ''
      && exp === ''
      && salary === ''
      && address == 'Tất cả các tỉnh') {
      this.postService.searchTitle(title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title === ''
      && exp !== ''
      && salary === ''
      && address == 'Tất cả các tỉnh') {
      this.postService.searchExp(exp).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title === ''
      && exp === ''
      && salary !== ''
      && address == 'Tất cả các tỉnh') {
      this.postService.searchSalary(salary).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title === ''
      && exp === ''
      && salary !== ''
      && address !== 'Tất cả các tỉnh') {
      this.postService.searchAddressAndSalary(address, salary).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title === ''
      && exp !== ''
      && salary === ''
      && address !== 'Tất cả các tỉnh') {
      this.postService.searchAddressAndExp(address, exp).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    } else if (title !== ''
      && exp === ''
      && salary === ''
      && address !== 'Tất cả các tỉnh') {
      this.postService.searchAddressAndTitle(address, title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title === ''
      && exp !== ''
      && salary !== ''
      && address === 'Tất cả các tỉnh') {
      this.postService.searchSalaryAndExp(salary, exp).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title !== ''
      && exp === ''
      && salary !== ''
      && address === 'Tất cả các tỉnh') {
      this.postService.searchSalaryAndTitle(salary, title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title !== ''
      && exp !== ''
      && salary === ''
      && address === 'Tất cả các tỉnh') {
      this.postService.searchExpAndTitle(exp, title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title === ''
      && exp !== ''
      && salary !== ''
      && address !== 'Tất cả các tỉnh') {
      this.postService.searchAddressAndSalaryAndExp(address,salary,exp).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title !== ''
      && exp !== ''
      && salary !== ''
      && address !== 'Tất cả các tỉnh') {
      this.postService.searchAddressAndSalaryAndExpAndTitle(address,salary,exp,title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title !== ''
      && exp !== ''
      && salary !== ''
      && address === 'Tất cả các tỉnh') {
      this.postService.searchSalaryAndExpAndTitle(salary,exp,title).subscribe(result => {
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }


  }
}
