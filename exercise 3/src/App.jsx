import UserCard from './UserCard';

function App() {

  // const CurrentUser = "jamac";
  // const role = "admin";
  return (
    <>
      <UserCard
        CurrentUser={"abdifitah"}
        Email={"abdifitah@gmail.com"}
        role={"student"}
      />

      <UserCard
        CurrentUser={"mustafa"}
        Email={"mustafa@gmail.com"}
        role={"teacher"}
      />

      <UserCard
        CurrentUser={"jamac"}
        Email={"jamac@gmail.com"}
        role={"supervisor"}
      />

      <UserCard
        CurrentUser={"yusra"}
        Email={"yusra@gmail.com"}
        role={"secretary"}
      />

      <UserCard
        CurrentUser={"alisalad"}
        Email={"alisalad@gmail.com"}
        role={"ceo"}
      />
    </>
  )
}

export default App;