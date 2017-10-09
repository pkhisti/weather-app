class LocalStorage {
    loadCity = () => {
    try {
        const savedCity = JSON.parse(localStorage.getItem("city"));
        if(savedCity === null) {
            return "Dallas";
        }
        return savedCity;
    } catch (error) {
        return "Dallas";
    }
    }

    saveCity = (city) => {
    try {
      localStorage.setItem("city",JSON.stringify(city));
    } catch (error) {

    }
    }
}

export default LocalStorage;