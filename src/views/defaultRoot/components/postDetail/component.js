import React from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'

import { dateHelper } from '../../../../helpers/dateHelper'
import { Feed, Icon, Segment } from 'semantic-ui-react'
import { CommentList } from '../'

const Component = ({ post, downVote, upVote }) => {
    const { author, body, category, commentCount, id, timestamp, title, voteScore } = post
    const avatar = faker.image.avatar()

    return (
        <Segment>
            <Feed>
                <Feed.Event>
                    <Feed.Label><img src={avatar} alt={id} /></Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User><b>{author}</b></Feed.User>
                            <Feed.Date>{dateHelper(timestamp)} in <a>{category.name}</a></Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name='like' />
                                {`${voteScore} Like(s)`}
                            </Feed.Like>
                            <Feed.Like>
                                <Icon name='comments' />
                                {commentCount > 0
                                    ? `${commentCount} Comment(s)`
                                    : `No Comments`
                                }
                            </Feed.Like>
                        </Feed.Meta>
                        <Feed.Extra>
                            <b>{title}</b>
                            <p>{body}</p>
                        </Feed.Extra>
                        <Feed.Meta>
                            <Feed.Like onClick={e => upVote(id)}>
                                <Icon name='thumbs up' />Like
                            </Feed.Like>
                            <Feed.Like onClick={e => downVote(id)}>
                                <Icon name='thumbs down' />Dislike
                            </Feed.Like>
                            <Feed.Like as={Link} to={`/CreateEdit/${id}`}>
                                <Icon name='edit' />Edit
                            </Feed.Like>
                            <Feed.Like as={Link} to={`/Post/${id}`}>
                                <Icon name='hand pointer' />Details
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
            {commentCount > 0 && <CommentList post={post} />}
        </Segment>
    )
}

export default Component