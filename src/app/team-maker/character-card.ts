export class CharacterCard{
    constructor(
        public name: string,
        public photo: string,
        public element: string,
        public isFiveStar: boolean = false,
        public selected: boolean = false
    ){}
}