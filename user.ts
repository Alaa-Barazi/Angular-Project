export class User{
    static genId : number = 1
    id : number
    name:string;
    fullname:string;
    email:string;
    birthdate:string;
    gender:string;
    password:string;
    img:string;
    constructor(name:string,email:string,password:string,fullname:string,birthdate:string,gender:string){
        this.id = User.genId++;
        this.name=name;
        this.email=email;
        this.password=password;
        this.fullname=fullname;
        this.gender=gender;
        this.birthdate=birthdate;
        if(this.gender=="male"){
            this.img="https://media.istockphoto.com/id/945271102/vector/avatar-portrait-of-a-man-in-a-suit-vector.jpg?s=170667a&w=0&k=20&c=aDdTes7KVY9046-DpsU_1w0pDg7cIgads1EPb95mQmM=";
        }
        else{
            this.img="https://i.pinimg.com/originals/c4/98/16/c49816986f5343f915ac90d3dc740674.jpg";
        }
    }
    
}