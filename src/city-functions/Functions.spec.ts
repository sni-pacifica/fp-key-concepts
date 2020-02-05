import {Types} from "./Types";
import {Pure} from "./Functions";
import getLocation = Pure.getLocation;
import distanceBetween = Pure.distanceBetween;
import metersToKilometers = Pure.metersToKilometers;
import distanceMessage = Pure.distanceMessage;

namespace Fixtures {

    import Position2D = Types.Position2D;
    import City = Types.City;

    export const POSITION_0: Position2D = {x: 0, y: 0};
    export const POSITION_1: Position2D = {x: 3, y: 4};

    export const CITY_ONE: City = {name: "city1", position2D: POSITION_0};
    export const CITY_TWO: City = {name: "city2", position2D: POSITION_1};
}

describe("Pour réaliser le besoin d'affichage d'un message de distance entre villes", () => {

    describe("j'ai besoin des fonctions", () => {

        describe("getLocation()", () => {

            it("qui me renvoit bien la position d'une ville donnée", () => {

                expect(getLocation(Fixtures.CITY_ONE)).toEqual(Fixtures.POSITION_0);

            });

        });

        describe("distanceBetween()", () => {

            it("qui me calcule bien la distance entre deux position", () => {

                expect(distanceBetween(Fixtures.POSITION_0, Fixtures.POSITION_0)).toEqual(0);
                expect(distanceBetween(Fixtures.POSITION_0, Fixtures.POSITION_1)).toEqual(5); // tripler de pythagore !

            });

        });

        describe("metersToKilometers()", () => {

            it("pour convertir des mètres en kms", () => {

                expect(metersToKilometers(1000)).toEqual(1);

            });

        });

        describe("distanceMessage()", () => {

            it("pour enfin construire mon message", () => {

                // Ce test est l'occasion de se poser la question : cette fonction ne meriterait elle pas
                // d'être simplifiée au niveau de sa signature ?
                expect(distanceMessage(Fixtures.CITY_ONE, Fixtures.CITY_TWO, 10)).toEqual(
                    "La distance entre city1 et city2 est de 10 kms"
                );

            });

        });

    });

});