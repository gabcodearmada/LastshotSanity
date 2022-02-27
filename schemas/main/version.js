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
            type: 'text',
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
        description: 'Project Version'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
