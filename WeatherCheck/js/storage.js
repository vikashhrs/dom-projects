class Storage {

    constructor() {
        if (localStorage.getItem('city'))
            this.city = localStorage.getItem('city');
        else
            this.city = 'Boston';

        if (localStorage.getItem('state'))
            this.state = localStorage.getItem('state');
        else
            this.state = 'MA';

    }

    getLocationData() {
        if (localStorage.getItem('city'))
            this.city = localStorage.getItem('city');
        if (localStorage.getItem('state'))
            this.state = localStorage.getItem('state');

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}