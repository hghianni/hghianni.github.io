import { PlanetMaker } from '../src/PlanetMaker.js';
import { mercuryInfo, venusInfo, earthInfo, marsInfo, jupiterInfo, saturnInfo, uranusInfo, neptuneInfo } from '../src/constants.js';

export class SolarSystemPlanets{
    constructor(sunPosition, maker){
        let Mercury  = maker.makePlanet(
            sunPosition + mercuryInfo.distanceFromSun,
            0,
            0,
            mercuryInfo.radius,
            mercuryInfo.texture,
            mercuryInfo.revolutionPeriod, 
            mercuryInfo.rotationPeriod
        )

        let Venus    = maker.makePlanet(
            sunPosition + venusInfo.distanceFromSun,
            0,
            0,
            venusInfo.radius,
            venusInfo.texture,
            venusInfo.revolutionPeriod, 
            venusInfo.rotationPeriod
        )

        let Earth    = maker.makePlanet(
            sunPosition + earthInfo.distanceFromSun,
            0,
            0,
            earthInfo.radius,
            earthInfo.texture,
            earthInfo.revolutionPeriod, 
            earthInfo.rotationPeriod
        )

        let Mars     = maker.makePlanet(
            sunPosition + marsInfo.distanceFromSun,
            0,
            0,
            marsInfo.radius,
            marsInfo.texture,
            marsInfo.revolutionPeriod, 
            marsInfo.rotationPeriod
        )

        let Jupiter  = maker.makePlanet(
            sunPosition + jupiterInfo.distanceFromSun,
            0,
            0,
            jupiterInfo.radius,
            jupiterInfo.texture,
            jupiterInfo.revolutionPeriod, 
            jupiterInfo.rotationPeriod
        )

        let Saturn   = maker.makePlanet(
            sunPosition + saturnInfo.distanceFromSun,
            0,
            0,
            saturnInfo.radius,
            saturnInfo.texture,
            saturnInfo.revolutionPeriod, 
            saturnInfo.rotationPeriod
        )

        let Uranus   = maker.makePlanet(
            sunPosition + uranusInfo.distanceFromSun,
            0,
            0,
            uranusInfo.radius,
            uranusInfo.texture,
            uranusInfo.revolutionPeriod, 
            uranusInfo.rotationPeriod
        )

        let Neptune  = maker.makePlanet(
            sunPosition + neptuneInfo.distanceFromSun,
            0,
            0,
            neptuneInfo.radius,
            neptuneInfo.texture,
            neptuneInfo.revolutionPeriod, 
            neptuneInfo.rotationPeriod
        )
        
        return Array(Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)
    }
}