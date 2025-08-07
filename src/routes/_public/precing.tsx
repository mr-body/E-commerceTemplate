import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/precing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/precing"!</div>
}
