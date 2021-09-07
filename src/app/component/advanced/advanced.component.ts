import {Component, OnInit} from '@angular/core';

import {PostService} from "../../service/post.service";
import {Post} from "../../model/post/post";
import {City} from "../../model/post/city";
import {CityService} from "../../service/city.service";


@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  cities: City[] = [];
  // @ts-ignore
  postList?: Post[] = [];

  constructor(private cityService: CityService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(result => {
      this.cities = result;
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
    // @ts-ignore
    let address2 = document.getElementById('address2').value;
    // let address = address2+' '+address1;
    console.log(address2)
    console.log(title);
    console.log(address);
    console.log(exp);
    console.log(salary);
    if (title === ''
      && exp === ''
      && salary === ''
      && address !== 'Tất cả các tỉnh') {
// @ts-ignore
      this.postService.searchAddress(address).subscribe(result => {
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }else if (title === ''
      && exp === ''
      && salary === ''
      && address === 'Tất cả các tỉnh') {
      this.postService.search().subscribe(result => {
        // @ts-ignore
        this.postList = result
        console.log(result)
      }, error => {
        console.log(error);
      })
    }


  }
}
