import {Types} from "./Types";

export namespace Pure {

    import City = Types.City;
    import Position2D = Types.Position2D;
    import DistanceInMeters = Types.DistanceInMeters;
    import DistanceInKilometers = Types.DistanceInKilometers;

    export const getLocation: (v: City) => Position2D =
        v => void 0; // TODO !

    // TODO ! Utilisez le théorème de pythagore (namespace Pythagoras ci-dessous),
    // la distance entre deux points est égale à l'hypothénuse.
    export const distanceBetween: (l1: Position2D, l2: Position2D) => DistanceInMeters =
        (l1, l2) => void 0;

    export const metersToKilometers: (d: DistanceInMeters) => DistanceInKilometers =
        d => void 0;// TODO !

    export const distanceMessage: (v1: City, v2: City, distance: DistanceInKilometers) => string =
        (v1, v2, d) => void 0;// TODO !

}

export namespace Impure {

    export const display = (msg: string) => {
        console.info(msg);
    }

}

export namespace Pythagoras {

    const squareRoot = Math.sqrt;

    /** Compute EAGERLY c = √ a² + b² . */
    export const hypotenuse: (a: number, b: number) => number =
        (a, b) =>
            squareRoot(
                sum(
                    squared(a),
                    squared(b)
                )
            );

    /** Compute x² */
    const squared: (x: number) => number =
        x => Math.pow(x, 2)

    const sum: (a: number, b: number) => number =
        (a, b) => a + b

}
