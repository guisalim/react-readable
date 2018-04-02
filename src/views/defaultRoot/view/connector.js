import { connect } from 'react-redux'

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || ''
    return { ...state, filter }
}

export default Component => {
    return connect(mapStateToProps, null)(Component)
}