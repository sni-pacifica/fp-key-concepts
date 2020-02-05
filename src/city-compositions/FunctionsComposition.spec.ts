import {Types} from "../city-functions/Types";
import City = Types.City;
import {Pure} from "../city-functions/Functions";
import distanceMessage = Pure.distanceMessage;
import metersToKilometers = Pure.metersToKilometers;
import distanceBetween = Pure.distanceBetween;
import getLocation = Pure.getLocation;

namespace Fixtures {

    import Position2D = Types.Position2D;
    import City = Types.City;

    export const POSITION_0: Position2D = {x: 0, y: 0};
    export const POSITION_1: Position2D = {x: 3, y: 4};

    export const CITY_ONE: City = {name: "city1", position2D: POSITION_0};
    export const CITY_TWO: City = {name: "city2", position2D: POSITION_1};
}

describe("Pour réaliser le besoin d'affichage d'un message de distance entre villes", () => {

    describe("je peux composer les fonctions développées précédemment pour obtenir la fonction `distanceMessageEntreVilles`", () => {

        it("de façon 'facile' en imbriquant les appels", () => {

            // Just code it ! :)
            let composition: (c1: Types.City, c2: Types.City) => string;

            expect(
                composition(Fixtures.CITY_ONE, Fixtures.CITY_TWO)
            ).toEqual("La distance entre city1 et city2 est de 0.005 kms")

        })

    })

});