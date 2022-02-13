export default {
    name: 'selectMenuItem',
    type: 'object',
    fields: [
        {
            title: 'Menu Items To Select',
            name: 'MenuItemsToSelect',
            type: 'reference',
            to: [
                {type: 'menuItem'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'MenuItemsToSelect.title.GR'
        }
    }
}