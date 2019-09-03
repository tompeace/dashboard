export default (state = {}, { type, ...payload}) => {
    switch(type) {
        case 'CONNECT_WIDGET': {
            console.log('connecting', payload)
            return state
        }
        default:
            return state
    }
}