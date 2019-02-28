function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} ${this.type} ${this.cost}`);
        }
        return member;
    }
}

const SimpleMembership = function(name) {
    console.log('called SimpleMembership');
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    console.log('called StandardMembership');
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    console.log('called SuperMembership');
    this.name = name;
    this.cost = '$25';
}

const members = [];

const factory = new MemberFactory();
members.push(factory.createMember('John', 'simple'));
members.push(factory.createMember('Chris', 'super'));
members.push(factory.createMember('John', 'simple'));
members.push(factory.createMember('Jannes', 'standard'));
console.log(members);

members.forEach(member => {
    member.define();
})