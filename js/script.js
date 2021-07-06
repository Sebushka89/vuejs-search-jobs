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
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '1/01/0001',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Stage'
                },
                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '8/12/2000',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                },
                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '7/2/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Slavery'
                },
                {
                    id: 5,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2022',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Till End of Your Days'
                }

            ],
            starred: [1, 2, 3],
            applied: [4, 5]
        }
    }
)            
