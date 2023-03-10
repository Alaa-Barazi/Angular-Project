export class car{
  static genId : number = 1
    id : number
    name:string;
    model:string;
    color:string;
    price:number;
    img:string;
    desc:string;
  product: any;
    constructor(name:string,model:string,color:string,price:number,img:string,desc:string){
      this.id = car.genId++;
      this.name=name;
      this.model=model;
      this.color=color;
      this.price=price;
      this.img=img;
      this.desc=desc;
    }
    
  
  }