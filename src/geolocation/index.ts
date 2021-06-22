import { Coordinates } from "@/typescript/types";

export function getLocation() {
    return new Promise((res: (position: GeolocationPosition) => void | PromiseLike<void>, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    })
}

const rad = (x: number) => {
    return x * Math.PI / 180;
};

export function getDistance(p1: Coordinates, p2: Coordinates): number {
    console.log("distance!");

    const R = 6378137;
    const dLat = rad(p2.latitude - p1.latitude);
    const dLong = rad(p2.longitude - p1.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return (d / 1609.344); // returns the distance in miles
}