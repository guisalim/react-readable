import React from 'react'

import { PostDetail } from '../../../defaultRoot/components'

const Component = props => {
    const { post } = props
    return (
        <div>
            {post && <PostDetail post={post} />}
        </div>
    )
}

export default Component
