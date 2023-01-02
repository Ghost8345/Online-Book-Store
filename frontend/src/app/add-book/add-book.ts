export class UploadItem {
    constructor(
        public title: string,
        public authors: string,
        public cover: string,
        public price: Number,
        public quantity: number,
        public threshold: number,
        public quantityId: number
    ) { }
}