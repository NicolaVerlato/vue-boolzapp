var app = new Vue(
    {
        el: '#root',
        data: {
            show: false,
            textMessage: '',
            currentChat: 0,
            currentMessage: null,
            userSearch: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {
            goToThisChat(chatIndex) {
                // al click su una chat nella parte sinistra viene mostrata in pagina
                // la conversazione 
                this.currentChat = chatIndex;
            },
            sendMessage() {
                if(this.textMessage.length > 0) {
                    this.contacts[this.currentChat].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.textMessage,
                        status: 'sent'
                    });
                    this.textMessage = '';
                    setTimeout(this.receivedAnswer, 1000);
                }
            },
            receivedAnswer(){
                this.contacts[this.currentChat].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'ok',
                    status: 'received'
                });
            },
            searchLetters() {
                const userSearchLowerCase = this.userSearch.toLowerCase();

                this.contacts.forEach( (element) => {
                    const contactsNameLowercase = element.name.toLowerCase();

                    if(contactsNameLowercase.includes(userSearchLowerCase)) {
                        element.visible = true;
                    } else{
                        element.visible = false;
                    }
                });
            },
            deleteMessage(thisMessage) {
                this.contacts[this.currentChat].messages.splice(thisMessage, 1)
            },
            showDiv(thisMessage) { 
            this.currentMessage = thisMessage
            this.show = !this.show
            }
        }
    }
)