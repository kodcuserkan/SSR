import { Media, MediaContextProvider } from "../media"

export default function HomePage() {
  return (
    <MediaContextProvider>
      <Media at="xs">Hello mobile!</Media>
      <Media at="sm">Hello tablet!</Media>
      <Media at="md">Hello big tablet!</Media>
      <Media greaterThan="md">Hello desktop!</Media>
    </MediaContextProvider>
  )
}
