const treeViewData = [
    {
        label : 'Home',
        to: '/'
    },
    {
        label : 'History',
        to: '/history',
        children: [
            {
                label : '1945',
                to: '/history/1945',
                children : [
                    {
                    label : 'Champaran Movement',
                    to : '/history/1945/champaran'
                    }
                ]
            },
            {
                label : '1953',
                to : '/history/1953'
            }
        ]
    },
    {
        label : 'Contact Us',
        to : '/contact',
        children : [
            {
                label : 'Phone',
                to : '/contact/phone'
            },
            {
                label : 'address',
                to : '/contact/address'
            }
        ]
    }
]
export default treeViewData;