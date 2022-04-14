abstract class StreetFighter{
    constructor() {}
    move () {}
    fight () {}
   abstract getSpecialAttact(): string;
}

class Ryu extends StreetFighter {
    getSpecialAttact(): string {
        return 'huhuhu'
    }
}


