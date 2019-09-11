export class SendOrder {
    public tnumber:string;
    public mobileNo:string;
    public date:string;
    public items:Array<Item>;
    constructor(){
        this.tnumber=null;
        this.mobileNo=null;
        this.date=null;
        this.items=null;
    }
}
export class Item {
    _id: string;
    name:string;
    quantity: number;

    constructor( _id: string, name:string, quantity: number){
        this._id=_id;
        this.name=name;
        this.quantity=quantity;
    }
}