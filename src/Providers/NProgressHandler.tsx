// import { useEffect } from 'react'
// import NProgress from 'nprogress'
// import { useRouter } from '@tanstack/react-router'

// export default function NProgressHandler() {
//   const router = useRouter()

//   useEffect(() => {
//     const unsub = router.subscribe(() => {
//       const { latest } = router.state

//       if (latest.status === 'pending') {
//         NProgress.start()
//       } else {
//         NProgress.done()
//       }
//     })

//     return () => unsub()
//   }, [router])

//   return null
// }
