export interface TweetResponse {
    id: number,
    mensaje: string;
    likes:[
        {
            id: number,
            username: string,
            descripcion:string,
            website: string,
            photoUrl: string,
            created: Date
        }
    ],
    user: {
        id: number,
        username: string,
        descripcion:string,
        website: string,
        photoUrl: string,
        created: Date

    }
        
}