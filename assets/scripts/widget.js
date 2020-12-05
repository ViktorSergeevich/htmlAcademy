
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.onload = () => {
    let messages = [
        {
            index: 0,
            header: 'One of the message 1',
            author: 'Viktor Kharchenko',
            dataTime: '20.10.2020',
            link: '#',
            status: false
        },
        {
            index: 1,
            header: 'One of the message 2sa dasdas dasdasd asdsad asd',
            author: 'Viktor Kharchenko',
            dataTime: '21.10.2020',
            link: '#',
            status: false
        },
        {
            index: 2,
            header: 'One of the message 3',
            author: 'Viktor Kharchenko',
            dataTime: '23.10.2020',
            link: '#',
            status: false
        },
        {
            index: 3,
            header: 'One of the message 4',
            author: 'Viktor Kharchenko',
            dataTime: '24.10.2020',
            link: '#',
            status: false
        },
        {
            index: 4,
            header: 'One of the message 5',
            author: 'Viktor Kharchenko',
            dataTime: '25.10.2020',
            link: '#',
            status: false
        },
        {
            index: 5,
            header: 'One of the message 1',
            author: 'Viktor Kharchenko',
            dataTime: '20.10.2020',
            link: '#',
            status: false
        },
        {
            index: 6,
            header: 'One of the message 2',
            author: 'Viktor Kharchenko',
            dataTime: '21.10.2020',
            link: '#',
            status: false
        },
        {
            index: 7,
            header: 'One of the message 3',
            author: 'Viktor Kharchenko',
            dataTime: '23.10.2020',
            link: '#',
            status: false
        },
        {
            index: 8,
            header: 'One of the message 4',
            author: 'Viktor Kharchenko',
            dataTime: '24.10.2020',
            link: '#',
            status: false
        },
        {
            index: 9,
            header: 'One of the message 5',
            author: 'Viktor Kharchenko',
            dataTime: '25.10.2020',
            link: '#',
            status: false
        },
        {
            index: 10,
            header: 'One of the message 1',
            author: 'Viktor Kharchenko',
            dataTime: '20.10.2020',
            link: '#',
            status: false
        },
        {
            index: 11,
            header: 'One of the message 2',
            author: 'Viktor Kharchenko',
            dataTime: '21.10.2020',
            link: '#',
            status: false
        },
        {
            index: 12,
            header: 'One of the message 3',
            author: 'Viktor Kharchenko',
            dataTime: '23.10.2020',
            link: '#',
            status: false
        },
        {
            index: 13,
            header: 'One of the message 4',
            author: 'Viktor Kharchenko',
            dataTime: '24.10.2020',
            link: '#',
            status: false
        },
        {
            index: 14,
            header: 'One of the message 5',
            author: 'Viktor Kharchenko',
            dataTime: '25.10.2020',
            link: '#',
            status: false
        },
        {
            index: 15,
            header: 'One of the message 1',
            author: 'Viktor Kharchenko',
            dataTime: '20.10.2020',
            link: '#',
            status: false
        },
        {
            index: 16,
            header: 'One of the message 2',
            author: 'Viktor Kharchenko',
            dataTime: '21.10.2020',
            link: '#',
            status: false
        },
        {
            index: 17,
            header: 'One of the message 3',
            author: 'Viktor Kharchenko',
            dataTime: '23.10.2020',
            link: '#',
            status: false
        },
        {
            index: 18,
            header: 'One of the message 4',
            author: 'Viktor Kharchenko',
            dataTime: '24.10.2020',
            link: '#',
            status: false
        },
        {
            index: 19,
            header: 'One of the message 5',
            author: 'Viktor Kharchenko',
            dataTime: '25.10.2020',
            link: '#',
            status: false
        },
    ]


    let docBody = $('body');

    let wrapper = document.createElement('div');
    wrapper.classList.add('widget');


    let messageContainer = document.createElement('div');
    messageContainer.classList.add('widget__message-container');



    let stats = document.createElement('div');
    stats.classList.add('widget__statistic');

    let statsContainer = document.createElement('div');
    statsContainer.classList.add('widget__statistic-container');

    let watchImg = document.createElement('img');
    watchImg.setAttribute('src', './assets/images/message.png');
    watchImg.setAttribute('height', '20');

    let countOfMessage = document.createElement('p');
    countOfMessage.innerText = messages.length;

    statsContainer.appendChild(watchImg);
    statsContainer.appendChild(countOfMessage);

    stats.appendChild(statsContainer);
    stats.addEventListener('click', showAllMessages);



    messages.forEach(value => {
        let message = document.createElement('div');
        message.classList.add('widget__message');

        let header = document.createElement('p');
        header.classList.add('widget__message-title');

        let author = document.createElement('p');
        author.classList.add('widget__message-author');

        let dataTime = document.createElement('p');
        dataTime.classList.add('widget__message-data-time');

        let link = document.createElement('a');
        link.classList.add('widget__message-link');
        link.setAttribute('href', value.link);

        header.innerText = value.header;
        author.innerText = value.author;
        dataTime.innerText = value.dataTime;
        link.innerText = 'Learn more...';

        link.addEventListener('click', (e) => {
            e.currentTarget.parentNode.classList.remove('new-msg');
        })

        message.appendChild(author);
        message.appendChild(header);
        message.appendChild(link);
        message.appendChild(dataTime);

        if (!value.status) {
            message.classList.add('new-msg');
        }
        messageContainer.appendChild(message);
    })




    wrapper.appendChild(stats);
    wrapper.appendChild(messageContainer);

    docBody.appendChild(wrapper);

    function showAllMessages() {
        wrapper.classList.toggle('full-screen');
        messageContainer.classList.toggle('all-actives');
    }
}
