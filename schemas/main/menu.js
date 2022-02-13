export default {
    title: 'Menu',
    name: 'menu',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true
        },
        {
            title: 'Select Menu Items',
            name: 'MenuItems',
            type: 'array',
            of: [
                {type: 'selectMenuItem'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
}
