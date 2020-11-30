export interface CreateResponse{
    id: number;
    mensaje: string;
    likes: [];
    user: {
        id: number,
        username: string,
        descripcion:string,
        website: string,
        photoUrl: string,
        created: Date

    }
    
}