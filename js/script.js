/* Avremo una lista di annunci di lavoro,
ogni annuncio ha i seguenti dati (guarda l’oggetto dentro jobs),  starred e applied sono ulteriori proprietà all’interno di data
Creiamo altri oggetti all’interno di jobs così da avere ulteriori annunci di lavoro.
Milestone 1
Mostriamo tutti gli annunci in una lista, con una grafica molto elementare.

Milestone 2
Identificare il preferito
Identifichiamo nella lista gli annunci di lavoro preferiti, con un simbolo che si attiva/colora
solo se quell’annuncio è tra i preferiti (per esempio, una stella).
Aggiungere ai preferiti
Inoltre potremo aggiungere il singolo annuncio alla lista di preferiti, inserento un altro elemento nell’html su cui fare click o sfruttando quello attuale (il simbolo del primo step, la stella), che permette al click l’aggiunta dinamica dell’annuncio alla lista dei preferiti. 


Nota bene: La lista starred conterrà solo l’id dell’elemento, tramite il quale potremmo identificare quali annunci sono preferiti e quali no.

Milestone 3
Potremo anche inviare la nostra candidatura premendo sul pulsante APPLY.
Gli annunci a cui abbiamo mandato una candidatura non mostreranno il pulsante APPLY e si distingueranno dalle altre per colore e Badge ‘applied’.
Un annuncio a cui abbiamo inviato la candidatura automaticamente viene eliminato dalla lista starred.
Anche in questo caso inseriremo l’id nell’array applied. (come prima abbiamo fatto per lo starred)


Bonus
Quando premiamo sul pulsante APPLY, dopo 1 secondo viene mostrata una modale con Feedback ‘Candidatura inviata’ che sparirà dopo un altro secondo


NOTE
La grafica in questo esercizio è trascurabile. Mostriamo delle semplici liste.
*/
var app = new Vue (
    {
        el : '#app',
        data :{
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/05/2055',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Sony',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '1/01/0001',
                    logo: 'logo.jpg',
                    city: 'Tokyo',
                    contract: 'Stage'
                },
                {
                    id: 3,
                    company: 'Squaresoft',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '8/12/2000',
                    logo: 'logo.jpg',
                    city: 'New York',
                    contract: 'Part Time'
                },
                {
                    id: 4,
                    company: 'CdProjeckt',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '7/2/2021',
                    logo: 'logo.jpg',
                    city: 'Varsavia',
                    contract: 'Slavery'
                },
                {
                    id: 5,
                    company: 'Bethseda',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2022',
                    logo: 'logo.jpg',
                    city: 'London',
                    contract: 'Till End of Your Days'
                }

            ],
            starred: [1, 2, 3],
            applied: [4, 5],
            openModal: false,
        },
         //se clicco sul cuore vuoto aggiungo alla lista preferiti
        methods:{
            addFav: function(index){
                if (!this.starred.includes(index)) {
                    this.starred.push(index)
                }
            },
            removeFav: function(id) {
                if (this.starred.includes(id)) {
                    let index = this.starred.indexOf(id);
                    this.starred.splice(index,1);
                }
            },  
            applyJob: function (index){
                if(!this.applied.includes(index+1)) {
                    this.applied.push(index+1);
                    this.starred.splice(index, 1); 
                
                setTimeout( () => {
                    if (this.openModal === false) {
                        this.openModal = true;
                    }
                }, 1000);
                setTimeout(() => {
                    this.openModal = false;
                }, 2000);
                }
            },
        }
    }
)            
