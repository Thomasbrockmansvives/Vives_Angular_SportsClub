export class Activity {
    constructor(
        public id : number,
        public name: string,
        public category: string,
        public difficulty: string,
        public maxParticipants: number,
        public active : boolean,
        public description : string
    ){}
}
