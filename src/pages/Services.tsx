import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchServices } from '../redux/thunks/serviceThunk'
type Props = {}

const Services = (props: Props) => {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state: RootState) => state.services)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);
    useEffect(() => {
        dispatch(fetchServices() as any)
    }, [dispatch])
    return (
        <div>
            {isLoading ? 'loading...' : data.map((elem: any) => (<div key={elem.id}>{elem.name}</div>))}
        </div>
    )
}

export default Services