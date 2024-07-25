export class Heart {
    constructor(public fullHeart: boolean,
        public urlFullHeart: string = '/assets/images/coracao_cheio.png',
        public urlEmptyHeart: string = '/assets/images/coracao_vazio.png'
    ) { }

    public showHeart(): string {
        if (this.fullHeart) {
            return this.urlFullHeart;
        } else {
            return this.urlEmptyHeart;
        }
    }
}