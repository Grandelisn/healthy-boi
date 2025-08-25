import { Outlet } from "react-router";

export function Home() {
    console.log('home')
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  )
};