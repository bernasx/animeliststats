// This file contains all the functions that spit out labels and datasets.
import { IAnime } from '../models/Anime'


export const mostWatchedGenres = (rawData: IAnime[] | undefined) => {

    if (!rawData) { return undefined };

    // let us make a dict of all [genre]:count
    const initialValue: {
        [key: string]: any
    } = {};

    // accumulate it
    const tagData = rawData.reduce((accumulator, current) => {
        //add the tags
        current.tags.forEach((tag) => {
            const nTag = tag as string;
            if (accumulator[nTag]) {
                accumulator[nTag] += 1;
            } else {
                accumulator[nTag] = 1;
            }
        })
        return accumulator;
    }, initialValue)

    //sort it as a key:value pair
    const sortable = [];
    for (const genre in tagData) {
        sortable.push({ genre: `${genre} (${tagData[genre]})`, count: tagData[genre] });
    }

    sortable.sort(function (a, b) {
        if (a.count > b.count) {
            return -1;
        }
        if (a.count < b.count) {
            return 1;
        }
        return 0;
    });

    // now convert it to 2 arrays for usage in the component
    const returnSort: [string[], number[]] = [[], []];

    for (const sortedData of sortable) {
        returnSort[0].push(sortedData.genre);
        returnSort[1].push(sortedData.count);
    }

    return returnSort;
}

export const mostCommonFirstLetter = (rawData: IAnime[] | undefined) => {

    if (!rawData) { return undefined };

    // let us make a dict of all [genre]:count
    const initialValue: {
        [key: string]: any
    } = {};

    // accumulate it
    const letterData = rawData.reduce((accumulator, current) => {
        //add the tags

        const firstLetter = current.title[0].toUpperCase();
        if (accumulator[firstLetter]) {
            accumulator[firstLetter] += 1;
        } else {
            accumulator[firstLetter] = 1;
        }
        return accumulator;
    }, initialValue)

    //sort it as a key:value pair
    const sortable = [];
    for (const letter in letterData) {
        sortable.push({ letter: `${letter} (${letterData[letter]})`, count: letterData[letter] });
    }

    //specifically sort it alphabetically
    sortable.sort(function (a, b) {
        if (a.letter > b.letter) {
            return -1;
        }
        if (a.letter < b.letter) {
            return 1;
        }
        return 0;
    });

    // now convert it to 2 arrays for usage in the component
    const returnSort: [string[], number[]] = [[], []];

    for (const sortedData of sortable) {
        returnSort[0].push(sortedData.letter);
        returnSort[1].push(sortedData.count);
    }

    return returnSort;
}

export const animeCountByYear = (rawData: IAnime[] | undefined) => {

    if (!rawData) { return undefined };

    // let us make a dict of all [genre]:count
    const initialValue: {
        [key: string]: any
    } = {};

    // accumulate it
    const yearData = rawData.reduce((accumulator, current) => {
        //get the year
        const year = current.animeSeason.year.toString();
        if (accumulator[year]) {
            accumulator[year] += 1;
        } else {
            accumulator[year] = 1;
        }
        return accumulator;
    }, initialValue)

    //sort it as a key:value pair array
    const sortable = [];
    for (const year in yearData) {
        const yearInt = parseInt(year);
        sortable.push({ year: `${year} (${yearData[year]})`, count: yearData[year], sortYear: yearInt });
    }

    sortable.sort(function (a, b) {
        if (a.sortYear > b.sortYear) {
            return -1;
        }
        if (a.sortYear < b.sortYear) {
            return 1;
        }
        return 0;
    });

    // now convert it to 2 arrays for usage in the component
    const returnSort: [string[], number[]] = [[], []];

    for (const sortedData of sortable) {
        returnSort[0].push(sortedData.year);
        returnSort[1].push(sortedData.count);
    }

    return returnSort;
}