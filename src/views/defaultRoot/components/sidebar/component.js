import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

class Component extends React.Component {
    state = { active: this.props.filter }

    handleActive(e, path) {
        this.setState({ active: path })
    }

    render() {
        const { categories } = this.props
        const { active } = this.state
        const list = categories.concat({ name: 'All Categories', path: '' })
        return (
            <Menu pointing secondary vertical>
                <Menu.Header>Posts by Categories</Menu.Header>
                <Menu.Menu>
                    {categories
                        ? list.map(category =>
                            <Menu.Item
                                key={category.path}
                                as={Link}
                                to={`/${category.path}`}
                                name={category.name}
                                active={active === category.path}
                                onClick={e => this.handleActive(e, category.path)}
                            />)
                        : <Menu.Item name='No categories were found' />
                    }
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Component