const data = [

    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: 'John Doe',
        age: 78,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Mumbai IN',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Male',
        location: 'Miami MA',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
];

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
}

const profiles = profileIterator(data);
renderUI(profiles.next().value);

document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile(event) {
    const profile = profiles.next().value;
    if (!profile) {
        location.reload();
    } else {
        renderUI(profile);
    }
}

function renderUI(profile) {
    document.getElementById('profileDisplay').innerHTML = `   <ul class="list-group">
            <li class="list-group-item">Name : ${profile.name}</li>
            <li class="list-group-item">Age : ${profile.age}</li>
            <li class="list-group-item">Gender : ${profile.gender}</li>
            <li class="list-group-item">Location : ${profile.location}</li>
            <li class="list-group-item">Looking for : ${profile.lookingfor}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <img src="${profile.image}">
    `;
}