document.getElementById('#buttn')
button.addEventListener('click', function () {


    const style1 = [
        'background: #000',
        'color: #fff',
        'padding: 10px 20px',
        'line-height: 35px',
        'font-size: 20px'
    ].join(';');

    // Found this on Google
    var style2 = [
        'background: linear-gradient(#D33106, #571402)',
        'border: 1px solid #3E0E02',
        'color: white',
        'padding: 1px 5px',
        'display: block',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
        'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
        'line-height: 40px',
        'text-align: center',
        'font-weight: bold'
    ].join(';');

    function reverseString(str) {
        return str.split('').reverse().join('')
    };
    let name = 'Pawel Jaskolski';
    let revName = reverseString(name);



    let interests = ['* Coding', '* Reading', '* Hikiong', '* Sleeping']
    let job = ['* ExpertBuild LLC', '* Playwire', '* SHCC']
    let title = ['Owner', 'Account Executive', 'Consultant']
    let description = ['in charge of buying, renovating and selling real estate', 'Assisted top clients with purchesed products', 'Oversaw 6 healthcare facilities']
    let mySkills = [
        {
            skill: '* Polish',
            cool: false
        },
        {
            skill: 'JavaScript',
            cool: true
        },
        {
            skill: '* Walking',
            cool: false
        },
        {
            skill: 'HTML',
            cool: true
        },
        {
            skill: 'CSS',
            cool: true
        },
        {
            skill: '* Cooking',
            cool: false
        }
    ];




    console.log('%cWelcome to my console resume!', style1);
    console.log('');
    console.log('Name: ' + revName.toUpperCase() + ' 🔄 Pawel Jaskolski'.toUpperCase());
    console.log('Career: ', 'Full Stack Developer in Training');
    console.log('Description: ', 'Sequi Me!');
    console.log('');
    console.log('%cMy Interests:', style2)
    for (let i = 0; i < interests.length; i++) {
        console.log(interests[i])
    }
    console.log('');
    console.log('%cMy Previous Experiance:', style2)
    for (let i = 0; i < job.length; i++) {
        console.log(job[i] + ' - ' + title[i] + ' - ' + description[i])
    }
    console.log('');
    console.log('%cMy Skills:', style2)
    for (let j = 0; j < mySkills.length; j++) {
        if (mySkills[j].cool === true) {
            console.log('* BAM: ' + mySkills[j].skill)
        } else {
            console.log(mySkills[j].skill)
        }
    }
});
