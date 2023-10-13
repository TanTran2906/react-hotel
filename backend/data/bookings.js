
const bookings = [
    {
        _id: '5c8a1dfa2f8fb814b56fa651',
        bookingDate: '2023-08-22T03:43:22.723Z',
        startDate: '2023-09-11T00:00:00.000Z',
        endDate: '2023-09-18T00:00:00.000Z',
        numNights: 7,
        numGuests: 1,
        // cabinPrice: 1750,
        // extrasPrice: 105,
        totalPrice: 1855,
        status: 'unconfirmed',
        isPaid: false,
        observations: 'I have a gluten allergy and would like to request a gluten-free breakfast.',
        cabin: '5c8a1dfa2f8fb814b56fa104',
        user: '5c8a1dfa2f8fb814b56fa274',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa652',
        bookingDate: '2023-08-09T03:43:22.724Z',
        startDate: '2023-08-19T00:00:00.000Z',
        endDate: '2023-08-29T00:00:00.000Z',
        numNights: 10,
        numGuests: 2,
        // cabinPrice: 2500,
        // extrasPrice: 300,
        totalPrice: 2800,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa104',
        user: '5c8a1dfa2f8fb814b56fa275',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa653',
        bookingDate: '2023-08-15T03:43:22.724Z',
        startDate: '2023-09-23T00:00:00.000Z',
        endDate: '2023-09-29T00:00:00.000Z',
        numNights: 6,
        numGuests: 2,
        // cabinPrice: 1500,
        // extrasPrice: 0,
        totalPrice: 1500,
        status: 'unconfirmed',
        isPaid: false,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa104',
        user: '5c8a1dfa2f8fb814b56fa276',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa654',
        bookingDate: '2023-07-28T03:43:22.724Z',
        startDate: '2023-07-28T00:00:00.000Z',
        endDate: '2023-08-13T00:00:00.000Z',
        numNights: 16,
        numGuests: 2,
        // cabinPrice: 5200,
        // extrasPrice: 0,
        totalPrice: 5200,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa105',
        user: '5c8a1dfa2f8fb814b56fa277',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa655',
        bookingDate: '2023-09-09T03:43:22.724Z',
        startDate: '2023-09-26T00:00:00.000Z',
        endDate: '2023-09-29T00:00:00.000Z',
        numNights: 3,
        numGuests: 2,
        // cabinPrice: 975,
        // extrasPrice: 90,
        totalPrice: 1065,
        status: 'unconfirmed',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa105',
        user: '5c8a1dfa2f8fb814b56fa278',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa656',
        bookingDate: '2023-09-06T03:43:22.724Z',
        startDate: '2023-10-14T00:00:00.000Z',
        endDate: '2023-10-29T00:00:00.000Z',
        numNights: 15,
        numGuests: 2,
        // cabinPrice: 4875,
        // extrasPrice: 450,
        totalPrice: 5325,
        status: 'unconfirmed',
        isPaid: false,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa105',
        user: '5c8a1dfa2f8fb814b56fa279',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa657',
        bookingDate: '2023-07-08T03:43:22.724Z',
        startDate: '2023-08-17T00:00:00.000Z',
        endDate: '2023-08-22T00:00:00.000Z',
        numNights: 5,
        numGuests: 4,
        // cabinPrice: 1500,
        // extrasPrice: 300,
        totalPrice: 1800,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa106',
        user: '5c8a1dfa2f8fb814b56fa280',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa658',
        bookingDate: '2023-09-09T03:43:22.724Z',
        startDate: '2023-09-09T00:00:00.000Z',
        endDate: '2023-09-11T00:00:00.000Z',
        numNights: 2,
        numGuests: 3,
        // cabinPrice: 600,
        // extrasPrice: 0,
        totalPrice: 600,
        status: 'checked-in',
        isPaid: true,
        observations: 'We will be bringing our small dog with us',
        cabin: '5c8a1dfa2f8fb814b56fa106',
        user: '5c8a1dfa2f8fb814b56fa281',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa659',
        bookingDate: '2023-08-28T03:43:22.724Z',
        startDate: '2023-08-28T00:00:00.000Z',
        endDate: '2023-08-31T00:00:00.000Z',
        numNights: 3,
        numGuests: 4,
        // cabinPrice: 900,
        // extrasPrice: 180,
        totalPrice: 1080,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa106',
        user: '5c8a1dfa2f8fb814b56fa282',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa660',
        bookingDate: '2023-08-12T03:43:22.724Z',
        startDate: '2023-09-07T00:00:00.000Z',
        endDate: '2023-09-19T00:00:00.000Z',
        numNights: 12,
        numGuests: 4,
        // cabinPrice: 5400,
        // extrasPrice: 720,
        totalPrice: 6120,
        status: 'checked-in',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa107',
        user: '5c8a1dfa2f8fb814b56fa283',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa661',
        bookingDate: '2023-09-10T03:43:22.724Z',
        startDate: '2023-09-23T00:00:00.000Z',
        endDate: '2023-09-28T00:00:00.000Z',
        numNights: 5,
        numGuests: 4,
        // cabinPrice: 2250,
        // extrasPrice: 300,
        totalPrice: 2550,
        status: 'unconfirmed',
        isPaid: false,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa107',
        user: '5c8a1dfa2f8fb814b56fa284',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa662',
        bookingDate: '2023-09-08T03:43:22.724Z',
        startDate: '2023-09-29T00:00:00.000Z',
        endDate: '2023-09-30T00:00:00.000Z',
        numNights: 1,
        numGuests: 1,
        // cabinPrice: 450,
        // extrasPrice: 0,
        totalPrice: 450,
        status: 'unconfirmed',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa107',
        user: '5c8a1dfa2f8fb814b56fa285',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa663',
        bookingDate: '2023-09-11T03:43:22.724Z',
        startDate: '2023-09-25T00:00:00.000Z',
        endDate: '2023-10-02T00:00:00.000Z',
        numNights: 7,
        numGuests: 5,
        // cabinPrice: 2450,
        // extrasPrice: 525,
        totalPrice: 2975,
        status: 'unconfirmed',
        isPaid: false,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa108',
        user: '5c8a1dfa2f8fb814b56fa286',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa664',
        bookingDate: '2023-09-05T03:43:22.724Z',
        startDate: '2023-09-05T00:00:00.000Z',
        endDate: '2023-09-07T00:00:00.000Z',
        numNights: 2,
        numGuests: 4,
        // cabinPrice: 700,
        // extrasPrice: 120,
        totalPrice: 820,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa108',
        user: '5c8a1dfa2f8fb814b56fa287',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa665',
        bookingDate: '2023-09-07T03:43:22.724Z',
        startDate: '2023-09-07T00:00:00.000Z',
        endDate: '2023-09-10T00:00:00.000Z',
        numNights: 3,
        numGuests: 6,
        // cabinPrice: 1050,
        // extrasPrice: 0,
        totalPrice: 1050,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa108',
        user: '5c8a1dfa2f8fb814b56fa288',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa666',
        bookingDate: '2023-09-08T03:43:22.724Z',
        startDate: '2023-09-11T00:00:00.000Z',
        endDate: '2023-09-22T00:00:00.000Z',
        numNights: 11,
        numGuests: 6,
        // cabinPrice: 7700,
        // extrasPrice: 0,
        totalPrice: 7700,
        status: 'unconfirmed',
        isPaid: true,
        observations: 'We will be checking in late, around midnight. Hope that\'s okay:)',
        cabin: '5c8a1dfa2f8fb814b56fa109',
        user: '5c8a1dfa2f8fb814b56fa289',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa667',
        bookingDate: '2023-08-26T03:43:22.724Z',
        startDate: '2023-08-26T00:00:00.000Z',
        endDate: '2023-09-02T00:00:00.000Z',
        numNights: 7,
        numGuests: 4,
        // cabinPrice: 4900,
        // extrasPrice: 420,
        totalPrice: 5320,
        status: 'checked-out',
        isPaid: true,
        observations: 'I will need a rollaway bed for one of the guests',
        cabin: '5c8a1dfa2f8fb814b56fa109',
        user: '5c8a1dfa2f8fb814b56fa290',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa668',
        bookingDate: '2023-08-24T03:43:22.724Z',
        startDate: '2023-09-07T00:00:00.000Z',
        endDate: '2023-09-10T00:00:00.000Z',
        numNights: 3,
        numGuests: 6,
        // cabinPrice: 2100,
        // extrasPrice: 270,
        totalPrice: 2370,
        status: 'checked-out',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa109',
        user: '5c8a1dfa2f8fb814b56fa291',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa669',
        bookingDate: '2023-09-09T03:43:22.724Z',
        startDate: '2023-09-28T00:00:00.000Z',
        endDate: '2023-10-04T00:00:00.000Z',
        numNights: 6,
        numGuests: 8,
        // cabinPrice: 3000,
        // extrasPrice: 0,
        totalPrice: 3000,
        status: 'unconfirmed',
        isPaid: false,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa110',
        user: '5c8a1dfa2f8fb814b56fa292',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa670',
        bookingDate: '2023-09-04T03:43:22.724Z',
        startDate: '2023-10-21T00:00:00.000Z',
        endDate: '2023-10-31T00:00:00.000Z',
        numNights: 10,
        numGuests: 7,
        // cabinPrice: 5000,
        // extrasPrice: 1050,
        totalPrice: 6050,
        status: 'unconfirmed',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa110',
        user: '5c8a1dfa2f8fb814b56fa293',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa671',
        bookingDate: '2023-07-18T03:43:22.724Z',
        startDate: '2023-10-13T00:00:00.000Z',
        endDate: '2023-10-18T00:00:00.000Z',
        numNights: 5,
        numGuests: 6,
        // cabinPrice: 2500,
        // extrasPrice: 450,
        totalPrice: 2950,
        status: 'unconfirmed',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa110',
        user: '5c8a1dfa2f8fb814b56fa294',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa672',
        bookingDate: '2023-09-03T03:43:22.724Z',
        startDate: '2023-09-06T00:00:00.000Z',
        endDate: '2023-09-11T00:00:00.000Z',
        numNights: 5,
        numGuests: 9,
        // cabinPrice: 7000,
        // extrasPrice: 675,
        totalPrice: 7675,
        status: 'checked-in',
        isPaid: true,
        observations: 'My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible',
        cabin: '5c8a1dfa2f8fb814b56fa111',
        user: '5c8a1dfa2f8fb814b56fa273',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa673',
        bookingDate: '2023-09-11T03:43:22.724Z',
        startDate: '2023-09-11T00:00:00.000Z',
        endDate: '2023-09-16T00:00:00.000Z',
        numNights: 5,
        numGuests: 10,
        // cabinPrice: 7000,
        // extrasPrice: 750,
        totalPrice: 7750,
        status: 'unconfirmed',
        isPaid: true,
        observations: 'I am celebrating my anniversary, can you arrange for any special amenities or decorations?',
        cabin: '5c8a1dfa2f8fb814b56fa111',
        user: '5c8a1dfa2f8fb814b56fa295',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
    {
        _id: '5c8a1dfa2f8fb814b56fa674',
        bookingDate: '2023-09-01T03:43:22.724Z',
        startDate: '2023-09-21T00:00:00.000Z',
        endDate: '2023-09-24T00:00:00.000Z',
        numNights: 3,
        numGuests: 7,
        // cabinPrice: 4200,
        // extrasPrice: 0,
        totalPrice: 4200,
        status: 'unconfirmed',
        isPaid: true,
        observations: '',
        cabin: '5c8a1dfa2f8fb814b56fa111',
        user: '5c8a1dfa2f8fb814b56fa296',
        services: ['5c8a1dfa2f8fb814b56fa100'],
    },
]

export default bookings