export interface Mascota {
    _id?: string;
    name: string;
    breed: string;
    age:string;
    gender: string;
    description: string;
    imageUrl: string;
    categoria: any;
    expiration?: Date;
}