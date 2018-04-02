import { connect } from 'react-redux'

const mapStateToProps = (state, { match }) => {
    return {
        post: match.params.post || ''
    }
}

export default Component => {
    return connect(mapStateToProps, null)(Component)
}