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
            title: 'With MORE on top',
            name: 'moreontop',
            type: 'boolean'
        },
        {
            title: 'MORE on top Background Color',
            name: 'bkgcolor',
            type: 'string',
            hidden: ({parent}) => !parent.moreontop
        },
        {
            title: 'MORE on top Text Color',
            name: 'textcolor',
            type: 'string',
            hidden: ({parent}) => !parent.moreontop
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
        paddingtop: 60,
        moreontop: false,
        bkgcolor: '#FFFFFF',
        textcolor: '#000000'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
