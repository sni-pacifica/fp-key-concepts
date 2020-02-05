export namespace Types {

    export type DistanceInMeters = number;
    export type DistanceInKilometers = number;
    export type Position2DTuple = [Position2D, Position2D];
    export type CityTuple = [City, City];

    /** Positions on a 2D plane (from origin). */
    export interface Position2D {
        readonly x: DistanceInMeters;
        readonly y: DistanceInMeters;
    }

    export interface City {
        readonly name: string;
        readonly position2D: Position2D;
    }

}