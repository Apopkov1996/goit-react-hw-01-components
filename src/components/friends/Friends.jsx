export const Friends = ({ dataFriends }) => {
  return (
    <ul class="friend-list">
      {dataFriends.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="friends-name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
