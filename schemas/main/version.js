export default {
    title: 'Version',
    name: 'version',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string',
            readOnly: true
        },
        {
            title: 'More Info',
            name: 'moreinfo',
            type: 'string',
            readOnly: true
        },
        {
            title: 'Vesrion',
            name: 'version',
            type: 'string'
        },
        {
            title: 'Working Version',
            name: 'workversion',
            type: 'string',
            readOnly: true
        }
    ],
    initialValue: {
        description: 'Project Version (changing it, the data is transferred to the site and the Working Version is updated)'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
