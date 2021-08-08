export class Appointment {
    constructor(public date: Date, public timeStart: string, public timeEnd: string, public message: string){}
}
export class Group{
    constructor(
        public grpName: string, public grpDescription: string, public category: string
    ){}
}
export class Medication{
    public user: number
    public counsellor: string
    public name_of_medicine: string
    public  details: string

}
