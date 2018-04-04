import React from 'react'
import sortBy from 'sort-by'

import { PostDetail } from '../'
import { Dropdown } from 'semantic-ui-react'

class Component extends React.Component {
    state = { orderBy: '-timestamp' }

    onHandleChange(request) {
        const { orderBy } = this.state

        request === orderBy
            ? this.setState({ orderBy: `-${request}` })
            : this.setState({ orderBy: request })
    }

    render() {
        const { posts, filter } = this.props
        const { orderBy } = this.state
        
        const postsList = filter !== ''
            ? posts.filter(post => post.category === filter)
            : posts

        const sortOptions = [
            { name: 'Author', path: 'author' },
            { name: 'Likes', path: 'voteScore' },
            { name: 'Time', path: 'timestamp' },
            { name: 'Title', path: 'title' }
        ]

        return (
            <div>
                <Dropdown text='Sort by'>
                    <Dropdown.Menu>
                        {
                            sortOptions.map(option => <Dropdown.Item
                                key={option.path} text={option.name}
                                onClick={e => this.onHandleChange(option.path)}
                            />)
                        }
                    </Dropdown.Menu>
                </Dropdown>
                {
                    postsList.length > 0
                        ? postsList.sort(sortBy(orderBy, 'title')).map(post => <PostDetail key={post.id} post={post} />)
                        : filter !== ''
                            ? <p>No post was found in this category</p>
                            : <p>No Post was found</p>
                }
            </div>
        )
    }
}

export default Component