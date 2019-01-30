import { AsyncStorage } from 'react-native';

const FAV_KEY = "favorites";

const Storage = {

    // Get all Favorite Stations
    getFavorites(){
        return AsyncStorage.getItem(FAV_KEY).then(values => JSON.parse(values));
    },

    // Save Array as JSON to Storage
    saveFavorite(array){
        return AsyncStorage.setItem(FAV_KEY, JSON.stringify(array));
    },

    // Toggle Favorite of Station
    toggleFavorite(id){
        return Storage.getFavorites().then(currentValue => {
            if(currentValue == null){
                currentValue = new Array();
            }

            const index = currentValue.indexOf(id);
            if(index == -1){
                currentValue.push(id);
            }else{
                currentValue.splice(index, 1);
            }

            Storage.saveFavorite(currentValue);
            return currentValue;
        });
    }

};

export default Storage;
