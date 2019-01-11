const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
    const userText = event.target.value;
    const github = new Github();
    const ui = new UI();
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('No user found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => {})
    } else {
        ui.clearProfile();
    }
});