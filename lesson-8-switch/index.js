import readmeLoader from '../readmeContentLoader.js';
void readmeLoader();

//Task-1

function printAnimalType(animalType) {
    switch (animalType) {
        case 'tiger':
            console.log('Animal ' + animalType + ' is a cat');
            break;
        case 'husky':
            console.log('Animal ' + animalType + ' is a dog');
            break;
        case 'spider':
            console.log('Animal ' + animalType + ' is an invertebrate');
            break;
        case 'shark':
            console.log('Animal ' + animalType + ' is a fish');
            break;
        default:
            console.log(animalType + ' is an unexpected animal');
    }
}
printAnimalType('tiger');
printAnimalType('husky');
printAnimalType('spider');
printAnimalType('shark');
printAnimalType('bee');