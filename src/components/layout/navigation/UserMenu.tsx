interface UserMenuProps {
  isMenuOpen: boolean
}

export default function UserMenu(userMenuProps: UserMenuProps) {
  return (
    <div className="p-5 absolute" >
      <p>user</p>
    </div>
  )
}