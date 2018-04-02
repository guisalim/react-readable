import React from 'react'
import faker from 'faker'

import { dateHelper } from '../../../../helpers/dateHelper'
import { Card, Icon, Image } from 'semantic-ui-react'

const Component = props => {
    console.log(props)
    const { author, commentCount, timestamp, title, voteScore } = props.post
    const avatar = faker.image.people()
    return (
        <Card>
            <Image src={avatar} />
            <Card.Content>
                <Card.Header>
                    {author}
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                        {dateHelper(timestamp)}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {title}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='like' />{voteScore} Like(s)<br />
                <Icon name='comments' /> {commentCount} Comment(s)
            </Card.Content>
        </Card>
    )
}

export default Component
