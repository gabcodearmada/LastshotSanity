export default {
    name: 'selectGalleryItem',
    type: 'object',
    fields: [
        {
            title: 'Gallery Items To Select',
            name: 'GalleryItemsToSelect',
            type: 'reference',
            to: [
                {type: 'galleryItem'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'GalleryItemsToSelect.title'
        }
    }
}
