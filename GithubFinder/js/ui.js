class UI {

    constructor() {
        this.profile = document.getElementById('profile');
        this.container = document.querySelector('.searchContainer');
        this.search = document.querySelector('.search');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success">Followers : ${user.followers}</span>
                    <span class="badge badge-info">Followings : ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Website/Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            </div>
            <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6 text-center">
                            <span class="badge badge-primary">Stars ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById('repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        this.clearAlert();
        const divElement = document.createElement('div');
        divElement.className = className;
        divElement.appendChild(document.createTextNode(message));
        this.container.insertBefore(divElement, this.search);
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    clearAlert() {
        const alertDiv = document.querySelector('.alert');
        if (alertDiv)
            alertDiv.remove();
    }
}