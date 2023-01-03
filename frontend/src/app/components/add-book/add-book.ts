export class UploadItem {
    constructor(
        public isbn: number,
        public title: string,
        public publisherName:String,
        public authors: string,
        public publicationYear:string,
        public coverImage: string,
        public price: Number,
        public stockQuantity: number,
        public threshold: number,
        public category: string
    ) { }
}
