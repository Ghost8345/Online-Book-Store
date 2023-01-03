export class UploadItem {
    constructor(
        public ISBN: string,
        public title: string,
        public publisher:string,
        public authors: string,
        public pubYear:string,
        public cover: string,
        public price: Number,
        public quantity: number,
        public threshold: number,
        public quantityId: number
    ) { }
}