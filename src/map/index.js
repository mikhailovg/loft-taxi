import React, {useEffect, useState} from 'react'
import '../App.css'
import mapboxgl from 'mapbox-gl'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
    fetchAddressListRequest, fetchGetCardRequest,
    fetchGetRouteListRequest,

    getAddressList,
    getAuth, getCard,
    getRegister,
    getRouteList,

} from '../modules/main'

import history from '../history'

import {Button} from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

mapboxgl.accessToken = 'pk.eyJ1IjoibWlraGF5bG92ZyIsImEiOiJjazJib3llczcydzEwM2dtemhmb2k4bWhqIn0.0UoH2njxI_6IqDIWzXTmPw'

export const Map = () => {

    const auth = useSelector(getAuth, shallowEqual)
    const register = useSelector(getRegister, shallowEqual)

    const addressList = useSelector(getAddressList, shallowEqual)
    const callGetAddressListRequest = useSelector(fetchAddressListRequest, shallowEqual)

    const routeList = useSelector(getRouteList, shallowEqual)
    const callGetRoute = useSelector(fetchGetRouteListRequest, shallowEqual)

    const card = useSelector(getCard, shallowEqual)
    const callGetCardRequest = useSelector(fetchGetCardRequest, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(callGetCardRequest)
        dispatch(callGetAddressListRequest)
    }, [])

    let mapRef = React.createRef()

    const [state, setState] = useState({
        address1: null,
        address2: null,
        isOrderDone: false,
    })


    const [map, setMap] = useState(null);

    useEffect(() => {

        const initializeMap = ({ setMap }) => {
            const map = new mapboxgl.Map({
                container: mapRef.current,
                style: 'mapbox://styles/mikhaylovg/ck2bqqqw403zf1cmztlbgz61y',
                center: [30.273032, 59.798668],
                zoom: 8
            })

            map.on('load', () => {
                setMap(map)
            })
        }

        if (!map) initializeMap({ setMap });
    }, [map])

    const addRouteLayer = () => {
        map.addLayer({
            id: 'taxi-route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: routeList,
                    }
                }
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#ffc617',
                'line-width': 8
            }
        })
    }

    useEffect(() => {

        if (map && routeList && routeList.length && state.address1 && state.address1.length && state.address2 && state.address2.length) {

            map.flyTo({
                center: routeList[0],
                zoom: 10,
            })
            // debugger
            if (map.getStyle().layers.find(layer => layer.id === 'taxi-route')) {
                map.removeLayer('taxi-route')

                if (map.getSource('taxi-route')){
                    map.removeSource('taxi-route');
                }

                addRouteLayer()

            } else {

                addRouteLayer()
            }

            setState({...state, isOrderDone: true})

        }

    }, [routeList])

    const getSelectItemList = () => {
        return addressList && addressList.addresses && addressList.addresses.length ?
            addressList.addresses.map(address => (
                <MenuItem
                    key={'key_address_' + address}
                    value={address}
                    className={state.address1 === address || state.address2 === address ? 'Hidden' : null}>
                    {address}
                </MenuItem>
            )) : []
    }

    const isOrderButtonDisabled = !(state.address1 && state.address1.length && state.address2 && state.address2.length)

    return (auth && auth.success && JSON.parse(auth.success) === true) || (register && register.success && JSON.parse(register.success) === true) ?
        <div className={'MapContainer'}>
            <div ref={mapRef} className={'Map'}/>
            <div className={'MapFormContainer'}>

                {
                    card && card.cardNumber ?

                        state.isOrderDone ?
                            <div className={'MapForm'}>
                                <h1 className={'MapOrderTitle '}>Заказ размещён</h1>
                                <p className={'MapOrderText MarginBottom30'}>Ваше такси уже едет к вам. Прибудет
                                    приблизительно через 10 минут.</p>
                                <Button variant={'contained'}
                                        color={'primary'}
                                        className={'MapFormButton'}
                                        onClick={() => {
                                            setState({
                                                ...state,
                                                isOrderDone: false,
                                                address1: null,
                                                address2: null,
                                            })
                                        }}
                                >
                                    Сделать новый заказ
                                </Button>
                            </div>

                            :

                            <div className={'MapForm'}>
                                <div className={'MapFormRow'}>
                                    <Select
                                        placeholder={'123'}
                                        value={state.address1}
                                        onChange={(value) => setState({...state, address1: value.target.value})}
                                        autoWidth
                                    >
                                        {getSelectItemList()}
                                    </Select>
                                </div>
                                <div className={'MapFormRowMargin'}/>
                                <div className={'MapFormRow'}>
                                    <Select
                                        placeholder={'123'}
                                        value={state.address2}
                                        onChange={(value) => setState({...state, address2: value.target.value})}
                                        autoWidth
                                    >
                                        {getSelectItemList()}
                                    </Select>
                                </div>

                                <Button variant={'contained'}
                                        color={'primary'}
                                        className={'LoginButton LoginButtonMargin MapFormButton ' + (isOrderButtonDisabled ? 'ButtonDisabled' : null)}
                                        disabled={isOrderButtonDisabled}
                                        onClick={() => {
                                            dispatch({
                                                ...callGetRoute,
                                                payload: {
                                                    address1: state.address1,
                                                    address2: state.address2,
                                                }
                                            })
                                        }}
                                >

                                    Вызвать такси
                                </Button>
                            </div>

                        :

                        <div className={'MapForm'}>
                            <h1 className={'MapOrderTitle '}>Заполните платежные данные</h1>
                            <p className={'MapOrderText'}>Укажите информацию о банковской карте, чтобы сделать
                                заказ.</p>
                            <Button variant={'contained'}
                                    color={'primary'}
                                    className={'MapFormButton'}
                                    onClick={() => history.push('/profile')}
                            >
                                Перейти в профиль
                            </Button>
                        </div>

                }
            </div>
        </div> :
        <div>
            <h1 className={'PageTitle'}>Сначала залогиньтесь</h1>
        </div>
}