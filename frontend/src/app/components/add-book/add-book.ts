export class UploadItem {
    constructor(
        public ISBN: number,
        public title: string,
        public publisherId:number,
        public authors: string,
        public publicationYear:string,
        public coverImage: string,
        public price: Number,
        public stockQuantity: number,
        public threshold: number,
        public category: string
    ) { }
}