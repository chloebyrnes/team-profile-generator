

const htmlelements = function(team) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    ${team}
    
</body>
</html>
    `;
};


    function appendManager(manager){
        return `
        <div>
        ${manager.name}
        ${manager.id}
        ${manager.email}
        ${manager.number}
        </div>`
    }


    function generatePage(teamMembers){

    
    const teamMemberCard = [];
    for(let i=0; i < teamMembers.length; i++){
        const role = teamMembers[i].getRole();
        const member = teamMembers[i]
        if(role === 'Manager') teamMemberCard.push(appendManager(member))
        else if (role === 'Engineer') teamMemberCard.push(appendEngineer(member))
        else if (role === 'Intern') teamMemberCard.push(appendIntern(member))
    }
    return htmlelements(teamMemberCard.join(''));

};

module.exports = generatePage;