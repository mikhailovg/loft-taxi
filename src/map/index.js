import React from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import {AppConsumer} from '../App';

mapboxgl.accessToken = 'pk.eyJ1IjoibWlraGF5bG92ZyIsImEiOiJjazJib3llczcydzEwM2dtemhmb2k4bWhqIn0.0UoH2njxI_6IqDIWzXTmPw'

export const Map = ({setPage}) => {

    let mapRef = React.createRef()

    const [mapConfig, setMapConfig] = React.useState({lng: 30.273032, lat: 59.798668, zoom: 16, pitch: 45,})

    React.useEffect(() => {

        if (mapRef.current) {
            const map = new mapboxgl.Map({
                container: mapRef.current,
                style: 'mapbox://styles/mikhaylovg/ck2bqqqw403zf1cmztlbgz61y',
                center: [mapConfig.lng, mapConfig.lat],
                pitch: mapConfig.pitch,
                antialias: true,
                zoom: mapConfig.zoom,
            })

            // 3d-buildings
            map.on(('load'), () => {
                // Insert the layer beneath any symbol layer.
                let layers = map.getStyle().layers

                let labelLayerId
                for (let i = 0; i < layers.length; i++) {
                    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                        labelLayerId = layers[i].id
                        break
                    }
                }

                map.addLayer({
                    'id': '3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15,
                    'paint': {
                        'fill-extrusion-color': '#aaa',

                        // use an 'interpolate' expression to add a smooth transition effect to the
                        // buildings as the user zooms in
                        'fill-extrusion-height': [
                            'interpolate', ['linear'], ['zoom'],
                            15, 0,
                            15.05, ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate', ['linear'], ['zoom'],
                            15, 0,
                            15.05, ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': .6
                    }
                }, labelLayerId)
            })
        }

    })

    return (
        <AppConsumer>
            {context => {
                return context.isLoggedIn ?
                    <div className={'MapContainer'}>
                        <div ref={mapRef} className={'Map'}/>
                    </div> :
                    <div>
                        <h1 className={'PageTitle'}>Сначала залогиньтесь</h1>
                    </div>
            }}
        </AppConsumer>
    )
}

Map.propTypes = {
    setPage: PropTypes.func
}
