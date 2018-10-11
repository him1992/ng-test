export class Chocklate {
    id: number;
    choclateName: string;
    description: string;
    manufacturer: string;

    GetChoklateInfos():Chocklate[] {
        var data1: Chocklate[] = [
            { id: 1, choclateName: '5 Star', description: 'Caramel and nougat covered in milk chocolate', manufacturer: 'Cadbury' },
            { id: 2, choclateName: 'Bar One', description: 'Malted nougat with a caramel topping and covered in milk chocolate', manufacturer: 'Nestle' },
            { id: 3, choclateName: 'Bournville', description: '	Dark chocolate', manufacturer: 'Cadbury' },
            { id: 4, choclateName: 'Cadbury Dairy Milk', description: 'milk chocolate', manufacturer: 'Cadbury' },
            { id: 5, choclateName: 'Chomp', description: 'Caramel and wafer in chocolate', manufacturer: 'Cadbury' },
            { id: 6, choclateName: 'Chunky', description: 'Milk chocolate with peanuts and raisins', manufacturer: 'Nestle' },
            { id: 7, choclateName: 'Daim', description: 'Chocolate over crisp almond toffee', manufacturer: 'Kraft' },
            { id: 8, choclateName: 'Kit Kat', description: 'Wafers in chocolate', manufacturer: 'Nestle' },
            { id: 9, choclateName: 'Mars Bar', description: 'Vanilla nougat with almonds and milk chocolate', manufacturer: 'Mars' },
            { id: 10, choclateName: 'Prince Polo', description: 'Chocolate-covered wafers', manufacturer: 'Kraft' }
        ] as Chocklate[];

        return data1;
    }

    GetChoclateBrands():string[]
    {
            var data : string[] = ['Cadbury','Nestle','Kraft','Mars'];
            return data;
    }
}