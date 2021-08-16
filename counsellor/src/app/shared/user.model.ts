export class User {
    username!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    role!: string;
    
}




export class Appointment {
    constructor(
        public user: string,
        public id: number,
        public date: Date,
        public timeStart: string,
        public timeEnd: string,
        public message: string,
    ){}
}


export class Users{
    email!: string;
    firstName!: string;
    lastName!: string;
    
}



export class Groups {
    constructor(public name: string, public description: string, public category: string) { }
}

