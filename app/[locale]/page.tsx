import { redirect } from 'next/navigation'

interface HomePageProps {
  params: { locale: string }
}

export default function HomePage({ params }: HomePageProps) {
  // Redirect to docs index
  redirect(`/${params.locale}/docs`)
}
