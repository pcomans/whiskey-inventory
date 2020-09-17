export const Status = {
    HAVE: 'HAVE',
    WANT: 'WANT',
    ARCHIVE: 'ARCHIVE'
}
export class Whiskey {
    constructor(brand, collection, year, status) {
        this.brand = brand;
        this.collection = collection;
        this.year = year;
        this.status = status;
    }
}
