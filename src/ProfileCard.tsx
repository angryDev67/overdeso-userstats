const ProfileCard = ({ userData }: any) => {
  if (!userData) return <p>Loading profile..</p>

  const { profile, stat } = userData
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-avatar">
        <img src={profile.avatar_url} alt={profile.username} />
        <span>{profile.username}</span>
      </div>

      {stat.conversation_count > 100 && (
        <div className="ProfileCard-achievement">
          {profile.username} loves to chat with people! Has {stat.conversation_count} conversations
        </div>
      )}

      <div className="ProfileCard-stat">
        <div className="ProfileCard-stat-item">
          <span>Followers</span>
          <span>{stat.follower_count.toLocaleString()}</span>
        </div>
        <div className="ProfileCard-stat-item">
          <span>Following</span>
          <span>{stat.following_count.toLocaleString()}</span>
        </div>
        <div className="ProfileCard-stat-item">
          <span>Comments written</span>
          <span>{stat.comment_count.toLocaleString()}</span>
        </div>
        <div className="ProfileCard-stat-item">
          <span>Diamonds received</span>
          <span>{stat.receiver_diamond_count.toLocaleString()}</span>
        </div>
        <div className="ProfileCard-stat-item">
          <span>Likes received</span>
          <span>{stat.receiver_post_like_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
