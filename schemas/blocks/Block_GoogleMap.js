export default {
    title: 'Google Map',
    name: 'GoogleMap',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Display full width',
            name: 'fullwidth',
            type: 'boolean'
        },
        {
            title: 'Map center position latitude',
            name: 'lat',
            type: 'number'
        },
        {
            title: 'Map center position longitude',
            name: 'lng',
            type: 'number'
        },
        {
            title: 'Map zoom (integer from 5 to 18)',
            name: 'zoom',
            type: 'number'
        },
        {
            title: 'Position Marker image url',
            name: 'marker',
            type: 'string'
        },
        {
            title: 'Map center position title',
            name: 'title',
            type: 'localeString'
        },
        {
            title: 'infoWin title',
            name: 'infotitle',
            type: 'localeString'
        },
        {
            title: 'infoWin content (Must be written in HTML format)',
            name: 'infocontent',
            type: 'localeString'
        }
    ],
    initialValue: {
        fullwidth: false,
        zoom: 15,
        marker: 'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png'
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
