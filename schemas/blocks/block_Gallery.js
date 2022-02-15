export default {
    title: 'Block Gallery',
    name: 'Gallery',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Padding Top (eg 60, means 60px. If the gallery is the 1st section of the page it must be 0.)',
            name: 'paddingtop',
            type: 'number'
        },
        {
            title: 'Select Gallery Items',
            name: 'items',
            type: 'array',
            of: [
                {
                    title: 'Gallery Item',
                    type: 'reference',
                    to: [
                        {type: 'galleryItem'}
                    ]
                }
            ]
        }
    ],
    initialValue: {
        paddingtop: 60
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
