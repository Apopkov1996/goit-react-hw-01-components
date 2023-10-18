export const Friends = ({ dataFriends }) => {
  return (
    <ul class="friend-list">
      {dataFriends.map(({ avatar, name, isOnline, id }) => (
        <li class="friends-item" key={id}>
          <div class="friends-online">{isOnline}</div>
          <img class="friends-img" src={avatar} alt={name} />
          <p class="friends-name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
